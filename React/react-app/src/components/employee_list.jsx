import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getApiUrl = "https://reqres.in/api/users?page=" + page;
    fetch(getApiUrl)
      .then((response) => response.json())
      .then((json) => {
        setEmployees(json.data);
        setTotalPages(json.total_pages);
      });
  }, [page]);

  const deleteEmployee = async (id) => {
    try {
      const deleteApi = "https://reqres.in/api/users/" + id;
      // eslint-disable-next-line no-unused-vars
      const response = await axios.delete(deleteApi);
      let temp = [...employees].filter((e) => e.id !== id);
      setEmployees(temp);
      toast("Employee record deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <table className="table caption-top align-middle">
          <caption>List of employees</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Profile Pic</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <div className="circular_image">
                    <img src={emp.avatar}></img>
                  </div>
                </td>
                <td style={{ width: "20%" }}>{emp.first_name}</td>
                <td style={{ width: "20%" }}>{emp.last_name}</td>
                <td style={{ width: "30%" }}>{emp.email}</td>
                <td>
                  <span>
                    <NavLink to="/employee-update" state={{ id: emp.id }}>
                      <i class="bi bi-pencil-square"></i>
                    </NavLink>
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                    <a href="#" onClick={() => deleteEmployee(emp.id)}>
                      <i class="bi bi-trash3"></i>
                    </a>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {page == 1 ? (
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">
                  Previous
                </a>
              </li>
            ) : (
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  tabIndex="-1"
                  onClick={() => setPage(page - 1)}
                >
                  Previous
                </a>
              </li>
            )}
            {[...Array(totalPages)].map((p, index) => (
              <li key={index} className="page-item">
                {index + 1 === page ? (
                  <span className="page-link">{index + 1}</span>
                ) : (
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => setPage(index + 1)}
                  >
                    {index + 1}
                  </a>
                )}
              </li>
            ))}
            {page == totalPages ? (
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            ) : (
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default EmployeeList;
