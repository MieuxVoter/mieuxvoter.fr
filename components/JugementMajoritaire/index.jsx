import React from "react";
import Video from "../Video";
import Frame68 from "../Frame68";
import Frame682 from "../Frame682";
import Frame69 from "../Frame69";
import Frame72 from "../Frame72";
import Group40 from "../Group40";

function X20JugementMajoritaire(props) {
  const {
    surname,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    surname2,
    image12,
    image13,
    surname3,
    enVido,
    surname4,
    text44,
    text45,
    text57,
    spanText8,
    spanText9,
    text46,
    text49,
    spanText10,
    spanText11,
    text62,
    spanText12,
    spanText13,
    contributions,
    text56,
    text55,
    phone,
    text52,
    phone2,
    surname5,
    text54,
    ouvrageEnAnglais,
    image10,
    surname6,
    voirLouvrage,
    text42,
    spanText14,
    spanText15,
    spanText16,
    videoProps,
    frame68Props,
    frame682Props,
    frame683Props,
    frame72Props,
    frame722Props,
    group40Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x20-jugement-majoritaire screen">
        <div className="overlap-group4-3">
          <div className="header">
            <img className="subtract-31" src="/img/subtract-2@1x.svg" />
            <div className="overlap-group3-3">
              <div className="surname-28 valign-text-middle dmserifdisplay-normal-tolopea-72px">
                {surname}
              </div>
              <div className="surname-29 dmsans-medium-white-18px">
                <span className="dmsans-medium-tolopea-18px">{spanText}</span>
                <span className="dmsans-medium-red-orange-18px">
                  {spanText2}
                </span>
                <span className="dmsans-medium-tolopea-18px">{spanText3}</span>
                <span className="dmsans-medium-red-orange-18px">
                  {spanText4}
                </span>
                <span className="dmsans-medium-tolopea-18px">{spanText5}</span>
                <span className="dmsans-medium-red-orange-18px">
                  {spanText6}
                </span>
                <span className="dmsans-medium-tolopea-18px">{spanText7}</span>
              </div>
              <div className="surname-30 dmsans-medium-tolopea-18px">
                {surname2}
              </div>
              <img className="subtract-32" src="/img/subtract-29@1x.svg" />
              <img className="image-12" src={image12} />
              <img className="image-13" src={image13} />
            </div>
          </div>
        </div>
        <div className="en-video">
          <div className="overlap-group2-3">
            <img className="subtract-33" src="/img/subtract-27@1x.svg" />
            <img className="subtract-34" src="/img/subtract-28@1x.svg" />
            <Video videoId="YC1xDJsi_Hk" />
            <Video className={videoProps.className} videoId="ZoGH7d51bvc" />
            <div className="surname-31 valign-text-middle dmsans-bold-white-18px">
              {surname3}
            </div>
            <div className="en-vido valign-text-middle">{enVido}</div>
            <div className="surname-32 valign-text-middle dmsans-bold-white-18px">
              {surname4}
            </div>
          </div>
        </div>
        <div className="fondement-scientifiques">
          <div className="text-44 valign-text-middle dmserifdisplay-normal-tolopea-56px">
            {text44}
          </div>
          <div className="flex-row-30">
            <div className="text-4-1 valign-text-middle dmsans-bold-tolopea-18px">
              {text45}
            </div>
            <div className="frame-68-4">
              <Frame68
                text26={frame68Props.text26}
                spanText={frame68Props.spanText}
                spanText2={frame68Props.spanText2}
              />
              <Frame682 />
            </div>
            <div className="frame-68-5">
              <div className="frame-68-6">
                <div className="text-57 dmsans-bold-black-18px">{text57}</div>
                <p className="text dmsans-medium-white-16px">
                  <span className="span-19 dmsans-medium-black-16px">
                    {spanText8}
                  </span>
                  <span className="span-19 dmsans-normal-purple-mountains-majesty-16px">
                    {spanText9}
                  </span>
                </p>
              </div>
              <Frame682 />
            </div>
            <div className="frame">
              <Frame68
                text26={frame682Props.text26}
                spanText={frame682Props.spanText}
                spanText2={frame682Props.spanText2}
              />
              <Frame69 />
            </div>
          </div>
          <img className="line-8" src="/img/line-8@1x.svg" />
          <div className="flex-row-31">
            <div className="text-4-1 valign-text-middle dmsans-bold-tolopea-18px">
              {text46}
            </div>
            <div className="frame-69">
              <div className="frame-68-2">
                <div className="text-49 dmsans-bold-black-18px">{text49}</div>
                <p className="text dmsans-medium-white-16px">
                  <span className="span-19 dmsans-medium-black-16px">
                    {spanText10}
                  </span>
                  <span className="span-19 dmsans-normal-purple-mountains-majesty-16px">
                    {spanText11}
                  </span>
                </p>
              </div>
              <Frame682 />
            </div>
            <div className="frame-70">
              <Frame68
                text26={frame683Props.text26}
                spanText={frame683Props.spanText}
                spanText2={frame683Props.spanText2}
              />
              <Frame682 />
            </div>
            <div className="frame">
              <div className="frame-68-3">
                <div className="text-62 dmsans-bold-black-18px">{text62}</div>
                <p className="text dmsans-medium-black-16px">
                  <span className="span-19 dmsans-medium-black-16px">
                    {spanText12}
                  </span>
                  <span className="span1-2">{spanText13}</span>
                </p>
              </div>
              <Frame69 />
            </div>
          </div>
          <img className="line-6" src="/img/line-8@1x.svg" />
          <div className="flex-row-32">
            <div className="flex-col-20">
              <div className="contributions valign-text-middle dmsans-bold-tolopea-18px">
                {contributions}
              </div>
              <p className="text-56 dmsans-medium-purple-mountains-majesty-13px">
                {text56}
              </p>
            </div>
            <Frame72 text30={frame72Props.text30} phone={frame72Props.phone} />
            <Frame72
              text30={frame722Props.text30}
              phone={frame722Props.phone}
              className={frame722Props.className}
            />
            <div className="frame-7">
              <div className="frame-68-3">
                <div className="text-55 dmsans-bold-black-18px">{text55}</div>
                <div className="phone dmsans-normal-purple-mountains-majesty-16px">
                  {phone}
                </div>
              </div>
              <Frame682 />
            </div>
          </div>
          <div className="flex-row-33">
            <div className="frame-75">
              <div className="frame-68-2">
                <div className="text-52 dmsans-bold-black-18px">{text52}</div>
                <div className="phone-1 dmsans-normal-purple-mountains-majesty-16px">
                  {phone2}
                </div>
              </div>
              <Frame682 />
            </div>
            <div className="frame-7">
              <div className="frame-68-3">
                <div className="surname-33 dmsans-bold-black-18px">
                  {surname5}
                </div>
                <div className="text-54 dmsans-normal-purple-mountains-majesty-16px">
                  {text54}
                </div>
              </div>
              <Frame682 />
            </div>
          </div>
          <img className="line-6" src="/img/line-8@1x.svg" />
          <div className="flex-row-34">
            <div className="ouvrage-en-anglais valign-text-middle dmsans-bold-tolopea-18px">
              {ouvrageEnAnglais}
            </div>
            <div className="group-68">
              <img className="image-10-1" src={image10} />
              <div className="frame-68-7">
                <div className="surname-34 dmsans-medium-tolopea-17px">
                  {surname6}
                </div>
                <div className="frame-68-8">
                  <div className="voir-louvrage dmsans-bold-blue-15px">
                    {voirLouvrage}
                  </div>
                  <img
                    className="icon-arrow-24"
                    src="/img/icon---arrow-11@2x.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="web-app-2">
          <div className="group-45">
            <img
              className="illus-creation-1"
              src="/img/illus---creation-1@2x.svg"
            />
            <div className="text-42 valign-text-middle dmserifdisplay-normal-white-56px">
              {text42}
            </div>
            <div className="text-43 dmsans-medium-white-17px-3">
              <span className="dmsans-medium-white-17px">{spanText14}</span>
              <span className="span1-3">{spanText15}</span>
              <span className="dmsans-medium-white-17px">{spanText16}</span>
            </div>
            <Group40
              className={group40Props.className}
              sizeLgColorMain3Props={group40Props.sizeLgColorMain3Props}
            />
          </div>
          <div className="overlap-group-17">
            <img className="subtract-35" src="/img/subtract-18@2x.svg" />
            <img className="subtract-36" src="/img/subtract-19@2x.svg" />
            <img className="subtract-37" src="/img/subtract-20@2x.svg" />
            <img className="subtract-38" src="/img/subtract-21@2x.svg" />
            <img className="subtract-39" src="/img/subtract-22@2x.svg" />
            <img className="subtract-40" src="/img/subtract-23@2x.svg" />
            <img className="subtract-41" src="/img/subtract-24@2x.svg" />
            <img className="subtract-42" src="/img/subtract-25@2x.svg" />
            <img className="subtract-43" src="/img/subtract-26@2x.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default X20JugementMajoritaire;
