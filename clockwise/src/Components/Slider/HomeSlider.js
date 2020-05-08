import React, { Component } from 'react'
import styles from "./slider.module.css";
import Slider from "react-slick";


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
            useCSS: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
          <div>
            <Slider  ref={c => (this.slider = c)} {...settings}>
        <div key={0} >
          <h3>1</h3>
        </div>
        <div key={1} >
          <h3>2</h3>
        </div>
        <div key={2} >
          <h3>3</h3>
        </div>
      </Slider>
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
