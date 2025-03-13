import { useState, useEffect } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function AddTask() {
  const [title, setTitle] = useState("");
  const [sdesc, setSdesc] = useState("");
  const [startDate, setStartDate] = useState("");
  const [edate, setEdate] = useState("");
  const [project, setProject] = useState("");
  const [projects, setProjects] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      let url = "http://localhost:5004/api/project/getall";
      let header = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };

      try {
        const response = await axios.get(url, { headers: header });
        if (Array.isArray(response.data)) {
          setProjects(response.data);
        } else {
          console.error("Invalid project data:", response.data);
          setProjects([]);
        }
      } catch (err) {
        console.log("Error fetching projects:", err.message);
        setProjects([]);
      }
    };

    fetchProjects();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    let url = "http://localhost:5004/api/task/add";
    let header = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };

    try {
      const response = await axios.post(
        url,
        {
          title: title,
          shortDescription: sdesc,
          startDate: startDate,
          estimatedEndDate: edate,
          project: project,
        },
        { headers: header }
      );
      setMsg("Task Added Successfully");
      console.log(response);
    } catch (err) {
      console.log(err.message);
      setMsg("Error in adding task!");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <AdminNavbar />
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-dark text-white">Add Task</div>
            <div className="card-body">
              <form onSubmit={addTask}>
                <div className="mb-3">
                  <label className="form-label">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Short Description:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={sdesc}
                    onChange={(e) => setSdesc(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Start Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Estimated End Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    value={edate}
                    onChange={(e) => setEdate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Project:</label>
                  <select
                    className="form-control"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    required
                  >
                    <option value="">-- Select Project --</option>
                    {projects.length > 0 ? (
                      projects.map((proj) => (
                        <option key={proj._id} value={proj._id}>
                          {proj.title}
                        </option>
                      ))
                    ) : (
                      <option disabled>No projects available</option>
                    )}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
              {msg && <p className="mt-3 text-center">{msg}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTask;
