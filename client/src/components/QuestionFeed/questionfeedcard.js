import React from 'react'

const QuestionFeedCard = ({ question: { id, question, correct_answer } }) => {

    return (
        <div className='questionfeed'>
            <article className="_option">
                <div>
                    <h2 className='feed'>
                        <p className='feed_head'>Question Number: {id}</p>
                    </h2>
                    <h2 className='feed'>
                        <p className='feed_head'>Question:</p> {question}
                    </h2>
                    <h2 className='feed'>
                        Correct Answer: {correct_answer}
                    </h2>
                </div>
            </article>
        </div>
    )
}

export default QuestionFeedCard;