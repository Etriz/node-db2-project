const express = require("express");
const carsRouter = require("./carsRouter");

const server = express();

server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "it's working", name: "node-db2" });
});

function errorHandling(error, req, res, next) {
  res.status(error.status).json({ error: error.errorMessage });
}

server.use(errorHandling);

module.exports = server;
