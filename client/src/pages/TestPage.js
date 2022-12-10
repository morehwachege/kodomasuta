import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import SingleTestQuestion from './SingleTestQuestion'

function TestPage({ assessment }) {
    const { id } = useParams();
    const [count, setCount] = useState(0)
    const test = assessment.map(item => item).filter(item => item.id === Number(id))
    const questions = test[0] ? test[0].questions : "";

    function handleNext(e){
        setCount(count => count + 1);
    }
    useEffect(() => {
        console.log(count)
    }, [count])
    return (
        <>
            <Navbar />
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
                {questions[count] ?  <SingleTestQuestion question={questions[count]}/> : <p className='my-5'>no questions available for this assessment</p>}

                {/* end insert single question here */}

                <div className="container d-flex justify-content-between align-items-center">
                    <button className="btn btn-warning cool-btn">Previous</button>
                    <button className="btn btn-warning cool-btn" onClick={handleNext}>Next</button>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default TestPage