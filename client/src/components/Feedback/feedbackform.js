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
            </form>
        </div>
    )
}

export default FeedBackForm;
