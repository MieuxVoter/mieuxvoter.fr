import React from "react";

function Property1on(props) {
  const { trsBien, className } = props;

  return (
    <div className={`frame-40 ${className || ""}`}>
      <img className="icon-check" src="/img/icon---check@2x.svg" />
      <div className="trs-bien-1 valign-text-middle dmsans-bold-white-10px">{trsBien}</div>
    </div>
  );
}

export default Property1on;
