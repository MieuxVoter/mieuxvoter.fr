import React from "react";
import SizebigColorbleu from "../SizebigColorbleu";

function TOP(props) {
  const { className } = props;

  return (
    <div className={`top ${className || ""}`}>
      <div className="flex-row">
        <SizebigColorbleu />
        <img className="icon" src="/img/icon@2x.svg" />
      </div>
      <img className="line-1" src="/img/line-1-7@2x.svg" />
    </div>
  );
}

export default TOP;
