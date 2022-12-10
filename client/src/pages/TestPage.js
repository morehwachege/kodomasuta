import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import SingleTestQuestion from './SingleTestQuestion'

function TestPage() {
    return (
        <>
            <Navbar />
            <div className='container fw-600 py-4 d-flex justify-content-between align-items-center'>
                <p className='fw-normal fs-5'>Title of the assessment</p>
                <p className='fw-normal fs-5'>Time remaining: 30mins</p>
            </div>

            <div className='container d-flex justify-content-center align-items-center flex-column mb-5'>
                <div className='container black-container-test p-3 bg-dark text-white mb-5 rounded-top'>
                    <h3>Java & SpringBoot</h3>
                    <p className='text-white'>As they rounded a bend in the path that ran beside the river, Lara recognized the silhouette of a fig tree atop a nearby hill. The weather was hot and the days were long. The fig tree was in full leaf, but not yet bearing fruit.
                        Soon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised. They were drawing near to the place where there was an island in the river. The island was a good spot to make camp. They would sleep on the island tonight.
                        Lara had been back and forth along the river path many times in her short life. Her people had not created the path—it had always been there, like the river—but their deerskin-shod feet and the wooden wheels of their handcarts kept the path well worn. Lara’s people were salt traders, and their livelihood took them on a continual journey.</p>
                </div>
                {/* insert single question here */}
                <SingleTestQuestion />
                {/* end insert single question here */}

                <div className="container d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary cool-btn">Previous</button>
                    <button className="btn btn-primary cool-btn">Next</button>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default TestPage