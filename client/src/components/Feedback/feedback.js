import React, { useEffect, useState } from "react";
import './feedback.css';
import FeedBackForm from "./feedbackform";
import FeedBackCard from "./feedbackcard"

const Feedback = () => {

    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('/feedbacks')
            .then((response) => response.json())
            .then(feebacks => setFeedbacks(feebacks))
    }, [])


    const handleNewFeedback = (feedback) => {
        setFeedbacks([...feedbacks, feedback]);
    };

    return (
        <div>
            <h2 className="feed_form">Assessment Feedback</h2>
            {feedbacks.map((feedback) => (
                <FeedBackCard key={feedback.id} feedback={feedback} />))
            }
            <FeedBackForm handleNewFeedback={handleNewFeedback} feedbacks={feedbacks} />
        </div>
    );
}

export default Feedback;
