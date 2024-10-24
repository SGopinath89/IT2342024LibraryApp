import React, { useState } from "react";
import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setRole2 }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/auth/login", { username, password, role })
      .then((res) => {
        if (res.data.login && res.data.role === "admin") {
          setRole2("admin");
          navigate("/dashboard");
        } else if (res.data.login && res.data.role === "student") {
          setRole2("student");
          navigate("/");
        } else {
          console.log("Invalid role or login status");
        }
      })
      .catch((err) => console.log(err)); // Check for errors
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <br />
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button className="login-button" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
