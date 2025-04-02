app.post("/api/signup", async (req, res) => {
  const { name, email, phone, role, password } = req.body;

  // Validate that all required fields are present
  if (!name || !email || !phone || !role || !password) {
      return res.status(400).json({ error: "All fields are required" });
  }

  // Check if the email already exists in the database
  try {
      const checkUserQuery = "SELECT * FROM users WHERE email = $1";
      const userExists = await pool.query(checkUserQuery, [email]);

      if (userExists.rows.length > 0) {
          return res.status(400).json({ error: "Email is already in use" });
      }

      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      const query = `INSERT INTO users (name, email, phone, role, password) 
                     VALUES ($1, $2, $3, $4, $5) RETURNING *;`;

      const values = [name, email, phone, role, hashedPassword];
      const result = await pool.query(query, values);
      const newUser = result.rows[0];

      // Send a success response with the new user details
      res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
      console.error("Signup Error:", error);  // Log error for debugging
      res.status(500).json({ error: "Server error during signup" });
  }
});
