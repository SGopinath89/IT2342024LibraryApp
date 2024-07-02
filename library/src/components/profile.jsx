import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/profile.css";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [reg_number, SetRegnum] = useState("");
  const [id, setid] = useState("");
  const [academicyear, setAcademicyear] = useState("");
  const { username } = useParams();
  console.log(username);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/profile/${username}`)
      .then((res) => {
        SetRegnum(res.data.reg_number);
        setid(res.data._id);
        setAcademicyear(res.data.academicyear);
      })
      .catch((err) => console.log(err));
  }, [username]);

  return (
    <div className="profile-details">
      <h1 className="Headname">Hello {username}</h1>
      <h1>Profile Details</h1>
      <div className="content">
        <h2>Id: {id}</h2>
        <h2>Registration Number:{reg_number}</h2>
        <h2>Username:{username}</h2>
        <h2>academicyear:{academicyear}</h2>
      </div>
    </div>
  );
};

export default Profile;
