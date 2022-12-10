import React from 'react'

function SingleTestQuestion() {
    return (
        <div className='container'>
            <div className='container test-question bg-dark d-flex align-items-center rounded justify-content-start pt-3'>
                <p className='text-white fs-6'>
                    <span className='text-warning'>Question (1)</span>
                    Lara had been back and forth along the river path many times in her short life?
                </p>
            </div>
            <div className='container test-choices m-4 d-flex justify-content-center flex-column align-items-center'>
                <div className='test-single-choice mt-4 rounded d-flex align-items-center px-3'>
                    <p className='m-0'>Some choice</p>
                </div>
                <div className='test-single-choice mt-4 rounded d-flex align-items-center px-3'>
                    <p className='m-0'>Some choice</p>
                </div>
                <div className='test-single-choice mt-4 rounded d-flex align-items-center px-3'>
                    <p className='m-0'>Some choice</p>
                </div>
                <div className='test-single-choice mt-4 mb-4 rounded d-flex align-items-center px-3'>
                    <p className='m-0'>Some choice</p>
                </div>
            </div>
        </div>
    )
}

export default SingleTestQuestion