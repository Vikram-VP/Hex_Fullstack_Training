import { NavLink } from "react-router";

function AdminNavbar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <NavLink to="/admin/employee-onboarding"
                    class="nav-link"
                    href="#"
                    style={{ textDecoration:'none'  }}>
                  
                    Employee Onboarding
                </NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  All Employees
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Assign Task to Employee
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
