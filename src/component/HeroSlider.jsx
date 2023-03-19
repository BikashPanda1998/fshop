import React from "react";
import {Sliderdata} from "../asset/data/slider";
import slide1 from "../asset/image/ui-ux.png";
import Carousel from 'react-bootstrap/Carousel';
function HeroSlider(){
    return(
        <Carousel variant="dark">
        {Sliderdata.map(item=>(
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={item.imgUrl}
            alt="First slide"
            style={{height:"50vh"}}
          />
          <Carousel.Caption>
            <h3>{item.titel}</h3>
            <p style={{color:"#990000",fontWeight:"100"}}>{item.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
    );
}
export default HeroSlider;