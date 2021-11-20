import React from "react";

function SizeLgColorWhite(props) {
  const { cestQuoiLeJugeme } = props;

  return (
    <div className="bouton-22 border-2px-white">
      <div className="cest-quoi-le-jugeme-12 valign-text-middle dmsans-bold-white-16px">{cestQuoiLeJugeme}</div>
      <img className="icon-arrow-21" src="/img/icon---arrow-2@2x.svg" />
    </div>
  );
}

export default SizeLgColorWhite;
