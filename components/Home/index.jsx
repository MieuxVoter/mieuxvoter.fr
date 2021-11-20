import React from "react";
import Link from "next/link";
import Button from "../Button";
import VoteDesk from "../VoteDesk";
import VoteDesk2 from "../VoteDesk2";
import Group40 from "../Group40";
import SizeLgColorWhite from "../SizeLgColorWhite";
import SizeLgColorPrimary2 from "../SizeLgColorPrimary2";
import Button2 from "../SizeLgColorMain22";

function X10Home(props) {
  const {
    quiSommesNous,
    cestQuoiLeJugeme,
    text11,
    spanText,
    spanText2,
    text20,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    surname,
    text14,
    text15,
    text17,
    spanText13,
    spanText14,
    spanText15,
    image8,
    text24,
    text25,
    nousContactez,
    spanText16,
    spanText17,
    spanText18,
    votrePrnom,
    votreNom,
    votreEmail,
    votreMessage,
    voteDeskProps,
    voteDesk2Props,
    group40Props,
    sizeLgColorMain22Props,
    onEnParleIci,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x10-home screen">
        <div className="overlap-group6">
          <div className="overlap-group1-1">
            <img
              className="rectangle-71-stroke"
              src="/img/rectangle-71--stroke-@1x.svg"
            />
            <h1 className="text-11 valign-text-middle dmserifdisplay-normal-tolopea-72px">
              {text11}
            </h1>
            <div className="text-12 dmsans-medium-white-18px">
              <span className="dmsans-medium-tolopea-18px">{spanText}</span>
              <span className="dmsans-bold-red-orange-18px">{spanText2}</span>
            </div>
            <Link href="/jugement-majoritaire">
              <Button>{cestQuoiLeJugeme}</Button>
            </Link>
            <img className="subtract-6" src="/img/subtract-2@1x.svg" />
          </div>
          <div className="le-jugement">
            <div className="text-20 valign-text-middle dmserifdisplay-normal-tolopea-56px">
              {text20}
            </div>
            <div className="surname-3">
              <span className="dmsans-bold-tolopea-17px">{spanText3}</span>
              <span className="dmsans-bold-red-orange-17px">{spanText4}</span>
              <span className="dmsans-bold-tolopea-17px">{spanText5}</span>
              <span className="dmsans-bold-red-orange-17px">{spanText6}</span>
              <span className="dmsans-bold-tolopea-17px">{spanText7}</span>
            </div>
            <p className="text-21 dmsans-medium-tolopea-16px">
              <span className="dmsans-medium-tolopea-16px">{spanText8}</span>
              <span className="dmsans-bold-tolopea-16px">{spanText9}</span>
              <span className="dmsans-medium-tolopea-16px">{spanText10}</span>
              <span className="dmsans-bold-tolopea-16px">{spanText11}</span>
              <span className="dmsans-medium-tolopea-16px">{spanText12}</span>
            </p>
            <div className="group-53">
              <VoteDesk
                nomProps={voteDeskProps.nomProps}
                property1offProps={voteDeskProps.property1offProps}
                property1off2Props={voteDeskProps.property1off2Props}
                property1off3Props={voteDeskProps.property1off3Props}
                property1off4Props={voteDeskProps.property1off4Props}
                property1onProps={voteDeskProps.property1onProps}
                property1off5Props={voteDeskProps.property1off5Props}
              />
              <VoteDesk2
                nomProps={voteDesk2Props.nomProps}
                property1offProps={voteDesk2Props.property1offProps}
                property1off2Props={voteDesk2Props.property1off2Props}
                property1off3Props={voteDesk2Props.property1off3Props}
                property1onProps={voteDesk2Props.property1onProps}
                property1off4Props={voteDesk2Props.property1off4Props}
                property1off5Props={voteDesk2Props.property1off5Props}
              />
            </div>
            <p className="surname-4 dmsans-medium-tolopea-16px">{surname}</p>
            <div className="overlap-group4-1">
              <Button>{onEnParleIci}</Button>
              <img className="cand-1" src="/img/cand-1@1x.svg" />
            </div>
          </div>
        </div>
        <div className="web-app">
          <div className="flex-col">
            <img
              className="illus-creation"
              src="/img/illus---creation@2x.svg"
            />
            <div className="content">
              <div className="text-14 valign-text-middle dmserifdisplay-normal-white-56px">
                {text14}
              </div>
              <div className="text-15 dmsans-medium-white-17px">{text15}</div>
              <Group40
                sizeLgColorMain3Props={group40Props.sizeLgColorMain3Props}
              />
            </div>
          </div>
          <div className="overlap-group-10">
            <img className="subtract-7" src="/img/subtract-3@2x.svg" />
            <img className="subtract-8" src="/img/subtract-4@2x.svg" />
            <img className="subtract-9" src="/img/subtract-5@2x.svg" />
            <img className="subtract-12" src="/img/subtract-6@2x.svg" />
            <img className="subtract-13" src="/img/subtract-7@2x.svg" />
            <img className="subtract-14" src="/img/subtract-8@2x.svg" />
            <img className="subtract-15" src="/img/subtract-9@2x.svg" />
            <img className="subtract-16" src="/img/subtract-10@2x.svg" />
            <img className="subtract-17" src="/img/subtract-11@2x.svg" />
          </div>
        </div>
        <div className="lassociation">
          <img className="union-2" src="/img/union-2@2x.svg" />
          <div className="flex-col-1">
            <div className="text-17 valign-text-middle dmserifdisplay-normal-tolopea-56px">
              {text17}
              <Link href="/qui-sommes-nous">
                <Button2>{quiSommesNous}</Button2>
              </Link>
            </div>
            <div className="text-18 dmsans-medium-white-18px">
              <span className="dmsans-medium-tolopea-18px">{spanText13}</span>
              <span className="dmsans-bold-red-orange-18px">{spanText14}</span>
              <span className="dmsans-medium-tolopea-18px">{spanText15}</span>
            </div>
          </div>
          <img className="image-8" src={image8} />
          <img className="union-3" src="/img/union-1@2x.svg" />
        </div>
        <div className="don-1">
          <div className="overlap-group5">
            <div className="flex-col-2">
              <div className="text-24 valign-text-middle dmserifdisplay-normal-white-40px">
                {text24}
              </div>
              <div className="text-25 dmsans-medium-white-18px-2">{text25}</div>
            </div>
            <Link href="/jugement-majoritaire">
              <Button className={sizeLgColorMain22Props.className}>
                {cestQuoiLeJugeme}
              </Button>
            </Link>
          </div>
        </div>
        <div className="nous-contacter">
          <div className="content-1">
            <div className="flex-col-3">
              <div className="nous-contactez-3 valign-text-middle dmserifdisplay-normal-tolopea-56px">
                {nousContactez}
              </div>
              <div className="text-19 dmsans-bold-tolopea-17px">
                <span className="dmsans-bold-tolopea-17px">{spanText16}</span>
                <span className="dmsans-medium-tolopea-17px">{spanText17}</span>
                <span className="span2 dmsans-medium-tolopea-16px">
                  {spanText18}
                </span>
              </div>
            </div>
            <div className="form">
              <div className="flex-row-3">
                <div className="overlap-group-11">
                  <div className="votre-prnom valign-text-middle dmsans-medium-tolopea-16px-2">
                    {votrePrnom}
                  </div>
                </div>
                <div className="overlap-group1-2">
                  <div className="votre-nom valign-text-middle dmsans-medium-tolopea-16px-2">
                    {votreNom}
                  </div>
                </div>
              </div>
              <div className="overlap-group2">
                <div className="votre-email-3 valign-text-middle dmsans-medium-tolopea-16px-2">
                  {votreEmail}
                </div>
              </div>
              <div className="overlap-group3-1">
                <div className="votre-message valign-text-middle dmsans-medium-tolopea-16px-2">
                  {votreMessage}
                </div>
              </div>
              <SizeLgColorPrimary2 />
            </div>
          </div>
          <img className="union-4" src="/img/union-3@2x.svg" />
        </div>
      </div>
    </div>
  );
}

export default X10Home;
