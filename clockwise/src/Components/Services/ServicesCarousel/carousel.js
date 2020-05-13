import React, { Component } from 'react'
import Slider from "react-slick";
import "./carousel.css";
import Card from "../ServicesCard/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Welding from "../../../images/ServicesImages/exoticwelding.jpg";
import aluminumwelding from "../../../images/ServicesImages/aluminumwelding.jpg";
import assembly from "../../../images/ServicesImages/assembly.jpg";
import fabrication from "../../../images/ServicesImages/fabrication.jpeg";
import design from "../../../images/ServicesImages/designandenginering.jpg";
import hydrolicpress from "../../../images/ServicesImages/hydrolicpress.jpg";
import waterjet from "../../../images/ServicesImages/waterjetcutting.jpeg";
import machining from "../../../images/ServicesImages/machining.jpg";
import rental from "../../../images/ServicesImages/designandenginering1.jpg"

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
            <Card image={design} serviceTitle="Design & Engineering" />
          </div>
          <div>
            <Card image={fabrication} serviceTitle="Fabrication"/>
          </div>
          <div>
            <Card image={aluminumwelding} serviceTitle="Aluminum Welding" />
          </div>
          <div>
          <Card image={Welding} serviceTitle="Stainless Steels & Exotic Material "/>
          </div>
          <div>
          <Card image={machining} serviceTitle="Machining"/>
          </div>
          <div>
          <Card image={waterjet} serviceTitle="Water-jet cutting & profiling" />
          </div>
          <div>
          <Card image={hydrolicpress} serviceTitle="Hydraulics & Piping" />
          </div>
          <div>
          <Card image={rental} serviceTitle="Rental Services" />
          </div>
          <div>
          <Card image={assembly} serviceTitle="Assembly & Testing" />
          </div>
        </Slider>
      </div>
    );
        
    }
}

export default carousel
