import React, { useState } from "react";
import "../css/addstudent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addstudent = () => {
  const [regnum, setRegnum] = useState("");
  const [username, setUsername] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/student/register", {
        regnum,
        username,
        password,
        grade,
      })
      .then((res) => {
        if (res.data.registered) {
          navigate("/dashboard");
        }
        console.log(res);
      })
      .catch((err) => console.log(err)); // Check for errors
  };

  return (
    <div className="studentcontainer">
      <form className="studentform" onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className="form">
          <label htmlFor="regnum">Registration No:</label>
          <input
            type="text"
            id="regnum"
            name="regnum"
            onChange={(e) => setRegnum(e.target.value)}
          />
        </div>
        <div className="form">
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form">
          <label htmlFor="grade">Academic Year:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
        <div className="form">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submitbutton">
          Register
        </button>
      </form>
    </div>
  );
};

export default Addstudent;
