import express from "express";

const port = 8000;
const server = express();

server.get("/", (req, res) => {
  console.log("hi");
  res.send("hi");
});

console.log("hi");
server.listen(port, () => console.log("app is running on port", port));
