import AdminNavbar from "./navbar";

function AdminDashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <AdminNavbar />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center mt-4">
          <h3>This is the Admin Dashboard. You can perform all the admin operations here!</h3>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
