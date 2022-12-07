import React, { useRef } from 'react'
import { useState } from 'react';

const FeedBackForm = ({ onAddItem }) => {

    const form = useRef()

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='feedback_container'>
            <form ref={form} onSubmit={handleSubmit} >
            </form>
        </div>
    )
}

export default FeedBackForm;
