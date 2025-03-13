import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import EmployeeNavbar from "./navbar";
import { toast } from "react-toastify";

function ViewDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

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

    const fetchComments = async () => {
      try {
        let headers = {
          Authorization: "Bearer " + localStorage.getItem("token"),
        };
        const response = await axios.get(
          `http://localhost:5004/api/comment/getByTask/${id}`,
          { headers }
        );
        setComments(response.data);
      } catch (err) {
        console.error("Error fetching comments", err);
      }
    };

    fetchTaskDetails();
    fetchComments();
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!newComment.trim()) {
      toast.error("Comment cannot be empty!");
      return;
    }

    try {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };

      const response = await axios.post(
        "http://localhost:5004/api/comment/add",
        { message: newComment, task: id },
        { headers }
      );

      setComments([...comments, response.data]);
      setNewComment("");
      toast.success("Comment added successfully!");
    } catch (err) {
      console.error("Error adding comment", err);
      toast.error("Failed to add comment.");
    }
  };

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
                  <td>
                    {new Date(task.estimatedEndDate).toLocaleDateString()}
                  </td>
                </tr>
              </tbody>
            </table>

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
                      <td>
                        {new Date(task.project.startDate).toLocaleDateString()}
                      </td>
                    </tr>
                    <tr>
                      <th>Project Estimated End Date</th>
                      <td>
                        {new Date(
                          task.project.estimatedEndDate
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}

            <div className="mt-4">
              <h5 className="mb-3 text-secondary">Add Comment</h5>
              <form onSubmit={handleAddComment}>
                <textarea
                  className="form-control"
                  rows={4}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                />
                <button type="submit" className="btn btn-primary mt-2">
                  Add Comment
                </button>
              </form>
            </div>

            <div className="mt-4">
              <h5 className="mb-3 text-secondary">All Comments</h5>
              {comments.length > 0 ? (
                <ul className="list-group">
                  {comments.map((comment) => (
                    <li key={comment._id} className="list-group-item">
                      <strong>{comment.username}:</strong> {comment.message}
                      <br />
                      <small className="text-muted">
                        {new Date(comment.commentDate).toLocaleString()}
                      </small>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">No comments yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDetails;
