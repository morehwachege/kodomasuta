import React from 'react'

function SingleTestQuestion({ question}) {

    return (
        <div className='container'>
            <div className='container test-question bg-dark d-flex align-items-center rounded justify-content-start pt-3'>
                <p className='text-white fs-6'>
                    <span className='text-warning'>Question (1)</span>
                    {question.question}
                </p>
            </div>
            <div className='container test-choices m-4 d-flex justify-content-center flex-column align-items-center'>
                <div className='test-single-choice mt-4 rounded d-flex align-items-center px-3'>
                    <p className='m-0'>{question.choice1}</p>
                </div>
                <div className='test-single-choice mt-4 rounded d-flex align-items-center px-3'>
                    <p className='m-0'>{question.choice2}</p>
                </div>
                <div className='test-single-choice mt-4 rounded d-flex align-items-center px-3'>
                    <p className='m-0'>{question.choice3}</p>
                </div>
                <div className='test-single-choice mt-4 mb-4 rounded d-flex align-items-center px-3'>
                    <p className='m-0'>{question.correct_answer}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleTestQuestion