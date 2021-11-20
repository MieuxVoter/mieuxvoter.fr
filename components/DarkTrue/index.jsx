import React from "react";

function DarkTrue(props) {
  const { className } = props;

  return (
    <div className={`dark-true ${className || ""}`}>
      <img className="time" src="/img/time@2x.svg" />
      <div className="stack">
        <img className="cellular" src="/img/cellular-4@2x.svg" />
        <img className="wifi" src="/img/wifi@2x.svg" />
        <div className="overlap-group-2">
          <div className="capacity"></div>
        </div>
      </div>
    </div>
  );
}

export default DarkTrue;
