import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import EmployeeNavbar from "./navbar";

function ViewDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        let headers = {
          Authorization: "Bearer " + localStorage.getItem("token"),
        };
        const response = await axios.get(
          `http://localhost:5004/api/task/get/${id}`,
          { headers }
        );
        setTask(response.data);
      } catch (err) {
        console.error("Error fetching task details", err);
      }
    };

    fetchTaskDetails();
  }, [id]);

  if (!task) {
    return <div className="text-center mt-5 text-danger">Task not found!</div>;
  }

  return (
    <>
      <EmployeeNavbar />
      <div className="container mt-5">
        <div className="card shadow-lg p-4">
          <div className="card-header bg-primary text-white text-center">
            <h3>Full Details </h3>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <tbody>
              <h5 className="mb-3 text-secondary">Task Information</h5>
                <tr>
                  <th>Title</th>
                  <td>{task.title}</td>
                </tr>
                <tr>
                  <th>Short Description</th>
                  <td>{task.shortDescription}</td>
                </tr>
                <tr>
                  <th>Start Date</th>
                  <td>{new Date(task.startDate).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <th>Estimated End Date</th>
                  <td>{new Date(task.estimatedEndDate).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>
                    
                    
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Project Details Section */}
            {task.project && (
              <>
                <hr />
                <h5 className="mb-3 text-secondary">Project Information</h5>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Project Name</th>
                      <td>{task.project.title}</td>
                    </tr>
                    <tr>
                      <th>Client Name</th>
                      <td>{task.project.clientName}</td>
                    </tr>
                    <tr>
                      <th>Technology Stack</th>
                      <td>{task.project.techStack}</td>
                    </tr>
                    <tr>
                      <th>Project Start Date</th>
                      <td>{new Date(task.project.startDate).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <th>Project Estimated End Date</th>
                      <td>{new Date(task.project.estimatedEndDate).toLocaleDateString()}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDetails;
