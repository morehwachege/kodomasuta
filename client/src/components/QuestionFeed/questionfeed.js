import React, { useEffect, useState } from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import './questfeed.css';
import QuestFeedCard from "./questfeedcard";
import QuestionFeedCard from "./questionfeedcard";

const QuestionFeed = () => {

    const [questions, setQuestions] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('/questions')
            .then((response) => response.json())
            .then(questions => setQuestions(questions))
    }, [])

    useEffect(() => {
        fetch('/feedbacks')
            .then((response) => response.json())
            .then(feebacks => setFeedbacks(feebacks))
    }, [])


    return (
        <div>
            <Navbar />
            <h2 className="feed_form">Questions and Feedbacks</h2>
            <div className="question_feed">
                <div className="left_feedback">
                    <h3 className="feed_form">Questions</h3>
                    {questions.map((question) => (
                        <QuestionFeedCard key={question.id} question={question} />))
                    }
                </div>
                <div className="right_feedback">
                    <h3 className="feed_form">Feedbacks</h3>
                    {feedbacks.map((feedback) => (
                        <QuestFeedCard key={feedback.id} feedback={feedback} />))
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default QuestionFeed;