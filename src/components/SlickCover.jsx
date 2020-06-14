import React from "react";
import "./menu.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import lp from "./Lp";
import epArticle from "./EP";
import Slider from "react-slick";

class SlickCover extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 9,
            slidesToScroll: 2,
            autoplay: true,
            speed: 10000,
            autoplaySpeed: 10000,
            cssEase: "linear",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            
        };
    return (
        <div className="container-fluid">
            <Slider {...settings}>
                {lp.map((item) => {
                    return (
                        
                        <img
                            src={item.image}
                            alt={item.name}
                            key={item.id}
                            className="coverPicture mr-2 ml-2"
                        />
                    );
                     })}
                    {epArticle.map((item) => {
                        return (
                            <img
                                src={item.image}
                                alt={item.name}
                                key={item.id}
                                className="coverPicture"
                            />
                        );
                })}                
            </Slider>
        </div>
    );
         }
}

export default SlickCover;
