import AdminNavbar from "./navbar";

function AdminDashboard() {
  return (
    <div className="bg-light min-vh-100">
      <AdminNavbar />
      <div className="container mt-5 pt-5">
        <h2>Welcome to Admin Dashboard</h2>
        {/* Dashboard Content Goes Here */}
      </div>
    </div>
  );
}

export default AdminDashboard;
