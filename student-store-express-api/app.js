const express = require("express");
const { storage } = require("./data/storage");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

app.use("/store", require("./store"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
