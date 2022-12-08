import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AssessmentCard from "./components/assessmentcard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/assessmentcard" element={<AssessmentCard />} />
    </Routes>

  );
}

export default App;
