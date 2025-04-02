const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { client } = require("./db");  // Ensure this imports your db client (e.g., pg client)
const SECRET_KEY = "ffb2a34292e7ad33fa857b11d415ca84e566cb6f110fe5677c3c7dd90e67fd3";  // Use an environment variable for the secret key

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Check if user exists
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = result.rows[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    // Send the response
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name, // Include other user fields as needed
      },
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login Error:", error); // Log the error for debugging
    res.status(500).json({ error: "Server error during login" });
  }
});
