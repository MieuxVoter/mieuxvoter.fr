import React from "react";

function Button2({ children, className }) {
  return (
    <div className={`bouton-25 ${className || ""}`}>
      <p className="cest-quoi-le-jugeme-16 valign-text-middle dmsans-bold-white-16px">
        {children}
      </p>
      <img className="icon-arrow-27" src="/img/icon---arrow-2@2x.svg" />
    </div>
  );
}

export default Button2;
