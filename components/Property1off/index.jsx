import React from "react";

function Property1off(props) {
  const { children, className } = props;

  return (
    <div className={`frame-38-1 ${className || ""}`}>
      <div className="trs-bien valign-text-middle dmsans-bold-white-10px">{children}</div>
    </div>
  );
}

export default Property1off;
