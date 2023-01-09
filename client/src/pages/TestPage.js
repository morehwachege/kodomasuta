import React, { useEffect, useState } from 'react'
import { Navigate, useParams} from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import SingleTestQuestion from './SingleTestQuestion'

function TestPage({ assessment, onLogout, user, studentAssessments}) {
    const { id } = useParams();
    const [count, setCount] = useState(0);
    const [testGrade, setTestGrade] = useState(0);
    const test = assessment.map(item => item).filter(item => item.id === Number(id))
    const questions = test[0] ? test[0].questions : "";

    function handleNext(e){
        setCount(count => count + 1);
    }
    
    const displayQuestion = () => {
        if(questions[count]){
            return <SingleTestQuestion question={questions[count]} setTestGrade={setTestGrade} handleNext={handleNext} testGrade={testGrade}/>;
        }
        else if( count >= questions.length && questions.length > 0){
            // setCount(count => count = 0);
            console.log(testGrade)
            const username =`${user.first_name} ${user.last_name}`;
            // console.log(test)
            console.log(username, "username")
            const moreh = studentAssessments.filter(item => item.student_name === username && item.student_assessment.title === test[0].title)
            console.log(moreh)

            // post grade to database if grade is > 0
            return (<Navigate replace to='/dashboard' />)
        }
        else{
            return <p className='my-5'>no questions available for this assessment</p>;
        }
    };
    return (
        <>
            <Navbar onLogout={onLogout} user={user} />
            <div className='container fw-600 py-4 d-flex justify-content-between align-items-center title-top'>
                <p className='fw-normal fs-5 left'>{test[0] ? test[0].title : ""}</p>
                <p className='fw-normal fs-5 right'>Time fot test: 5mins</p>
            </div>

            <div className='container d-flex justify-content-center align-items-center flex-column mb-5'>
                <div className='container black-container-test p-3 bg-dark text-white mb-5 rounded-top'>
                    <h3>{test[0] ? test[0].category.name : ""}</h3>
                    <p className='text-white'>{test[0] ? test[0].description : ""}</p>
                </div>
                {/* insert single question here */}
                {
                displayQuestion()
                }
                {/* end insert single question here */}

                <div className="container d-flex justify-content-end align-items-center">
                    {/* <button className="btn btn-warning cool-btn">Previous</button> */}
                    <button className="btn btn-warning cool-btn" onClick={handleNext}>Next</button>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default TestPage