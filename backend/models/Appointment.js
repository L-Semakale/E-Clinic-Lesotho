const pool = require("../db"); // Import your PostgreSQL connection

// Function to create an appointment
const createAppointment = async (patientId, doctorId, date, time, status = "Pending") => {
  try {
    const result = await pool.query(
      "INSERT INTO appointments (patient_id, doctor_id, date, time, status) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [patientId, doctorId, date, time, status]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error creating appointment:", err);
    throw err;
  }
};

// Function to get appointments
const getAppointments = async () => {
  try {
    const result = await pool.query("SELECT * FROM appointments");
    return result.rows;
  } catch (err) {
    console.error("Error fetching appointments:", err);
    throw err;
  }
};

module.exports = {
  createAppointment,
  getAppointments,
};
