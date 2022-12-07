import React, { useRef } from 'react'
import { useState } from 'react';

const FeedBackForm = ({ onAddItem }) => {

    const form = useRef()

    const [title, setTItle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newFeedback = {
            title: title,
            content: content,
        };
        fetch("/feedbacks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        })
            .then((res) => res.json())
            .then((newItem) => onAddItem(newItem));
        setTItle("");
        setContent("");
    }

    return (
        <div className='feedback_container'>
            <form ref={form} onSubmit={handleSubmit} >
                <h5 className='feed_form'>Feedback Form</h5>
                <input className="feedbak" type="text" placeholder="title" aria-label="Full name" name="title" value={title} onChange={(e) => setTItle(e.target.value)} required />

                <textarea className="feedbak" type="text" placeholder="Description" rows="3" aria-label="Full name" name="content" value={content} onChange={(e) => setContent(e.target.value)} required />

                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FeedBackForm;
