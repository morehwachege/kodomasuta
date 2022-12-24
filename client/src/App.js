import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./pages/Dashboard";
import Feedback from "./components/Feedback/feedback";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MultipleChoiceCard from "./components/MultipleChoiceCard";
import QuestionsForm from "./components/QuestionsForm";
import QuestionPage from "./components/QuestionsPage";
import Assessments from "./pages/Assessments";
import { useEffect, useState } from "react"
import QuestionFeed from "./components/QuestionFeed/questionfeed";
import TestPage from "./pages/TestPage";

function App() {
  const [assessment, setAssessment] = useState([]);

  useEffect(() => {
    fetch("/assessments")
      .then(res => res.json())
      .then(data => {
        setAssessment(data)
      })
  }, [])



  return (
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard assessment={assessment} />} />
      <Route path="/assessments" element={<Assessments assessment={assessment} />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/multiplechoicecard" element={<MultipleChoiceCard />} />
      <Route path="questionspage" element={<QuestionPage />} />
      <Route path="/questionsform" element={<QuestionsForm />} />     
      <Route path="/questionfeed" element={<QuestionFeed />} />
      <Route path="/assessments/test/:id" element={<TestPage assessment={assessment}/>} />
    </Routes>

  );
}

export default App;
