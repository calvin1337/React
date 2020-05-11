import React from 'react'
import HomeSlider from "../../Components/Slider/HomeSlider";
import AboutIntro from '../../Components/Homepage/AboutIntro';
import Services from "../../Components/Services/services";
import Contact from "../../Components/Homepage/Contact/Contact"

function Homepage() {
    return (
            <div>
           
            <HomeSlider />
            <AboutIntro />
            <Services />
            <Contact />
        </div>
    )
}

export default Homepage
