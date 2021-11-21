import React from "react";
import DarkTrue from "../DarkTrue";
import Group51 from "../Group51";
import Group42 from "../Group42";
import SizeLgColorMain from "../SizeLgColorMain";

function X30MobQuiSommesNous(props) {
  const {
    spanText,
    spanText2,
    spanText3,
    spanText4,
    text1,
    rectangle82,
    spanText5,
    spanText6,
    text5,
    rectangle83,
    spanText7,
    spanText8,
    text6,
    text3,
    group51Props,
    group512Props,
    group513Props,
    sizeLgColorMainProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x30-mob-qui-sommes-nous screen">
        <div className="qui-sommes-nous valign-text-middle dmsans-medium-tolopea-52px">
          <span>
            <span className="span dmsans-medium-tolopea-52px">{spanText}</span>
            <span className="span-1 dmserifdisplay-normal-tolopea-52px">
              {spanText2}
            </span>
            <span className="span-1 dmserifdisplay-normal-tolopea-52px">
              {spanText3}
            </span>
            <span className="span dmsans-medium-tolopea-52px">{spanText4}</span>
          </span>
        </div>
        <div className="text-1 dmsans-medium-tolopea-18px">{text1}</div>
        <div className="overlap-group7">
          <img className="union" src="/img/union-9@1x.svg" />
          <Group51
            rectangle81={group51Props.rectangle81}
            spanText={group51Props.spanText}
            spanText2={group51Props.spanText2}
            text4={group51Props.text4}
          />
          <div className="group-50">
            <div className="overlap-group3">
              <img className="rectangle-82" src={rectangle82} />
              <img className="line-4" src="/img/line-6@2x.svg" />
            </div>
            <div className="loc-blondiaux valign-text-middle dmsans-medium-tolopea-32px">
              <span>
                <span className="span-2 dmsans-medium-tolopea-32px">
                  {spanText5}
                </span>
                <span className="span-2 dmseriftext-normal-tolopea-32px">
                  {spanText6}
                </span>
              </span>
            </div>
            <div className="text-5 dmsans-normal-tolopea-18px">{text5}</div>
          </div>
          <div className="group-49">
            <div className="overlap-group4">
              <img className="rectangle-83" src={rectangle83} />
              <img className="line-5" src="/img/line-6@2x.svg" />
            </div>
            <div className="name dmsans-medium-tolopea-32px">
              <span className="span-2 dmsans-medium-tolopea-32px">
                {spanText7}
              </span>
              <span className="span-2 dmseriftext-normal-tolopea-32px">
                {spanText8}
              </span>
            </div>
            <div className="text-6 dmsans-normal-tolopea-18px">{text6}</div>
          </div>
          <Group51
            rectangle81={group512Props.rectangle81}
            spanText={group512Props.spanText}
            spanText2={group512Props.spanText2}
            text4={group512Props.text4}
            className={group512Props.className}
          />
          <Group51
            rectangle81={group513Props.rectangle81}
            spanText={group513Props.spanText}
            spanText2={group513Props.spanText2}
            text4={group513Props.text4}
            className={group513Props.className}
          />
        </div>
        <div className="don">
          <div className="overlap-group1">
            <div className="overlap-group">
              <img className="subtract" src="/img/subtract-85@1x.svg" />
              <img className="subtract-1" src="/img/subtract-86@1x.svg" />
            </div>
            <Group42 />
            <div className="text-3 valign-text-middle dmserifdisplay-normal-white-44px">
              {text3}
            </div>
            <SizeLgColorMain
              cestQuoiLeJugeme={sizeLgColorMainProps.cestQuoiLeJugeme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default X30MobQuiSommesNous;
