import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DoctorDashboard = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Sample static appointments data
  const [appointments, setAppointments] = useState([
    {
      _id: "1",
      patientId: { username: "Lerato Molefe" },
      date: "2025-04-05",
      time: "10:00 AM",
      reason: "Consultation",
      status: "pending",
    },
    {
      _id: "2",
      patientId: { username: "Mosa Semakale" },
      date: "2025-04-06",
      time: "2:00 PM",
      reason: "Follow-up",
      status: "pending",
    },
    {
      _id: "3",
      patientId: { username: "Rapelang Thebola" },
      date: "2025-04-07",
      time: "9:00 AM",
      reason: "Routine check-up",
      status: "pending",
    },
  ]);

  const handleStatusUpdate = async (id, status) => {
    try {
      // Update status in the state
      setAppointments(
        appointments.map((appt) =>
          appt._id === id ? { ...appt, status } : appt
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Navigate to the patient's profile
  const goToPatientProfile = (username) => {
    navigate(`/patients-profile/${username}`); // Navigate to patient's profile page
  };

  return (
    <div className="container mt-5">
      <h2>Doctor Dashboard</h2>

      <h4 className="mt-4">Pending Appointments</h4>
      <div className="row">
        {appointments.length === 0 ? (
          <p>No pending appointments.</p>
        ) : (
          appointments.map((appt) => (
            <div key={appt._id} className="col-md-4 mb-4">
              <div className="card shadow-sm p-4">
                <h5 className="card-title">{appt.patientId.username}</h5>
                <p><strong>Date:</strong> {appt.date}</p>
                <p><strong>Time:</strong> {appt.time}</p>
                <p><strong>Reason:</strong> {appt.reason}</p>
                <div className="d-flex gap-3">
                  {/* Accept Button */}
                  <button
                    className="btn btn-success"
                    onClick={() => handleStatusUpdate(appt._id, "accepted")}
                    disabled={appt.status !== "pending"}
                  >
                    Accept
                  </button>

                  {/* Reject Button */}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleStatusUpdate(appt._id, "rejected")}
                    disabled={appt.status !== "pending"}
                  >
                    Reject
                  </button>

                  {/* Go to Patient Profile Button (Always visible) */}
                  <button
                    className="btn btn-primary"
                    onClick={() => goToPatientProfile(appt.patientId.username)} // Navigate to patient's profile
                  >
                    Go to Patient Profile
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;
