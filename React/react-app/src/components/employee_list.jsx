import { useEffect, useState } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [page, SetPage] = useState(1);

  useEffect(() => {
    const getApiUrl = "https://reqres.in/api/users?page=" + page;
    fetch(getApiUrl)
      .then((response) => response.json())
      .then((json) => setEmployees(json.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                    {" "}
                    <i class="bi bi-pencil-square"></i>
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                    <i class="bi bi-trash3"></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default EmployeeList;
