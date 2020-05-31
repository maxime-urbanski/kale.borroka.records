import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './menu.css'
import bfm from './img/bfm.jpg';
import brixtoncats from './img/brixtoncats.jpg';
import grabuge from './img/grabuge.jpg';
import keltoi from './img/keltoi.jpg';
import kronstadt from './img/kronstadt.jpg';
import mdb from './img/mdb.jpg';
import sharpcut from './img/sharpcut.jpg';
import traitre from './img/traitre.jpg';
import urbanvietcong from './img/urbanvietcong.jpg';
import va from './img/va.jpg';

const cover = [
    {name: 'Brigada Flores Magon', image: bfm, id: 350705 },
    {name: 'Brixton Cats', image:brixtoncats, id: 6763714},
    {name: 'Grabuge', image:grabuge,id: 12202674 },
    {name: 'Keltoi', image:keltoi, id: 9477937},
    {name: 'Kronstadt', image:kronstadt, id: 12539863},
    {name: 'Moscow Death Brigade', image:mdb, id: 11415341},
    {name: 'SharpxCut', image:sharpcut, id: 13312057},
    {name: 'Traitre', image:traitre},
    {name: 'Urban Vietcong', image:urbanvietcong, id: 13008350},
    {name: 'VA', image:va, id: 10364210}
];


export default class SlickCover extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      width: 50
    };
    return (
      <div>
        <Slider {...settings}>
            {cover.map((item) => {
                return (
                <img src={item.image} alt={item.name} className="coverPicture"/>
            )})}
        </Slider>
      </div>
    );
  }
}