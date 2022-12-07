import React from 'react'
import NavBar from '../components/NavBar';
import sittingMan from '../assets/images/sittingMan.png';
import sittingWoman from '../assets/images/Standing.png';
import codeCard from '../assets/images/codecard.png';

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
                <section className="container-fluid bg-dark landing-coder-card">

                </section>

            </div>
        </div>
    )
}

export default LandingPage