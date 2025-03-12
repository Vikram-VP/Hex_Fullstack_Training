import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import AdminNavbar from "./navbar";

function AddUser() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ROLE_USER");
  const [cv, setCv] = useState(null);
  const [profilepic, setProfilepic] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validate inputs before submission
  const validateForm = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = "Name is required";
    if (!username) tempErrors.username = "Username is required";
    if (!password) tempErrors.password = "Password is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle CV file upload
  const handleCvChange = (e) => {
    setCv(e.target.files[0]);
  };

  // Handle Profile Picture upload
  const handleProfilePicChange = (e) => {
    setProfilepic(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      };

      // First, send user details as JSON (excluding files)
      const userData = { name, city, username, password, role };
      const response = await axios.post("http://localhost:5003/api/user/add", userData, { headers });

      if (response.status === 200) {
        const userId = response.data.id; // Assuming API returns the created user's ID

        const fileHeaders = {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        };

        if (cv) {
          const cvData = new FormData();
          cvData.append("cv", cv);
          await axios.post(`http://localhost:5003/api/user/upload-cv/${userId}`, cvData, { headers: fileHeaders });
        }

        if (profilepic) {
          const picData = new FormData();
          picData.append("profilepic", profilepic);
          await axios.post(`http://localhost:5003/api/user/upload-profilepic/${userId}`, picData, { headers: fileHeaders });
        }

        alert("User added successfully!");
        navigate("/users");
      }
    } catch (error) {
      console.error("Error adding user", error);
      alert("Error adding user, please try again.");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4">
        <div className="card shadow-lg p-4">
          <h3 className="text-center text-primary">Add User</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name *</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Username *</label>
              <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
              {errors.username && <small className="text-danger">{errors.username}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password *</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <small className="text-danger">{errors.password}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Role</label>
              <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="ROLE_USER">User</option>
                <option value="ROLE_ADMIN">Admin</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Upload CV</label>
              <input type="file" className="form-control" onChange={handleCvChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Profile Picture</label>
              <input type="file" className="form-control" onChange={handleProfilePicChange} />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success px-4">Add User</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
