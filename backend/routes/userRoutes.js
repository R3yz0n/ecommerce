import express from "express";
import {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { adminVerification, tokenVerification } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(tokenVerification, adminVerification, getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(tokenVerification, getUserProfile)
  .put(tokenVerification, updateUserProfile);
router
  .route("/:id")
  .delete(deleteUser)
  .get(getUserById)
  .put(tokenVerification, adminVerification, updateUser);

export default router;
