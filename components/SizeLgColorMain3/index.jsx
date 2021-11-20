import React from "react";

function SizeLgColorMain3(props) {
  const { className } = props;

  return (
    <div className={`bouton-18 border-2px-primary ${className || ""}`}>
      <div className="cest-quoi-le-jugeme-10 valign-text-middle dmsans-bold-blue-16px">On en parle ici</div>
      <img className="icon-arrow-17" src="/img/icon---arrow@2x.svg" />
    </div>
  );
}

export default SizeLgColorMain3;
