import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function EmpProfile() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState(undefined);
  const [pic, setPic] = useState(undefined);

  const handeFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handlePicChange = (e) => {
    setPic(e.target.files[0]);
    console.log(pic);
  };

  const uploadPIC = async () => {
    if (!pic) {
      console.log("Pic not present " + pic);
      return;
    }
    const fData = new FormData();
    fData.append("file", pic);
    const header = {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "multipart/form-data",
    };
    try {
      const resp = await axios.post(
        "http://localhost:5004/api/employee/uploadpic",
        fData,
        {
          headers: header,
        }
      );
      toast.success("Profile picture uploaded successfully!");
      console.log(resp);
    } catch (err) {
      toast.error("Failed to upload picture.");
      console.log(err);
    }
  };

  const uploadCV = async () => {
    if (!file) {
      console.log("File not present " + file);
      return;
    }
    const fData = new FormData();
    fData.append("file", file);
    const header = {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "multipart/form-data",
    };
    try {
      const resp = await axios.post(
        "http://localhost:5004/api/employee/uploadcv",
        fData,
        {
          headers: header,
        }
      );
      console.log(resp);
      toast.success("CV uploaded successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to upload file.");
    }
  };

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        let token = localStorage.getItem("token");
        let response = await axios.get(
          "http://localhost:5004/api/employee/emp",
          {
            headers: { Authorization: "Bearer " + token },
          }
        );

        let data = response.data;
        setName(data.name);
        setCity(data.city);
        setSalary(data.salary);
        setJobTitle(data.jobTitle);
        setUsername(data.username);
        setPassword(data.password);
      } catch (error) {
        console.error("Error fetching employee details", error);
      }
    };

    fetchEmployeeDetails();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log("updated");
      toast.success("Updation successfully!");
    } catch (error) {
      console.log("Error updating profile", error);
      toast.error("Failed to update");
      setMsg("Error updating profile.");
    }
  };

  return (
    <div className="card">
      <div className="card-header">Employee Profile</div>
      <div className="card-body">
        {msg && <div className="alert alert-info">{msg}</div>}
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Salary</label>
            <input
              type="text"
              className="form-control"
              value={salary}
              disabled
            />
          </div>
          <div className="col-6">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              className="form-control"
              value={jobTitle}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              disabled
            />
          </div>
        </form>
        <hr />
        <div className="col-lg-12">
          <label>Profile Pic</label>
          <input
            type="file"
            className="form-control"
            onChange={handlePicChange}
          />
          <br />
          <button className="btn btn-secondary" onClick={uploadPIC}>
            Upload
          </button>
        </div>
        <hr />
        <div className="col-lg-12">
          <label htmlFor="inputCity" className="form-label">
            Upload updated CV
          </label>
          <input
            type="file"
            className="form-control"
            onChange={handeFileChange}
          />
          <br />
          <button className="btn btn-secondary" onClick={uploadCV}>
            Upload
          </button>
        </div>
        <hr />
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleProfileUpdate}
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmpProfile;
