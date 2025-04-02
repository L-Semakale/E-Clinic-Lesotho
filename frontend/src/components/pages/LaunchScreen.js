import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'; 

const LaunchScreen = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" />
      <h1 style={styles.title}>E-Clinic</h1>
      <p style={styles.subtitle}>Discover the best way to manage your health today</p>

      <Link to="/login" style={styles.loginButton}>Log In</Link>
      <Link to="/signup" style={styles.signupButton}>Sign Up</Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#74A9BE",
    textAlign: "center",
  },
  logo: {
    width: "150px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: "16px",
    color: "white",
    marginBottom: "40px",
  },
  loginButton: {
    display: "block",
    width: "200px",
    padding: "15px",
    backgroundColor: "white",
    color: "#74A9BE",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  signupButton: {
    display: "block",
    width: "200px",
    padding: "15px",
    border: "2px solid white",
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "10px",
  },
};

export default LaunchScreen;
