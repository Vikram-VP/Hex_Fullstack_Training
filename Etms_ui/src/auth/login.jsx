import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const processLogin = async (event) => {
        event.preventDefault();
        let loginApi = "http://localhost:5004/api/auth/login";

        try {
            const response = await axios.post(loginApi, {
                username: username,
                password: password
            });

            let role = response.data.role;
            localStorage.setItem("token", response.data.token);

            switch (role) {
                case "ROLE_ADMIN":
                    navigate("/admin/dashboard");
                    break;
                case "ROLE_EMPLOYEE":
                    navigate("/employee/dashboard");
                    break;
                default:
                    break;
            }
        } catch (err) {
          console.log(err)
            setMsg("Invalid Credentials");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <form onSubmit={processLogin}>
                    <div className="login-header">
                        <div className="logo-container">
                            <span className="logo-text">ETMS</span>
                        </div>
                        <h2>Employee Task Management System</h2>
                        <p>Please login to your account</p>
                    </div>

                    {msg && <div className="alert">{msg}</div>}

                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn-login" disabled={!username || !password}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
