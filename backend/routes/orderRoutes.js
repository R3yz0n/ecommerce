import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
  getMyOrders,
} from "../controllers/orderController.js";
import { adminVerification, tokenVerification } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(tokenVerification, addOrderItems)
  .get(tokenVerification, adminVerification, getOrders);

router.route("/mine").get(tokenVerification, getMyOrders);
router.route("/:id").get(tokenVerification, getOrderById);

router.route("/:id/pay").put(tokenVerification, updateOrderToPaid);

router.route("/:id/deliver").put(tokenVerification, adminVerification, updateOrderToDelivered);

export default router;
