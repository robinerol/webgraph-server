const Chance = require("chance");
const express = require("express");
const search = require("../assets/search.json");

const app = express();
const port = 9002;
const chance = new Chance();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// returns all available resources
app.get("/", (req, res) => {
  console.log(`Request on '/' | Query: ${req.query.q}`);
  res.json(search);
});

// returns random nodes, q specifies the amount, default 1
app.get("/node/random", (req, res) => {
  console.log(`Request on '/node/random' | Query: ${req.query.q}`);

  res.json(chance.pickset(search, req.query.q ?? 1));
});

// returns all info of a node
app.get("/node", (req, res) => {
  console.log(`Request on '/node' | Query: ${req.query.q}`);

  for (const node in search) {
    if (search[node].id === req.query.q) {
      res.json(search[node]);
      return;
    }
  }

  return res.status(404).send({
    message: `No node with id ${req.query.q} found.`,
  });
});

app.listen(port, () => {
  console.log(`WebGraph Dev Server listening at http://localhost:${port}`);
});
