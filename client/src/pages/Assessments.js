import React from 'react'
import AssessmentCard from '../components/assessmentcard'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'

function Assessments() {
  return (
    <>
        <Navbar />
        <AssessmentCard />
        <AssessmentCard />
        <AssessmentCard />
        <AssessmentCard />

        <Footer />
    </>
  )
}

export default Assessments