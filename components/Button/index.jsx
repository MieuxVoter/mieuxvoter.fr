import React, { useEffect } from "react";

function Button({ children, className }) {
  return (
    <div className={`x481220 component  ${className || ""}`}>
      <div className="text-13-tf27yZ valign-text-middle">{children}</div>
      <img className="icon-arrow-tf27yZ" src="/img/icon---arrow-1@2x.svg" />
    </div>
  );
}

export default Button;
