const { Client } = require("pg");
const bcrypt = require("bcryptjs");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect().then(() => {
  console.log("PostgreSQL Connected");
}).catch((err) => console.error("PostgreSQL Connection Error:", err));

// Function to create a new user in the database
const createUser = async ({ name, email, phone, role, password }) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (name, email, phone, role, password)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;

    const values = [name, email, phone, role, hashedPassword];
    const result = await client.query(query, values);
    return result.rows[0];  // Return the created user
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

// Function to find a user by email
const findUserByEmail = async (email) => {
  try {
    const query = `SELECT * FROM users WHERE email = $1;`;
    const result = await client.query(query, [email]);
    return result.rows[0]; // Return the found user
  } catch (error) {
    console.error("Error finding user:", error);
    throw new Error("Error finding user");
  }
};

module.exports = { createUser, findUserByEmail };
