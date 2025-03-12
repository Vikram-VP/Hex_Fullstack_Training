import { useEffect, useState } from "react";
import EmployeeNavbar from "./navbar";
import axios from "axios";
import { useNavigate } from "react-router";

function EmployeeTask() {
  const [tasks, setTasks] = useState([]);  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        let headers = {
          Authorization: "Bearer " + localStorage.getItem("token"), 
        };
        const response = await axios.get(
          "http://localhost:5004/api/task/getAll", 
          { headers }
        );
        setTasks(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <EmployeeNavbar />
        </div>
      </div>
      <div className="row">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div className="col-md-6 mt-4" key={task._id}>
              <div className="card">
                <div className="card-header">Start Date: {task.startDate}</div>
                <div className="card-body">
                  <strong>Title:</strong> {task.title}
                  <br />
                  <strong>Project Name:</strong> {task.project?.title} 
                  <br />
                  {task.shortDescription}
                  <br />
                  <br />
                  
                  <button 
                    className="btn btn-info" 
                    onClick={() => navigate(`/employee/task/${task._id}`)}
                  >
                    View Full Details
                  </button>
                </div>
                <div className="card-footer">Estimated End Date: {task.estimatedEndDate}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-5">
            <h4>No tasks assigned yet.</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default EmployeeTask;
