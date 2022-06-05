import "./index.css";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import {Route, Routes} from "react-router-dom";
import Patient from "./Patient";
import Doctor from "./Doctor";
import Navbar from "./Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="patient" element={<Patient />} />
      <Route path="doctor" element={<Doctor />} />
      <Route path="navbar" element={<Navbar />} />
    </Routes>
  );
}

export default App;
