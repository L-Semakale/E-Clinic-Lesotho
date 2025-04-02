const express = require("express");
const { verifyToken, isDoctor } = require("../middleware/authMiddleware");
const Appointment = require("../models/Appointment");

const router = express.Router();

// 📌 Get doctor's appointments
router.get("/appointments", verifyToken, isDoctor, async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctorId: req.user.id, status: "pending" }).populate("patientId", "username");
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 📌 Update appointment status (Accept/Reject)
router.put("/appointments/:id/status", verifyToken, isDoctor, async (req, res) => {
  try {
    const { status } = req.body;
    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });

    appointment.status = status;
    await appointment.save();

    res.status(200).json({ message: `Appointment ${status}`, appointment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
