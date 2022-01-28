
import React from "react";
import Carousel from "react-multi-carousel";

import Video from "./Video";

const responsive = {
  doesntmatter: {
    breakpoint: { max: 3000, min: 0 },
    items: 1
  }
};

const videos = ["YC1xDJsi_Hk", "ZoGH7d51bvc"];

class WithVideo extends React.Component {
  render() {
    return (
      <Carousel swipeable={true} draggable={true} responsive={responsive}>
        {videos.map(id => {
          return <Video id={id} key={id} />;
        })}
      </Carousel>
    );
  }
}

export default WithVideo;
