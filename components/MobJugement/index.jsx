import React from "react";
import DarkTrue from "../DarkTrue";
import SizeLgColorMain from "../SizeLgColorMain";

function X20MobJugement(props) {
  const {
    spanText,
    spanText2,
    spanText3,
    surname,
    image9,
    image92,
    image93,
    surname2,
    surname3,
    surname4,
    image10,
    text19,
    text20,
    cestQuoiLeJugeme,
    sizeLgColorMainProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x20-mob-jugement screen">
        <div className="surname-13 valign-text-middle dmsans-medium-tolopea-52px">
          <span>
            <span className="span0 dmsans-medium-tolopea-52px">{spanText}</span>
            <span className="span-15 dmserifdisplay-normal-tolopea-52px">
              {spanText2}
            </span>
            <span className="span-15 dmserifdisplay-normal-tolopea-52px">
              {spanText3}
            </span>
          </span>
        </div>
        <div className="surname-14 dmsans-medium-tolopea-18px">{surname}</div>
        <div className="frame-46">
          <div className="overlap-group3-2 dmserifdisplay-normal-white-20px">
            <img className="subtract-18" src="/img/subtract-102@1x.svg" />
            <img className="subtract-19" src="/img/subtract-103@1x.svg" />
            <div className="overlap-group-13">
              <img className="image-9" src={image9} />
              <img className="line-3" src="/img/line-3-2@2x.svg" />
              <img className="icon-play" src="/img/icon---play-5@2x.svg" />
            </div>
            <div className="overlap-group1-3">
              <img className="image-9" src={image92} />
              <img className="line-3" src="/img/line-3-2@2x.svg" />
              <img className="icon-play" src="/img/icon---play-5@2x.svg" />
            </div>
            <div className="overlap-group2-1">
              <img className="image-9" src={image93} />
              <img className="line-3" src="/img/line-3-2@2x.svg" />
              <img className="icon-play" src="/img/icon---play-5@2x.svg" />
            </div>
            <div className="surname-15 valign-text-middle">{surname2}</div>
            <div className="surname-16 valign-text-middle">{surname3}</div>
            <div className="surname-17 valign-text-middle">{surname4}</div>
          </div>
        </div>
        <img className="image-10" src={image10} />
        <div className="web-app-1">
          <div className="text-27 valign-text-middle dmserifdisplay-normal-white-44px">
            {text19}
          </div>
          <div className="text-28 dmsans-medium-white-17px-2">{text20}</div>
          <div className="overlap-group1-4">
            <div className="overlap-group-14">
              <img className="subtract-20" src="/img/subtract-89@2x.svg" />
              <img className="subtract-21" src="/img/subtract-67@2x.svg" />
              <img className="subtract-22" src="/img/subtract-91@2x.svg" />
              <img className="subtract-23" src="/img/subtract-69@2x.svg" />
              <img className="subtract-26" src="/img/subtract-70@2x.svg" />
              <img className="subtract-27" src="/img/subtract-71@2x.svg" />
              <img className="subtract-28" src="/img/subtract-95@2x.svg" />
              <img className="subtract-29" src="/img/subtract-96@2x.svg" />
              <img className="subtract-30" src="/img/subtract-74@2x.svg" />
            </div>
            <div className="group-40-2">
              <div className="champ">
                <p className="cest-quoi-le-jugeme-14 valign-text-middle dmsans-medium-white-16px-2">
                  {cestQuoiLeJugeme}
                </p>
              </div>
              <SizeLgColorMain
                cestQuoiLeJugeme={sizeLgColorMainProps.cestQuoiLeJugeme}
                className={sizeLgColorMainProps.className}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X20MobJugement;
