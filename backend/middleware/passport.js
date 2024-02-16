import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:8000/api/auth/google/callback", // Update with your callback URL
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, callback) => {
      console.log("hello");
      return callback(null, profile);
    }
  )
);

// Serialize user to store in the session
passport.serializeUser((user, callback) => {
  console.log("hi");
  callback(null, user);
});

// Deserialize user from the session
passport.deserializeUser((user, callback) => {
  callback(null, user);
});

export default passport;
