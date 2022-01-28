import React from "react";
import Carousel from "react-multi-carousel";
import Video from "./video";


const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 2,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
    paritialVisibilityGutter: 30
  }
};
//

const WithVideo = ({videos}) => (
  <Carousel arrows={true} swipeable={true} draggable={true} responsive={responsive}>
    {videos.map(({id, source, placeholder}, index) => {
      return <Video id={id} key={index} placeholder={placeholder} source={source} />;
    })}
  </Carousel>
)

export default WithVideo;
