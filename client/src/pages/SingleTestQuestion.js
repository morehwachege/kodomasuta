import React from 'react'

function SingleTestQuestion({ question }) {
    // console.log(question)
    const choices = [question.choice1, question.choice2, question.choice3, question.correct_answer]
    const shuffled = choices
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    console.log(shuffled)
    return (
        <div className='container'>
            <div className='container test-question bg-dark d-flex align-items-center rounded justify-content-start pt-3'>
                <p className='text-white fs-6'>
                    <span className='text-warning'>Question (1)</span>
                    {question.question}
                </p>
            </div>
            <div className='container test-choices m-4 d-flex justify-content-center flex-column align-items-center'>
               
                {
                    shuffled.map(choice => {
                        return (
                            <div className='test-single-choice mt-4 rounded d-flex align-items-center px-3'>
                                <p className='m-0 text-light'>{choice}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SingleTestQuestion