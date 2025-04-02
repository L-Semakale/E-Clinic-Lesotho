import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("patient"); // Default role set to patient
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Trim values to ensure no unnecessary whitespace
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedPassword = password.trim();
  
    // Validate inputs
    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(trimmedPassword)) {
      setError("Password must be at least 8 characters long, include a capital letter, number, and special character.");
      return;
    }

    if (!terms) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    console.log("Sending data:", { trimmedName, trimmedEmail, trimmedPhone, role, trimmedPassword });

    setLoading(true); // Set loading state to true when request starts

    try {
      // Simulating a successful signup response with the role-based redirection
      const data = {
        token: "sample-token", // You would replace this with a real token from the backend
        user: {
          role: role,
        }
      };
      
      console.log("Signup success:", data);

      // Store the token and user role in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role); 

      // Redirect to the appropriate dashboard based on the user role
      if (data.user.role === "patient") {
        navigate("/patient-dashboard");
      } else if (data.user.role === "doctor") {
        navigate("/doctor-dashboard");
      } else if (data.user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        setError("Invalid role, please contact support.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after request completes
    }
  };
  
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center">Create Account</h3>
        <p className="text-muted text-center">Manage your health easily</p>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
              type="tel"
              className="form-control"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
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
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              required
            />
            <label className="form-check-label">I agree with Terms & Conditions</label>
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="text-center mt-3">
          <p>— Or —</p>
          <button className="btn btn-outline-dark w-100 mb-2" disabled>Continue with Apple</button>
          <button className="btn btn-outline-danger w-100 mb-2">Continue with Google</button>
          <button className="btn btn-outline-primary w-100">Continue with Facebook</button>
        </div>

        <p className="mt-3 text-center">
          Already registered? <Link to="/login" className="text-primary">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
