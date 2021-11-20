import React from "react";
import Frame682 from "../Frame682";

function Frame72(props) {
  const { text30, phone, className } = props;

  return (
    <div className={`frame-72 ${className || ""}`}>
      <div className="frame-68-10">
        <div className="text-51 dmsans-bold-black-18px">{text30}</div>
        <div className="phone-2 dmsans-normal-purple-mountains-majesty-16px">{phone}</div>
      </div>
      <Frame682 />
    </div>
  );
}

export default Frame72;
