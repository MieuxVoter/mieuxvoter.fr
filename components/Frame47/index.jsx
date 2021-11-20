import React from "react";

function Frame47(props) {
  const { image11, libration, surname, parNicolasMassol, text69, className } = props;

  return (
    <div className={`frame-2-1 ${className || ""}`}>
      <img className="image-11-1" src={image11} />
      <div className="libration valign-text-middle dmsans-bold-black-13px">{libration}</div>
      <div className="surname-37 dmsans-bold-black-18px">{surname}</div>
      <div className="par-nicolas-massol valign-text-middle dmsans-bold-purple-mountains-majesty-13px">
        {parNicolasMassol}
      </div>
      <p className="text-69 valign-text-middle dmsans-medium-purple-mountains-majesty-13px">{text69}</p>
    </div>
  );
}

export default Frame47;
