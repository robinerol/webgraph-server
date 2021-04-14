const fs = require("fs");
const Chance = require("chance");

const searchResult = [];
const chance = new Chance();
const clusters = {
  0: [],
  1: [],
  2: [],
  3: [],
};

// generate nodes
for (let i = 0; i < 100; i++) {
  const node = {};

  const id = chance.hash({ length: 15 });
  node["id"] = id;
  node["score"] = chance.floating({ min: 0, max: 100 });
  node["title"] = chance.sentence({ words: 3 }).slice(0, -1);
  node["abstract"] = chance.paragraph({ sentences: 1 }).slice(0, -1);
  node["author"] = chance.last();
  node["year"] = chance.year({ min: 1990, max: 2021 });
  node["important"] = chance.bool({ likelihood: 20 });
  node["category"] = chance.integer({ min: 0, max: 1 });

  if (chance.bool({ likelihood: 75 })) {
    const cid = chance.integer({ min: 0, max: 3 });
    node["cluster"] = cid;
    clusters[cid].push(id);
  }

  searchResult.push(node);
}

// generate refs that can be used for edges
for (const nodePos in searchResult) {
  const node = searchResult[nodePos];

  const clusterID = node.cluster;
  if (clusterID === undefined) continue;

  const cluster = clusters[clusterID];

  node["refs"] = chance.pickset(
    cluster,
    chance.integer({ min: 1, max: cluster.length / 3 })
  );
}

console.log("Search results generated.");

// write JSON string to a file
const path = "assets/search.json";
fs.writeFile(path, JSON.stringify(searchResult), (err) => {
  if (err) {
    throw err;
  }
  console.log("Nodes saved to " + path);
});
