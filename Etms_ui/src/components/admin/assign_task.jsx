import { useEffect, useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function AssignTask() {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [empId, setEmpId] = useState("");
  const [tid, setTid] = useState("");

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        let headers = {
          Authorization: "Bearer " + localStorage.getItem("token"),
        };
        const resp = await axios.get(
          "http://localhost:5004/api/employee/getall",
          { headers }
        );
        setEmployees(resp.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    const getAllTask = async () => {
      try {
        let headers = {
          Authorization: "Bearer " + localStorage.getItem("token"),
        };
        const resp = await axios.get("http://localhost:5004/api/task/getall", {
          headers,
        });
        setTasks(resp.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    getAllEmployees();
    getAllTask();
  }, []);

  const process = async (e) => {
    e.preventDefault();
    console.log(empId);
    console.log(tid);

    let url = "http://localhost:5004/api/assign/employee/task";
    let headers = { Authorization: "Bearer " + localStorage.getItem("token") };

    try {
      const response = await axios.post(
        url,
        { eid: empId, tid: tid },
        { headers }
      );
      console.log(response);
      alert("Task assigned successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to assign task.");
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <AdminNavbar />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4" style={{ marginTop: "8%" }}>
          <div className="card">
            <div className="card-header">Assign task to Employee</div>
            <div className="card-body">
              <form onSubmit={process}>
                <div className="mt-4">
                  <label>Select Employee: </label>
                  <select
                    className="form-control"
                    onChange={(e) => setEmpId(e.target.value)}
                    value={empId}
                  >
                    <option value="">--------Select Employee------</option>
                    {employees.map((e, index) => (
                      <option key={index} value={e._id}>
                        {e.name} -- {e.jobTitle}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <label>Select Task: </label>
                  <select
                    className="form-control"
                    onChange={(e) => setTid(e.target.value)}
                    value={tid}
                  >
                    <option value="">--------Select Task------</option>
                    {tasks.map((t, index) => (
                      <option key={index} value={t._id}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <input
                    type="submit"
                    value="Process"
                    className="btn btn-warning mb-3"
                    style={{ marginTop: "20px" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default AssignTask;
