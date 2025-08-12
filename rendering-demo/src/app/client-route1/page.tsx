"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientRoute1Page() {
  const settings = {
    dots: true,
  };
  return (
    <>
      <h1>Client Route1</h1>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="http://picsum.photos/g/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/g/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/g/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/g/400/200" />
          </div>
        </Slider>
      </div>
    </>
  );
}
