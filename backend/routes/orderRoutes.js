import express from "express";
import {
  createOrder,
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/orderController.js";
import { adminVerification, tokenVerification } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(tokenVerification, addOrderItems)
  .get(tokenVerification, adminVerification, getOrders);

router.route("/").get(tokenVerification, adminVerification, getOrderById);

router.route("/:id/pay").put(tokenVerification, updateOrderToPaid);

router.route("/:id/deliver").put(tokenVerification, adminVerification, updateOrderToDelivered);

export default router;
