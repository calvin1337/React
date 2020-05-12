import React, { Component } from 'react'
import styles from "./slider.module.css";
import Slider from "react-slick";
import AnimatedArrow from "../Homepage/AnimatedArrow/AnimatedArrow";


export class HomeSlider extends Component {
  constructor(props) {
    super(props);
    
    this.changeHandler = this.changeHandler.bind(this)
  }
  


  changeHandler(e) {
    this.slider.slickGoTo(e)
    }
    render() {

        var settings = {
            useCSS: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
          <div className={styles.darkOverlay}>
            <Slider className={styles.sliderContainer} ref={c => (this.slider = c)} {...settings}>
            
        <div className={[styles.slide, styles.one].join(" ")} key={0} >
          
        </div>
        <div  className={[styles.slide, styles.two].join(" ")} key={1} >
          
        </div>
        <div  className={[styles.slide, styles.three].join(" ")} key={2} >
         
        </div>
      </Slider>

      <div className={styles.titleContainer}>
      <h1 className={styles.welcomeText}>Welcome To Clockwise
      
      </h1>
      
      <ul>
      <AnimatedArrow text="Our Services"/>
      <AnimatedArrow text="View Our Projects"/>
      <AnimatedArrow text="Get In Touch"/>
      </ul>

      
      
      
      </div>
      
      <div  className={styles.controlsContainer}>
      <div  onClick={() => this.changeHandler(0)} className={styles.control}></div>
      <div  onClick={() => this.changeHandler(1)} className={styles.control}></div>
      <div  onClick={() => this.changeHandler(2)} className={styles.control}></div>
    </div>
    
    </div>

    
        )
    }
}

export default HomeSlider
