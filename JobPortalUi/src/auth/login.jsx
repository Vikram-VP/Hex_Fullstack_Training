import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import "./login.css"; // Import the CSS file

function Login() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const processLogin = async (event) => {
    event.preventDefault();
    let loginApi = "http://localhost:5003/api/auth/login";

    console.log(`Inside processLogin with ${username} & ${password}`);

    try {
      const response = await axios.post(loginApi, {
        username: username,
        password:password
      });

      console.log(response);
      let role = response.data.role;
      localStorage.setItem("token", response.data.token);

      switch (role) {
        case "ROLE_ADMIN":
          navigate("/admin/dashboard");
          break;
        case "ROLE_USER":
          navigate("/user/dashboard");
          break;
        default:
          setMsg("Unknown role, unable to redirect.");
          break;
      }
    } catch (error) {
      console.log(error);
      setMsg("Invalid Credentials");
    }
  };

  return (
    <div className="container-fluid">
      <div className="signup-box">
        {/* Form Section */}
        <div className="signup-form">
          <h2 className="signup-title">JOB PORTAL LOGIN</h2>
          <form onSubmit={processLogin}>
            <br />
            <br />
            <div className="form-group">
              <label>
                <i className="bi bi-person-fill"></i> {/* Bootstrap icon */}
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username} 
                  onChange={(event) => setUsername(event.target.value)}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                <i className="bi bi-lock-fill"></i> {/* Bootstrap icon */}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password} 
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Login"
                className="btn btn-primary"
                disabled={!username || !password} // Disables button if fields are empty
              />
            </div>
          </form>

          {msg && <div className="alert alert-danger">{msg}</div>}
        </div>

        {/* Image Section */}
        <div className="signup-image">
          <img
            src="https://storage.googleapis.com/a1aa/image/ytLwcax-UjkUY48wbN-gRfCVtQ5ByuSNv2PhmA-YjUw.jpg"
            alt="Illustration of a desk with a laptop, plant, and chair"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
