const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const Appointment = require("../models/Appointment");

const router = express.Router();

// 📌 Book an appointment
router.post("/book", verifyToken, async (req, res) => {
  try {
    const { doctorId, date, time, reason } = req.body;

    // ✅ Create new appointment
    const newAppointment = new Appointment({
      patientId: req.user.id,
      doctorId,
      date,
      time,
      reason,
      status: "pending", // Default status
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully", newAppointment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 📌 Get patient’s appointments
router.get("/my-appointments", verifyToken, async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.user.id }).populate("doctorId", "username");
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
