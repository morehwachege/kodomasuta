import React from 'react'

function DashBoardTestCardTop() {
    return (
        <div className='single-dash-assessment d-flex justify-content-between flex-column align-items-start p-3'>
            <h4 className='pt-4'>Prepare by topics</h4>
            <h1>Ruby On Rails</h1>
            <div className='d-flex justify-content-between align-items-center dash-assessment-button w-100 flex-wrap'>
                <button className='p-3'>Continue preparation</button>
                <div className="details">
                    <h5>87 questions</h5>
                    <p>3h 30mins</p>
                </div>
            </div>
        </div>
    )
}

export default DashBoardTestCardTop