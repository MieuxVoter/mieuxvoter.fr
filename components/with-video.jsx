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
// i search on youtube "scene" and these are what showed up.
const videos = [
  {
    "id": "aOFlwlCX3oA",
    "source": "youtube",
    "placeholder": "/img/bd-jugement-majoritaire.png",
  },
  //  {
  //    "id": "YC1xDJsi_Hk",
  //    "source": "youtube",
  //    "placeholder": "/img/background-youtube.png",
  //  },
  //  {
  //    "id": "ZoGH7d51bvc",
  //    "source": "youtube",
  //    "placeholder": "/img/background-youtube.png",
  //  },
];

class WithVideo extends React.Component {
  render() {
    return (
      <Carousel arrows={true} swipeable={true} draggable={true} responsive={responsive}>
        {videos.map(({id, source, placeholder}, index) => {
          return <Video id={id} key={index} placeholder={placeholder} source={source} />;
        })}
      </Carousel>
    );
  }
}

export default WithVideo;
