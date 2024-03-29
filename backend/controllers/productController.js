import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // res.status(401);

  // throw new Error("some error");
  console.log("-----------------------  ");
  res.json(products);
});

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(201);

    return res.json(product);
  }
});

export { getProductById, getProducts };
