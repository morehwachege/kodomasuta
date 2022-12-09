import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./pages/Dashboard";
import Feedback from "./components/Feedback/feedback";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AssessmentCard from "./components/assessmentcard";
import MultipleChoiceCard from "./components/MultipleChoiceCard";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/assessmentcard" element={<AssessmentCard />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/multiplechoicecard" element={<MultipleChoiceCard />} />
    </Routes>

  );
}

export default App;
