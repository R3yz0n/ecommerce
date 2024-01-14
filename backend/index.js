import express from "express";
import dotenv from "dotenv";
import { products } from "./data/products.js";
import connectToDB from "./config/db.js";

dotenv.config();

console.log(process.env.NODE_ENV);
const port = process.env.PORT || 4000;
const server = express();

server.get("/api/products", (req, res) => {
  // how to send only 10 products
  // how to send only 10 products
  res.json(products);
});

server.get("/api/products/:id", (req, res) => {
  const product = products.find((products) => products._id === req.params.id);
  res.json(product);
});

server.listen(port, () => console.log("SERVER is running on port", port));
connectToDB();
