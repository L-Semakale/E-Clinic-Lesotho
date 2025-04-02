const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware"); // JWT authentication middleware
const Appointment = require("../models/Appointment"); // Appointment Model

// @route   GET /api/appointments/my-appointments
// @desc    Get logged-in patient's appointments
// @access  Private (Requires Auth)
router.get("/my-appointments", verifyToken, async (req, res) => {
  try {
    const patientId = req.user.id; // Extracted from JWT token

    // Fetch appointments where the patientId matches the logged-in user
    const appointments = await Appointment.find({ patientId }).populate("doctorId", "username");

    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: "Server Error. Unable to fetch appointments." });
  }
});

module.exports = router;
