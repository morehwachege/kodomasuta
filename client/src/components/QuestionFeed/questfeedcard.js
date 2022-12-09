import React from 'react'

const QuestFeedCard = ({ feedback: { question_id, title, content } }) => {

    return (
        <div className='quest_feed'>
            <article className="_option">
                <div>
                    <h2 className='feed'>
                        <p className='feed_head'>Question Number: {question_id}</p>
                    </h2>
                    <h2 className='feed'>
                        <p className='feed_head'>Title:</p> {title}
                    </h2>
                    <h2 className='feed'>
                        <p className='feed_head'>Description:</p> {content}
                    </h2>
                </div>
            </article>
        </div>
    )
}

export default QuestFeedCard;