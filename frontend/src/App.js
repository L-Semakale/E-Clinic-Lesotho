import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LaunchScreen from "./components/pages/LaunchScreen";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import PatientDashboard from "./components/pages/PatientDashboard";
import DoctorDashboard from "./components/pages/DoctorDashboard";
import AdminDashboard from "./components/pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import BookAppointment from "./components/pages/BookAppointment";
import ManageUsers from "./components/pages/ManageUsers";
import PatientsProfile from "./components/pages/PatientsProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes for Patients */}
        <Route element={<ProtectedRoute allowedRoles={["patient"]} />}>
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/patients-profile" element={<PatientsProfile />} />
        </Route>

        {/* Protected Routes for Doctors */}
        <Route element={<ProtectedRoute allowedRoles={["doctor"]} />}>
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        </Route>

        {/* Protected Routes for Admins */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-users" element={<ManageUsers />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
