import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/appointments/my-appointments", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setAppointments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch appointments");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#98D8EF", minHeight: "100vh", width: "100vw", padding: "20px", borderRadius: "0" }}>
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: "#ffffff" }}>Home Dashboard</h2>
        <div className="d-flex flex-column align-items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-circle"
            width="40"
            height="40"
          />
          {/* Link to Patient Profile under the Profile Image */}
          <Link to="/patients-profile" className="btn mt-2" style={{ backgroundColor: "#F37199", color: "#FFFFFF" }}>
            Go to My Profile
          </Link>
        </div>
      </div>

      {/* Search Input */}
      <div className="input-group mb-4">
        <input type="text" className="form-control" placeholder="Search health resources..." style={{ borderColor: "#ffffff" }} />
      </div>

      {/* Health Metrics Section */}
      <div className="row">
        {[
          { title: "Heart Rate", action: "Start" },
          { title: "Temperature", action: "Record" },
          { title: "Weight", action: "Update" },
          { title: "Hydration", action: "Add" },
        ].map((metric, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card p-3 text-center border rounded" style={{ backgroundColor: "#FFFFFF", color: "#333" }}>
              <h5>{metric.title}</h5>
              <button className="btn" style={{ backgroundColor: "#F37199", color: "#FFFFFF" }}>{metric.action}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Appointments Section */}
      <h4 className="mt-5" style={{ color: "#ffffff" }}>Upcoming Appointments</h4>
      {loading && <p style={{ color: "#ffffff" }}>Loading appointments...</p>}
      {error && <p style={{ color: "#ff4d4d" }}>{error}</p>}

      {!loading && !error && appointments.length === 0 && (
        <div className="text-center">
          <p style={{ color: "#ffffff" }}>No upcoming appointments.</p>
          <Link to="/book-appointment" className="btn" style={{ backgroundColor: "#F37199", color: "#FFFFFF" }}>
            Book an Appointment
          </Link>
        </div>
      )}

      <div className="row">
        {appointments.map((appt) => (
          <div key={appt?._id} className="col-md-4 mb-4">
            <Link to={`/book-appointment/${appt?._id}`} className="text-decoration-none">
              <div className="card p-3 text-center border rounded" style={{ backgroundColor: "#FFFFFF", color: "#333" }}>
                <h5>{appt?.doctorId?.username || "Unknown Doctor"}</h5>
                <p><strong>Date:</strong> {appt?.date || "TBD"}</p>
                <p><strong>Time:</strong> {appt?.time || "TBD"}</p>
                <p><strong>Status:</strong> {appt?.status || "Pending"}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Book New Appointment Button */}
      <div className="text-center mt-4">
        <Link to="/book-appointment" className="btn" style={{ backgroundColor: "#F37199", color: "#FFFFFF" }}>
          Book New Appointment
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="mt-4">
        {["Electronic Health Record", "Request a Prescription", "Schedule a Check-up"].map((action, index) => (
          <button key={index} className="btn w-100 mb-2" style={{ backgroundColor: "#ffffff", color: "#333", border: "1px solid #D83192" }}>
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;
