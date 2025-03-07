import { NavLink } from "react-router"; 

function AdminNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#ffff" }} // Light Grey Background
    >
      <div className="container">
        {/* Brand Name */}
        <NavLink className="navbar-brand fw-bold" to="/" style={{ color: "#000000"}}>
          Admin Panel
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ">
              <NavLink className="nav-link text-dark" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/employee-onboarding">
                AddUser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/employees">
                All User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/add-job">
                AddJob
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/all-jobs">
                AllJob
              </NavLink>
            </li>
          </ul>

          {/* User Dropdown */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle text-dark"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user-circle"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                  <NavLink className="dropdown-item text-dark" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
