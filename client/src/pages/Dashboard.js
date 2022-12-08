import React from 'react'
import Footer from '../components/Footer'
import DashBoardTestCardTop from './DashBoardTestCardTop'
import DashboardTestCompleted from './DashboardTestCompleted'

function Dashboard() {
    return (
        <>


            <div className="container-fluid top-dash-container p-0 bg-light">
                <div className="container-fluid user-info d-flex justify-content-between align-items-center flex-wrap px-5">
                    <div className="hero-left-dash">
                        <h3 className='dash-welcome'>Welcome, <span className='dash-user'>User</span></h3>
                        <p className='pt-3 text-light'>Test Yourself</p>
                    </div>
                    <div className='dash-stats'>
                        <p> 🥷 Level 1</p>
                    </div>
                </div>

                <div className='container-fluid random-assessments d-flex justify-content-center align-items-center gap-5 flex-wrap flex-row'>
                    <DashBoardTestCardTop />
                    <DashBoardTestCardTop />
                </div>

                <div className="container dash-more d-flex justify-content-end align-items-center mt-3">
                    <p className='text-center m-0'>more </p>
                    <i className='bx bx-chevron-right bx-md text-center'></i>
                </div>
            </div>
            <section className='container dash-completed mb-3'>
                <h3 className='text-center py-5'>
                    Assessments Complete
                </h3>
                <div className='container d-flex justify-content-center align-items-center flex-wrap gap-3 pb-5'>
                    <DashboardTestCompleted />
                    <DashboardTestCompleted />
                    <DashboardTestCompleted />
                    <DashboardTestCompleted />

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Dashboard