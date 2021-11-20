import React from "react";

function Team1(props) {
  const { photo, name, text51, className } = props;

  return (
    <div className={`team-1 ${className || ""}`}>
      <div className="photo" style={{ backgroundImage: `url(${photo})` }}>
        <div className="overlap-group-15">
          <img className="rectangle-74" src="/img/rectangle-74@1x.svg" />
          <img className="rectangle-8-1" src="/img/rectangle-83@1x.svg" />
        </div>
      </div>
      <div className="name-3 valign-text-middle dmsans-medium-tolopea-32px">{name}</div>
      <div className="text-37 valign-text-middle dmsans-normal-tolopea-18px">{text51}</div>
    </div>
  );
}

export default Team1;
