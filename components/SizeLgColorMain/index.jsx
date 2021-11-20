import React from "react";

function SizeLgColorMain(props) {
  const { cestQuoiLeJugeme, className } = props;

  return (
    <div className={`bouton border-2px-white ${className || ""}`}>
      <div className="cest-quoi-le-jugeme valign-text-middle dmsans-bold-white-16px">{cestQuoiLeJugeme}</div>
      <img className="icon-arrow" src="/img/icon---arrow-2@2x.svg" />
    </div>
  );
}

export default SizeLgColorMain;
