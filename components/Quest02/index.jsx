import React from "react";

function Quest02(props) {
  const { text82, className } = props;

  return (
    <div className={`quest-1 ${className || ""}`}>
      <div className="text-82 dmsans-bold-black-18px">{text82}</div>
      <img className="icon-chevron-1" src="/img/icon---chevron-1@2x.svg" />
    </div>
  );
}

export default Quest02;
