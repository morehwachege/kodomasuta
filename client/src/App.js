import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./pages/Dashboard";
import Feedback from "./components/Feedback/feedback";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";
import MultipleChoiceCard from "./components/MultipleChoiceCard";
import QuestionsForm from "./components/QuestionsForm";
import QuestionPage from "./components/QuestionsPage";
import Assessments from "./pages/Assessments";
import { useEffect, useState } from "react"
import QuestionFeed from "./components/QuestionFeed/questionfeed";
import TestPage from "./pages/TestPage";

function App() {
  const [assessment, setAssessment] = useState([]);
  const [studentAssessments, setStudentAssessments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/assessments")
      .then(res => res.json())
      .then(data => {
        setAssessment(data)
      })
  }, [])

  useEffect(() => {
    fetch("/student_assessments")
      .then(res => res.json())
      .then(data => {
        setStudentAssessments(data)
      })
  }, [])


  function handleLogin(user) {
    setUser(user)
  }
  function handleLogout() {
    setUser(null)
  }

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/dashboard" element={<Dashboard assessment={assessment} user={user}
        onLogin={handleLogin} onLogout={handleLogout} studentAssessments={studentAssessments}
      />} />
      <Route exact path="/assessments" element={<Assessments assessment={assessment} user={user} onLogout={handleLogout} />} />
      <Route exact path="/feedback" element={<Feedback />} />
      <Route exact path="/questionfeed" element={<QuestionFeed />} />
      <Route exact path="/assessments/test/:id" element={<TestPage assessment={assessment} user={user} onLogout={handleLogout} studentAssessments={studentAssessments} />} />
      <Route path="/multiplechoicecard" element={<MultipleChoiceCard />} />
      <Route path="/questionspage" element={<QuestionPage />} />
      <Route path="/questionsform" element={<QuestionsForm />} />
    </Routes>

  );
}

export default App;
