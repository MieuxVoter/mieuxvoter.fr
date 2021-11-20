import React from "react";

function SizeLgColorPrimary(props) {
  const { className } = props;

  return (
    <div className={`bouton-10 border-2px-primary ${className || ""}`}>
      <div className="cest-quoi-le-jugeme-1 valign-text-middle dmsans-bold-blue-16px">S’inscrire</div>
      <img className="icon-arrow-2" src="/img/icon---arrow@2x.svg" />
    </div>
  );
}

export default SizeLgColorPrimary;
