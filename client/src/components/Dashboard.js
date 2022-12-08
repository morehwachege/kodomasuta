import React from 'react'

function Dashboard() {
    return (
        <div>
            <div className="container-fluid top-dash-container">
                <div className="container user-info d-flex justify-content-between align-items-center flex-wrap">
                    <div className="hero-left-dash">
                        <h3 className='dash-welcome'>Welcome, <span className='dash-user'>User</span></h3>
                        <p className='pt-3 text-light'>Test Yourself</p>
                    </div>
                    <div className='dash-stats'>
                        <p> 🥷 Level 6</p>
                    </div>
                </div>

                <div className='container random-assessments d-flex justify-content-center align-items-center gap-5 flex-wrap flex-row'>
                    
                    <div className='single-dash-assessment d-flex justify-content-between flex-column align-items-start p-3'>
                        <h4 className='pt-4'>Prepare by topics</h4>
                        <h1>Ruby On Rails</h1>
                        <div className='d-flex justify-content-between align-items-center dash-assessment-button w-100'>
                            <button className='p-3'>Continue preparation</button>
                            <div className="details">
                                <h5>87 questions</h5>
                                <p>3h 30mins</p>
                            </div>
                        </div>
                    </div>
                    <div className='single-dash-assessment d-flex justify-content-between flex-column align-items-start p-3'>
                        <h4 className='pt-4'>Prepare by topics</h4>
                        <h1>Ruby On Rails</h1>
                        <div className='d-flex justify-content-between align-items-center dash-assessment-button w-100'>
                            <button className='p-3'>Continue preparation</button>
                            <div className="details">
                                <h5>87 questions</h5>
                                <p>3h 30mins</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container dash-more d-flex justify-content-end align-items-center mt-3">
                    <p className='text-center m-0'>more </p>
                    <i className='bx bx-chevron-right bx-md text-center'></i>
                </div>

            </div>
        </div>
    )
}

export default Dashboard