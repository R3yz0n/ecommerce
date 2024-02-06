import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, routeNotFound } from "./middleware/errorHandler.js";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 4000;
const server = express();
server.use(express.json());
server.use(urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:3000",
  //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //   credentials: true, // enable set cookie
};
server.use(cors(corsOptions));

server.use("/api/products", productRoutes);
server.use("/api/users", userRoutes);

server.use(routeNotFound);
server.use(errorHandler);

server.listen(port, () => console.log("SERVER is running on port", port));
[...Array(10)].forEach(() => console.log());

connectToDB();
