import React from "react";
import YouTube from "react-youtube";

function Video({ className, videoId }) {
  const opts = {
    height: "400",
    width: "700",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className={`video ${className || ""}`}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default Video;
// <div className="overlap-group-18">
//   <img className="icon-play-1" src="/img/icon---play@2x.svg" />
// </div>
// <img className="line-3-1" src="/img/line-3@1x.svg" />
