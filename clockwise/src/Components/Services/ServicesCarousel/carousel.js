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
            <Card serviceTitle="Design & Engineering" />
          </div>
          <div>
            <Card serviceTitle="Fabrication"/>
          </div>
          <div>
            <Card serviceTitle="Aluminum Welding" />
          </div>
          <div>
          <Card serviceTitle="Stainless Steels & Exotic Material "/>
          </div>
          <div>
          <Card serviceTitle="Machining"/>
          </div>
          <div>
          <Card serviceTitle="Water-jet cutting & profiling" />
          </div>
          <div>
          <Card serviceTitle="Hydraulics & Piping" />
          </div>
          <div>
          <Card serviceTitle="Rental Services" />
          </div>
          <div>
          <Card serviceTitle="Assembly & Testing" />
          </div>
        </Slider>
      </div>
    );
        
    }
}

export default carousel
