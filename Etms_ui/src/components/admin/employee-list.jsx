import { NavLink } from "react-router";
import AdminNavbar from "./navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);
  const getEmployees = async () => {
    try {
      let header = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
      const resp = await axios.get(
        "http://localhost:5004/api/employee/getall",
        {
          headers: header,
        }
      );

      setEmployees(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    console.log("employee ID:", id);
    try {
      let header = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
      await axios.delete(`http://localhost:5004/api/employee/delete/${id}`, {
        headers: header,
      });
      toast.success("Employee deleted successfully!");
      getEmployees();
    } catch (error) {
      console.error("Delete Error:", error);
      toast.error("Employee not deleted");
    }
  };
  
  
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          {" "}
          <AdminNavbar />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Profile</th>
                <th scope="col">Name</th>
                <th scope="col">JobTitle</th>
                <th scope="col">Salary</th>
                <th scope="col">City</th>
                <th scope="col">Username</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <div className="circular_image">
                      <img src={employees.profilePic} alt="U"></img>
                    </div>
                  </td>
                  <td style={{ width: "15%" }}> {e.name}</td>
                  <td style={{ width: "15%" }}> {e.jobTitle}</td>
                  <td style={{ width: "15%" }}>{e.salary}</td>

                  <td style={{ width: "15%" }}>{e.city}</td>
                  <td style={{ width: "15%" }}>{e.username}</td>
                  <td style={{ width: "15%" }}>
                    <span>
                      <NavLink to="/">
                        <i className="bi bi-pencil-square"></i>
                      </NavLink>
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <a href="#">
                      <i
                        className="bi bi-trash3 "
                        onClick={() => handleDelete(e._id)}
                      ></i>
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-filetype-pdf"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 6.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z" />
                      <path
                        fill-rule="evenodd"
                        d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.7 11.7 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
