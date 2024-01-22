import dotenv from "dotenv";
import colors from "colors";
import connectToDB from "./config/db.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import users from "./data/users.js";
import products from "./data/products.js";
import mongoose from "mongoose";

dotenv.config(process.env.MONGO_URI);
connectToDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    // console.log(createdUsers);

    const adminUser = createdUsers[0]._id;
    // console.log(adminUser);
    const sampleProducts = products.map((prod) => {
      return { ...prod, user: adminUser };
    });
    // console.log(sampleProducts);
    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit(0);
  } catch (error) {
    console.log(error.message.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Deleted!".red.inverse);
    process.exit(0);
  } catch (error) {
    console.log(error.message.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
