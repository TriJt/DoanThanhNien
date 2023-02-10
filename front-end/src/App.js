import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Quanly from "./pages/Quanly";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quanly" element={<Quanly />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
