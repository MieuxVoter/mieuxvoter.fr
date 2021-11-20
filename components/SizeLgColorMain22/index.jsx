import React from "react";

function SizeLgColorMain22(props) {
  const { cestQuoiLeJugeme, className } = props;

  return (
    <div className={`bouton-25 ${className || ""}`}>
      <p className="cest-quoi-le-jugeme-16 valign-text-middle dmsans-bold-white-16px">{cestQuoiLeJugeme}</p>
      <img className="icon-arrow-27" src="/img/icon---arrow-2@2x.svg" />
    </div>
  );
}

export default SizeLgColorMain22;
