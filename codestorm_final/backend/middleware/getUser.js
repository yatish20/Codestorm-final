const jwt = require("jsonwebtoken");
const JWT_SECRET = "f1nEZ69";

const getUser = (req, res, next) => {
  // Get user from JWT token and add id to req object
  try {
    const token = req.header("auth-token"); // Ensure you're using the correct header key
    if (!token) {
      return res
        .status(401)
        .send({ message: "Use proper token for authentication." });
    }

    // Verify the token
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user; // Add user data to the request object
    next(); // Call the next middleware function
  } catch (error) {
    console.error("Token verification error:", error.message); // Log the error for debugging
    return res
      .status(401)
      .send({ message: "Use proper token for authentication." });
  }
};

module.exports = getUser;
