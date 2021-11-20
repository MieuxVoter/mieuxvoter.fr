import React from "react";
import SizeLgColorMain from "../SizeLgColorMain";

function Group40(props) {
  const { className, sizeLgColorMain3Props } = props;

  return (
    <div className={`group-40 ${className || ""}`}>
      <div className="bouton-20">
        <img className="icon-arrow-19" src="/img/icon---arrow-2@2x.svg" />
        <p className="text-16 valign-text-middle dmsans-medium-white-16px-2">
          Posez la question de votre vote ici
        </p>
      </div>
      <SizeLgColorMain
        cestQuoiLeJugeme={sizeLgColorMain3Props.cestQuoiLeJugeme}
        className={sizeLgColorMain3Props.className}
      />
    </div>
  );
}

export default Group40;
