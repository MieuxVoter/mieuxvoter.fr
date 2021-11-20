import React from "react";

function Video(props) {
  const { className } = props;

  return (
    <div className={`video ${className || ""}`}>
      <div className="overlap-group-18">
        <img className="icon-play-1" src="/img/icon---play@2x.svg" />
      </div>
      <img className="line-3-1" src="/img/line-3@1x.svg" />
    </div>
  );
}

export default Video;
