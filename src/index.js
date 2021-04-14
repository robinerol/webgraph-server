const express = require("express");
const search = require("../assets/search.json");

const app = express();
const port = 9002;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  console.log(`Request on '/' | Query: ${req.query.q}`);
  res.json(search);
});

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
