import React from 'react'
import landingImage from "../assets/hero-light.png"
import "../styles/Landing.css"

const Landing = () => {
    return (
        <div className='landing'>
            <div className='landing-left-text'>
                <div className='whats-new'>
                    <p>v0.12 is finally here, learn what's new!</p>
                </div>

                <div className='text'>
                    <h1>Secure Open-Source Backend Server for Web, Mobile & Flutter Developers</h1>
                    <p>Appwrite is a self-hosted solution that provides developers with a set of easy-to-use and integrate REST APIs to manage their core backend needs.</p>
                </div>

                <div className='buttons'>
                    <div className='get-started'>Get Started</div>
                    <div className='github'>Github</div>
                </div>
            </div>

            <div className='landing-image'>
                <span className="abcd">
                <img src={landingImage} />

                </span>
            </div>
        </div>
    )
}

export default Landing
