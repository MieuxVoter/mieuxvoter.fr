import React from "react";
import TOP3 from "../TOP3";
import Quest02 from "../Quest02";
import DON from "../DON";
import FOOTER3 from "../FOOTER3";

function X30QuiSommesNous2(props) {
  const {
    text90,
    text80,
    text81,
    tOP3Props,
    quest02Props,
    quest022Props,
    quest023Props,
    quest024Props,
    quest025Props,
    quest026Props,
    quest027Props,
    quest028Props,
    quest029Props,
    quest0210Props,
    quest0211Props,
    dONProps,
    fOOTER3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x30-qui-sommes-nous screen">
        <div className="overlap-group2-5">
          <TOP3 className={tOP3Props.className} />
        </div>
        <div className="text-90 valign-text-middle dmserifdisplay-normal-tolopea-72px">{text90}</div>
        <div className="frame-69-2">
          <div className="quest-01">
            <div className="frame-69-3">
              <div className="text-80 dmsans-bold-black-18px">{text80}</div>
              <img className="icon-chevron" src="/img/icon---chevron@2x.svg" />
            </div>
            <p className="text-81 dmsans-normal-tolopea-15px">{text81}</p>
          </div>
          <Quest02 text82={quest02Props.text82} />
          <Quest02 text82={quest022Props.text82} />
          <Quest02 text82={quest023Props.text82} />
          <Quest02 text82={quest024Props.text82} />
          <Quest02 text82={quest025Props.text82} />
          <Quest02 text82={quest026Props.text82} />
          <Quest02 text82={quest027Props.text82} />
          <Quest02 text82={quest028Props.text82} />
          <Quest02 text82={quest029Props.text82} />
          <Quest02 text82={quest0210Props.text82} />
          <Quest02 text82={quest0211Props.text82} />
        </div>
        <DON className={dONProps.className} sizeLgColorMainProps={dONProps.sizeLgColorMainProps} />
        <FOOTER3
          className={fOOTER3Props.className}
          sizebigColorbleuProps={fOOTER3Props.sizebigColorbleuProps}
          sizebigColorbleuProps2={fOOTER3Props.sizebigColorbleuProps2}
        />
      </div>
    </div>
  );
}

export default X30QuiSommesNous2;
