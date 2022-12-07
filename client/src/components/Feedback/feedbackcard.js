import React from 'react'

const FeedBackCard = ({ feedback: { title, content } }) => {
    return (
        <div className='feedback_container'>
            <div className="feedback_options">
                <article class="feedback_option">
                    <img className="feedback_icon" src={"https://i.pinimg.com/564x/fa/d8/3b/fad83b229d4c0666e3f7d45035af5404.jpg"} alt="" />
                    <div>
                        <h2 className='feed'>
                            {title}
                        </h2>
                        <h2 className='feed'>
                            {content}
                        </h2>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default FeedBackCard;
