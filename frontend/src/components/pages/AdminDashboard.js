import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ Import Link

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/login"); // Redirect non-admins
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Admin Panel</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {/* Card 1: User Management */}
        <div className="col mb-4">
          <div className="card shadow-sm border-primary">
            <div className="card-body text-center">
              <h5 className="card-title">User Management</h5>
              <p className="card-text">Manage users, roles, and permissions.</p>
              <Link to="/manage-users" className="btn btn-primary">Manage Users</Link> {/* ✅ Fixed Link */}
            </div>
          </div>
        </div>

        {/* Card 2: Appointments Management */}
        <div className="col mb-4">
          <div className="card shadow-sm border-success">
            <div className="card-body text-center">
              <h5 className="card-title">Appointments</h5>
              <p className="card-text">View and manage appointments.</p>
              <button className="btn btn-success" onClick={() => navigate("/appointments")}>Manage Appointments</button>
            </div>
          </div>
        </div>

        {/* Card 3: Reports */}
        <div className="col mb-4">
          <div className="card shadow-sm border-warning">
            <div className="card-body text-center">
              <h5 className="card-title">Reports</h5>
              <p className="card-text">View system reports and analytics.</p>
              <button className="btn btn-warning" onClick={() => navigate("/reports")}>View Reports</button>
            </div>
          </div>
        </div>

        {/* Card 4: Settings */}
        <div className="col mb-4">
          <div className="card shadow-sm border-info">
            <div className="card-body text-center">
              <h5 className="card-title">Settings</h5>
              <p className="card-text">Configure system settings and preferences.</p>
              <button className="btn btn-info" onClick={() => navigate("/settings")}>Go to Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
