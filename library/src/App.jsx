import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Books from "./components/books";
import Login from "./components/login";
import Register from "./components/register";
import Support from "./components/support";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import Addbook from "./components/addbook";
import Addstudent from "./components/addstudent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addbook" element={<Addbook />}></Route>
        <Route path="/addstudent" element={<Addstudent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
