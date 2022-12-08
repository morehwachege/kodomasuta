import React from 'react'

function DashboardTestCompleted() {
    return (
        <div className='complete-task d-flex justify-content-around flex-column align-items-start px-5'>
            <h4 className='pt-4'>Assessment</h4>
            <h1>Java</h1>
            <div className='d-flex justify-content-between align-items-center dash-assessment-button w-100 flex-wrap gap-5'>
                <button className='p-3'>passed</button>
                <div className="details">
                    <h6>Grade <span>89</span>%</h6>
                </div>
            </div>
        </div>
    )
}

export default DashboardTestCompleted