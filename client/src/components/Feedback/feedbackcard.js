import React from 'react'

const FeedBackCard = ({ feedback: { question_id, title, content }, feedback, onItemDelete }) => {

    // Handle delete feedback
    function handleDelete() {
        fetch(`/feedbacks/${feedback.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json)
            .then(() => onItemDelete(feedback));
    }

    return (
        <div className='feedback_container'>
            <div className="feedback_options">
                <article className="feedback_option">
                    <img className="feedback_icon" src={"https://i.pinimg.com/564x/fa/d8/3b/fad83b229d4c0666e3f7d45035af5404.jpg"} alt="avatar" />
                    <div>
                        <h2 className='feed'>
                            <p className='feed_head'>Question Number:</p> {question_id}
                        </h2>
                        <h2 className='feed'>
                            <p className='feed_head'>Title:</p> {title}
                        </h2>
                        <h2 className='feed'>
                            <p className='feed_head'>Description:</p> {content}
                        </h2>
                    </div>
                    <button className="feedback_btn" onClick={handleDelete}>
                        Delete
                    </button>
                </article>
            </div>
        </div>
    )
}

export default FeedBackCard;
