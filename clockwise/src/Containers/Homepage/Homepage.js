import React from 'react'
import HomeSlider from "../../Components/Slider/HomeSlider";
import AboutIntro from '../../Components/Homepage/AboutIntro';
import Services from "../../Components/Services/services";
import Contact from "../../Components/Homepage/Contact/Contact"
import Clients from '../../Components/Clients/Clients';

function Homepage() {
    return (
            <div>
           
            <HomeSlider />
            <AboutIntro />
            <Services />
            <Contact />
            <Clients/>
        </div>
    )
}

export default Homepage
