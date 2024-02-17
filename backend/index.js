import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, routeNotFound } from "./middleware/errorHandler.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import "./middleware/passport.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const port = process.env.PORT || 4000;
const server = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
server.use(cors(corsOptions));
server.use(express.json());
server.use(urlencoded({ extended: true }));

// cookie parser middlware
server.use(cookieParser());

server.use(session({ secret: "helloboi", resave: true, saveUninitialized: true }));
server.use(passport.initialize());
server.use(passport.session());

server.use("/api/products", productRoutes);
server.use("/api/users", userRoutes);
server.use("/api/auth", authRoutes);

server.use(routeNotFound);
server.use(errorHandler);

server.listen(port, () => console.log("SERVER is running on port", port));
[...Array(10)].forEach(() => console.log());

connectToDB();
