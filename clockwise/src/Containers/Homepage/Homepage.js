import React from 'react'
import HomeSlider from "../../Components/Slider/HomeSlider";
import AboutIntro from '../../Components/Homepage/AboutIntro';
import Services from "../../Components/Services/services";

function Homepage() {
    return (
            <div>
           
            <HomeSlider />
            <AboutIntro />
            <Services />
        </div>
    )
}

export default Homepage
