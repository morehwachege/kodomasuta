import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./pages/Dashboard";
import Feedback from "./components/Feedback/feedback";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assessments from "./pages/Assessments";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/assessments" element={<Assessments />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/feedback" element={<Feedback />} />

    </Routes>

  );
}

export default App;
