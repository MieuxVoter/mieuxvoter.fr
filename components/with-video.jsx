
import React from "react";
import Carousel from "react-multi-carousel";

import Video from "./video";

const responsive = {
  doesntmatter: {
    breakpoint: {max: 3000, min: 0},
    items: 1
  }
};

const WithVideo = ({videos}) => (
  <Carousel arrows={true} swipeable={true} draggable={true} responsive={responsive}>
    {videos.map(({id, source, placeholder}, index) => {
      return <Video id={id} key={index} placeholder={placeholder} source={source} />;
    })}
  </Carousel>
)

export default WithVideo;
