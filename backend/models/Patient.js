const pool = require("../db"); // Import your PostgreSQL connection

// Function to create a patient
const createPatient = async (name, age, gender, diagnosis, contact) => {
  try {
    const result = await pool.query(
      "INSERT INTO patients (name, age, gender, diagnosis, contact) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, age, gender, diagnosis, contact]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error creating patient:", err);
    throw err;
  }
};

// Function to get all patients
const getPatients = async () => {
  try {
    const result = await pool.query("SELECT * FROM patients");
    return result.rows;
  } catch (err) {
    console.error("Error fetching patients:", err);
    throw err;
  }
};

module.exports = {
  createPatient,
  getPatients,
};
