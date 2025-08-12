"use client";

import { useTheme } from "@/components/theme-provider";

import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function ClientRoute1Page() {
  const theme = useTheme();
  //   const settings = {
  //     dots: true,
  //   };
  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>Client Route1 page</h1>
      {/* <div className="image-slider-container">
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
      </div> */}
    </>
  );
}
