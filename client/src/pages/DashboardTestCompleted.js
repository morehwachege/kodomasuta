import React from 'react'

function DashboardTestCompleted({ singleStudentAssessments }) {
    // console.log("awesome", singleStudentAssessments)
    const grade = singleStudentAssessments.grade_status;
    const numberOfQuestions = singleStudentAssessments.student_assessment.number_of_questions;
    const examGrade = Math.floor((grade / numberOfQuestions) * 100)
    // console.log(grade, 'boom', numberOfQuestions)
    return (
        <div className='complete-task d-flex justify-content-around flex-column align-items-start px-5 py-3'>
            <h4 className=''>Assessment</h4>
            <h1>{singleStudentAssessments.student_assessment.category}</h1>
            <div className='d-flex justify-content-between align-items-center dash-assessment-button w-100 flex-wrap gap-5'>
                <button className='p-3'>{examGrade > 51 ? "passed" : "failed" }</button>
                <div className="details">
                    <h6>Grade <span>{
                        examGrade
                    }
                    </span>%</h6>
                </div>
            </div>
        </div>
    )
}

export default DashboardTestCompleted