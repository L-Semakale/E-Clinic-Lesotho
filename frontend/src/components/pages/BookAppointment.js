import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/1000s.jpg';
import img2 from '../../assets/doc.jpeg';
import img3 from '../../assets/doctor.webp';
import img4 from '../../assets/doc.jpg';
import img5 from '../../assets/images (6).jpeg';
import img6 from '../../assets/images (7).jpeg';

const doctorsData = [
  { id: 1, name: "Dr. Rethabile Khotso", specialty: "Pediatrics", description: "Friendly and experienced child specialist.", image: img1 },
  { id: 2, name: "Dr. Lebohang Pule", specialty: "Cardiology", description: "Expert in heart health and treatments.", image: img2 },
  { id: 3, name: "Dr. Reitumetse Molise", specialty: "Dermatology", description: "Specialist in skin health and care.", image: img3 },
  { id: 4, name: "Dr. Elizabeth Thabane", specialty: "Orthopedics", description: "Experienced in bone and joint care.", image: img4 },
  { id: 5, name: "Dr. Phomolo Thebe", specialty: "Neurology", description: "Specialist in brain and nervous system.", image: img5 },
  { id: 6, name: "Dr. Ralineo Fatsa", specialty: "General Practice", description: "Comprehensive care for all ages.", image: img6 },
];

const BookAppointment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#31A0D8", minHeight: "100vh", width: "100vw", padding: "20px", borderRadius: "0" }}>
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 style={{ color: "#ffffff" }}>Book Appointment</h2>
        <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-circle" />
      </div>

      {/* Search Bar */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search for doctor or specialty..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Specialty Filters */}
      <div className="mb-3">
        {["Eye", "Tooth", "General"].map((specialty) => (
          <button
            key={specialty}
            className={`btn me-2 ${selectedSpecialty === specialty ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setSelectedSpecialty(specialty)}
            style={{ backgroundColor: selectedSpecialty === specialty ? "#D83192" : "#ffffff", color: "#333" }}
          >
            {specialty}
          </button>
        ))}
      </div>

      {/* Doctor List */}
      <div className="row">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="col-md-6 mb-3">
            <div className="card p-3 shadow-sm d-flex flex-row align-items-center" style={{ backgroundColor: "#ffffff", color: "#333" }}>
              <img
                src={doctor.image}
                alt={doctor.name}
                className="rounded-circle me-3"
                width="60"
                height="60"
              />
              <div>
                <h5>{doctor.name}</h5>
                <p className="mb-1 text-muted">{doctor.specialty}</p>
                <p className="small">{doctor.description}</p>
                <Link to={`/book-appointment/${doctor.id}`} className="btn" style={{ backgroundColor: "#D83192", color: "#ffffff" }}>
                  Check Availability
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookAppointment;