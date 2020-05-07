import React from 'react'
import HomeSlider from "../../Components/Slider/HomeSlider";

function Homepage() {
    return (
        <div style={height100}>
            <h1 className="header">Hello</h1>
            <HomeSlider />
        </div>
    )
}
const height100 = {
    height: "100vh"
}
export default Homepage
