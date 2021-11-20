import React from "react";
import SizeLgColorMain from "../SizeLgColorMain";

function DON(props) {
  const { className, sizeLgColorMainProps } = props;

  return (
    <div className={`don-2 ${className || ""}`}>
      <div className="overlap-group1-5">
        <div className="text-32 valign-text-middle dmserifdisplay-normal-white-40px">Adhérez à Mieux Voter</div>
        <SizeLgColorMain
          cestQuoiLeJugeme={sizeLgColorMainProps.cestQuoiLeJugeme}
          className={sizeLgColorMainProps.className}
        />
      </div>
    </div>
  );
}

export default DON;
