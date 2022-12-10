import React from 'react'
import { Link } from 'react-router-dom'

function DashBoardTestCardTop({ singleAssessment }) {
    return (
        <div className='single-dash-assessment d-flex justify-content-between flex-column align-items-start p-3'>
            <h4 className='pt-4'>Prepare by topics</h4>
            <h1>{singleAssessment.category.name}</h1>
            <div className='d-flex justify-content-between align-items-center dash-assessment-button w-100 flex-wrap'>
                <Link to={`/assessments/test/${singleAssessment.id}`}>
                    <button className='p-3'>Continue preparation</button>
                </Link>
                <div className="details">
                    <h5>{singleAssessment.questions.length} questions</h5>
                    <p>...</p>
                </div>
            </div>
        </div>
    )
}

export default DashBoardTestCardTop