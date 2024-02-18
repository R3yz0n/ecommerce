import express from "express";
import passport from "passport";
const router = express.Router();

router.get(
  "/google",
  passport.authenticate(
    "google",
    { successRedirect: "http://localhost:3000" },
    { scope: ["profile", "email"] }
  )
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "http://localhost:3000/login/failed",
  })
);
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    message: "Login failed",
  });
});
router.get("/login/success", (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.status(200).json({
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

export default router;
