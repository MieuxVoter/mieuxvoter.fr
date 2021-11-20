import React from "react";
import TOP3 from "../TOP3";
import Content from "../Content";
import DON from "../DON";
import FOOTER3 from "../FOOTER3";

function X30QuiSommesNous4(props) {
  const { contentProps, dONProps, fOOTER3Props } = props;

  return (
    <div>
      <div>
        <Content
          team1Props={contentProps.team1Props}
          team12Props={contentProps.team12Props}
          team13Props={contentProps.team13Props}
          team14Props={contentProps.team14Props}
          team15Props={contentProps.team15Props}
        />
        <DON sizeLgColorMainProps={dONProps.sizeLgColorMainProps} />
        <FOOTER3
          className={fOOTER3Props.className}
          sizebigColorbleuProps={fOOTER3Props.sizebigColorbleuProps}
          sizebigColorbleuProps2={fOOTER3Props.sizebigColorbleuProps2}
        />
      </div>
    </div>
  );
}

export default X30QuiSommesNous4;
