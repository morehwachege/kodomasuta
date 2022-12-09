import React from 'react'
import AssessmentCard from '../components/assessmentcard'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'

function Assessments({ assessment }) {
    return (
        <>
            <Navbar />
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