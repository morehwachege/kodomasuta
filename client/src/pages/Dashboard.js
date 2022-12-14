import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import DashBoardTestCardTop from './DashBoardTestCardTop'
import DashboardTestCompleted from './DashboardTestCompleted';
import NavBar from '../components/NavBar';
import { Link, useNavigate } from 'react-router-dom';


function Dashboard({ assessment, onLogin, user, onLogout, studentAssessments}) {
    const [studentData, setStudentData] = useState(user);
    const navigate = useNavigate();


    useEffect(() => {
        // check current user session cookie
        fetch("/me").then(res => {
            if (res.ok) {
                res.json().then(user => onLogin(user))
            }
        })
    }, [])

    // useEffect(() => {
    //     // double user fetch request due to inefficient auth system
    //     // access current student user information
    //     if( user !== null){
    //         fetch("/students/get-student",{
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({"email": user.email})
    //         }
    //         )
    //         .then(res => {
    //             if(res.ok){
    //                 res.json().then(data => setStudentData(data))
    //             }
    //         })
    //     }
    // }, [onLogin]);

    if (!user) return navigate("/login");

    return (
        <>
            <NavBar onLogout={onLogout} user={user} />
            <div className="container-fluid top-dash-container p-0 bg-light">
                <div className="container-fluid user-info d-flex justify-content-between align-items-center flex-wrap px-5">
                    <div className="hero-left-dash">
                        <h3 className='dash-welcome'>Welcome, <span className='dash-user'>{user ? user.first_name : ""}</span></h3>
                        <p className='pt-3 text-light'>Test Yourself</p>
                    </div>
                    <div className='dash-stats'>
                        <p> ???? Level 1</p>
                    </div>
                </div>

                <div className='container-fluid random-assessments d-flex justify-content-center align-items-center gap-5 flex-wrap flex-row'>

                    {
                        assessment.slice(0, 2).map(item => {
                            return (
                                <div key={item.id}>
                                    <DashBoardTestCardTop singleAssessment={item} />
                                </div>
                            )
                        })
                    }


                </div>

                <Link to="/assessments">
                    <div className="container dash-more d-flex justify-content-end align-items-center mt-3">
                        <p className='text-center m-0'>more </p>
                        <i className='bx bx-chevron-right bx-md text-center'></i>
                    </div>
                </Link>
            </div>
            <section className='container dash-completed mb-3'>
                <h3 className='text-center py-5'>
                    Assessments Completed
                </h3>
                <div className='container d-flex justify-content-center align-items-center flex-wrap gap-3 pb-5'>
                    {
                        studentAssessments.filter(item => item.student_name === `${user.firstname} ${user.lastname}`).map(singleStudentAssessments => {
                            // assessment not taken yet
                            
                            if (singleStudentAssessments.grade_status !== "assessment not taken yet") {
                                return (
                                    <div key={singleStudentAssessments.id}>
                                        <DashboardTestCompleted singleStudentAssessments={singleStudentAssessments} />
                                    </div>
                                )
                            }
                            else {
                                return <p>No assignment taken yet</p>
                            }
                        })
                    }

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Dashboard
