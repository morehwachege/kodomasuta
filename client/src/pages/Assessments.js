import React from 'react'
import AssessmentCard from '../components/assessmentcard'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'

function Assessments({ assessment, onLogout, user }) {
    return (
        <>
            <Navbar onLogout={onLogout} user={user} />
            <h4 className='px-4 py-4 fw-bold'>Try something out</h4>
            {
                assessment.map(singleAssessment => {
                    return (
                        <div key={singleAssessment.id}>
                            <AssessmentCard singleAssessment={singleAssessment} />
                        </div>
                    )
                })
            }


            <Footer />
        </>
    )
}

export default Assessments