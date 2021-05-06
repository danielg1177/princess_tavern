import React from 'react'
import AboutUsFirst from '../Components/About-us-first/about-us-first';
import Navbar from '../Components/Navbar/navbar';

const AboutUs = () => {
    return (
        <div>
            <Navbar active="about-us"/>
            <div className="about-us">
                <AboutUsFirst />
            </div>
        </div>
    )
}

export default AboutUs
