import asyncHandler from "../middleware/asyncHandler";

// @desc   Register user
// @route   POST /api/users/login
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("auth users");
});

// @desc   Logout user / clear cookie
// @route   POST /api/users/login
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.send("auth users");
});
