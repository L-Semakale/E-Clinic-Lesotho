import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to fetch dynamic route params

const PatientsProfile = () => {
  const { username } = useParams(); // Get the username from URL params
  const [patientData, setPatientData] = useState({});

  // Static patient data
  const patientProfiles = {
    "Lerato Molefe": {
      name: "Lerato Molefe",
      dob: "1990-03-12",
      gender: "Female",
      contact: "+27 123 456 789",
      medical_history: "No significant medical history.",
    },
    "Mosa Semakale": {
      name: "Mosa Semakale",
      dob: "1985-07-25",
      gender: "Male",
      contact: "+27 987 654 321",
      medical_history: "Hypertension, currently on medication.",
    },
    "Rapelang Thebola": {
      name: "Rapelang Thebola",
      dob: "1995-11-10",
      gender: "Female",
      contact: "+27 555 555 555",
      medical_history: "Asthma, allergic to pollen.",
    },
  };

  // Set patient data based on the username passed in the URL
  useEffect(() => {
    if (patientProfiles[username]) {
      setPatientData(patientProfiles[username]);
    } else {
      setPatientData(null); // Handle case where no patient data is found
    }
  }, [username]);

  if (!patientData) {
    return <div className="container mt-4">Patient not found.</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{patientData.name}'s Profile</h2>
      <p><strong>Date of Birth:</strong> {patientData.dob}</p>
      <p><strong>Gender:</strong> {patientData.gender}</p>
      <p><strong>Contact:</strong> {patientData.contact}</p>
      <p><strong>Medical History:</strong> {patientData.medical_history}</p>
    </div>
  );
};

export default PatientsProfile;
