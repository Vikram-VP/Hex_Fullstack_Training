import { NavLink } from "react-router";

function EmployeeNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink
            to="/employee/dashboard"
            className="navbar-brand"
            href="#"
            style={{ textDecoration: "None", color: "black" }}
          >
            ETMS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          &nbsp;&nbsp;&nbsp;
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/employee/tasks"
                  style={{ textDecoration: "None", color: "black" }}
                  className="nav-link"
                >
                  Tasks
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default EmployeeNavbar;
