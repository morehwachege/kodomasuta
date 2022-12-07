import React from 'react'
import NavBar from '../components/NavBar';
import sittingMan from '../assets/images/sittingMan.png';
import sittingWoman from '../assets/images/Standing.png';
import codeCard from '../assets/images/codecard.png';
import Footer from '../components/Footer';

function LandingPage() {
    return (
        <div>
            <div className="container-fluid main-container">
                {/* <NavBar /> */}
                <section className="container-fluid hero-section">
                    <div className="blue-ball">
                        <div className="landing-navigation d-flex justify-content-between align-items-center flex-wrap">
                            <div className="landing-logo">
                                kodomasuta
                            </div>
                            <div></div>
                            <div className="login-signup d-flex flex-wrap justify-content-between align-items-center">
                                <button className="signup m-2 px-4 py-2">signup</button>
                                <button className="login px-4 py-2">login</button>
                            </div>

                        </div>
                        <section className="container banner d-flex justify-content-center align-items-center flex-column">
                            <h3 className="text-center mt-4">
                                Test yourself and learn faster than ever
                            </h3>
                            <div className="container hero-container">
                                <div className="hero-images d-flex justify-content-around align-items-center flex-wrap pt-5">
                                    <img className="d-md-none d-sm-none d-lg-block" src={sittingMan} alt='sitting man' />
                                    <img src={codeCard} alt='code card' />
                                    <img className="d-md-none d-sm-none d-lg-block" src={sittingWoman} alt='sitting woman' />

                                </div>

                            </div>
                        </section>

                    </div>
                </section>

                {/* second section */}
                <section className="container bg-light landing-coder-card d-flex justify-content-center align-items-center">
                    <div className="container inner-coder-card d-flex justify-content-around align-items-center flex-wrap">
                        <div className="landing-left text-center">
                            Pick An Assessment <br /> And <br /> Prepare for the interview
                        </div>
                        <div className="landing-right">
                            <section className="assessment-containers d-flex justify-content-between align-items-center flex-column d-sm-none d-md-none d-lg-block">
                                <div className="container assessment-container1 d-flex flex-column justify-content-between">
                                    <h4 className='pt-4'>Prepare by topics</h4>
                                    <h1>Ruby On Rails</h1>
                                    <div className='d-flex justify-content-between align-items-center assessment-button'>
                                        <button className='p-3'>Continue preparation</button>
                                        <div className="details">
                                            <h5>87 questions</h5>
                                            <p>3h 30mins</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container assessment-container"></div>
                                <div className="container assessment-container2 d-flex flex-column justify-content-between">
                                    <h4 className='pt-4'>Prepare by topics</h4>
                                    <h1>Intermediate Python</h1>
                                    <div className='d-flex justify-content-between align-items-center assessment-button'>
                                        <button className='p-3'>Continue preparation</button>
                                        <div className="details">
                                            <h5>36 questions</h5>
                                            <p>1h 42mins</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                {/* end second section */}

                {/* section subscribe */}
                <section className=" container subscribe d-flex justify-content-center align-items-center flex-nowrap flex-row flex-column">
                    <h2 className='text-center text-dark my-5'>Subscribe to our newsletter</h2>
                    <form className='d-flex justify-content-center align-items-center flex-nowrap flex-row'>
                            <input type="email" className="form-control input-subscribe" id="subscribe" placeholder="name@example.com" />
                            <button className="btn-subscribe px-5 py-3" type='submit'>Submit</button>
                    </form>
                </section>
                {/* end section subscribe*/}

                {/* footer here */}
                <Footer />
                {/* end footer here */}
            </div>
        </div>
    )
}

export default LandingPage