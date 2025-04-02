import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating a login process with predefined roles and credentials
    if (email === "patient@example.com" && password === "Password123!") {
      // Simulate a successful login for a "patient"
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("role", "patient");
      console.log("Login success: patient");
      navigate("/patient-dashboard"); // Redirect to Patient Dashboard
    } else if (email === "doctor@example.com" && password === "Doctor123!") {
      // Simulate a successful login for a "doctor"
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("role", "doctor");
      console.log("Login success: doctor");
      navigate("/doctor-dashboard"); // Redirect to Doctor Dashboard
    } else if (email === "admin@example.com" && password === "Admin123!") {
      // Simulate a successful login for an "admin"
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("role", "admin");
      console.log("Login success: admin");
      navigate("/admin-dashboard"); // Redirect to Admin Dashboard
    } else {
      // Simulate an error if the login credentials don't match
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center">Access Account</h3>
        <p className="text-muted text-center">Log in to manage your appointments</p>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-end">
            <Link to="/forgot-password" className="text-primary">
              Forgot your password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Log In
          </button>
        </form>

        <p className="mt-3 text-center">
          Need to create an account? <Link to="/signup" className="text-primary">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
