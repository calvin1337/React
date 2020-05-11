import React, { Component } from 'react'
import Slider from "react-slick";
import "./carousel.css";
import Card from "../ServicesCard/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDoubleRight, faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";



function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div 
      className={className}
      onClick={onClick}
  >
      <FontAwesomeIcon
          icon={faAngleDoubleRight}
          color="#222"
          size="2x"
      />
  </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className,  onClick } = props;
    return (
      <div 
      className={className}
      onClick={onClick}
  >
      <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          color="#222"
          size="2x"
      />
  </div>
    );
  }


export class carousel extends Component {
    


    render() {
        const settings =  {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
        }
        ]
    }
        return (
           <div>
        
        <Slider {...settings}>
          <div>
            <Card />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
        
    }
}

export default carousel
