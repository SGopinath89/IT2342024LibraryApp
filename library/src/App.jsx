import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Books from "./components/books";
import Login from "./components/login";
import Support from "./components/support";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import Addbook from "./components/addbook";
import Addstudent from "./components/addstudent";
import { useState } from "react";
import Logout from "./components/logout";
import axios from "axios";
import { useEffect } from "react";
import EditBook from "./components/editbook";
import Delete from "./components/delete";
import View from "./components/view";
import Books2 from "./components/books2";
import Profile from "./components/profile";

function App() {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState(null);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
          setUsername(res.data.username);
        } else {
          setRole("");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar role={role} userId={username} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/books2" element={<Books2 />}></Route>
        <Route path="/login" element={<Login setRole2={setRole} />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addbook" element={<Addbook />}></Route>
        <Route path="/addstudent" element={<Addstudent />}></Route>
        <Route path="/logout" element={<Logout setRole={setRole} />}></Route>
        <Route path="/book/:id" element={<EditBook />}></Route>
        <Route path="/delete/:id" element={<Delete />}></Route>
        <Route path="/view/:id" element={<View />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
