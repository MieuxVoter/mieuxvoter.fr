import React from "react";
import Quest02 from "../Quest02";
import DON from "../DON";

function X30QuiSommesNous2(props) {
  const {
    text90,
    text80,
    text81,
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="faq screen">
        <div className="text-90 valign-text-middle dmserifdisplay-normal-tolopea-72px">
          {text90}
        </div>
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
      </div>
    </div>
  );
}

export default X30QuiSommesNous2;
