const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const SECRET_KEY = process.env.JWT_SECRET; // Get secret from environment variable

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract Bearer Token

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No Token Provided." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user to request
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(403).json({ message: "Invalid or Expired Token." });
  }
};

module.exports = verifyToken; // Export only one function
