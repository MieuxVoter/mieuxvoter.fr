import React from "react";
import Link from "next/link";
import DarkTrue from "../DarkTrue";
import TOP4 from "../TOP4";

function MobMenu(props) {
  const {
    surname,
    quiSommesNous,
    fAQ,
    presse,
    nousContactez,
    surname2,
    en,
    mentionsLgales,
    copyright,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x00-mob-menu screen">
        <div className="overlap-group1-9">
          <DarkTrue />
          <div className="content-4 dmsans-medium-white-18px-2">
            <TOP4 />
            <div className="menu-15 dmsans-bold-white-24px">
              <Link href="/20-mob-jugement">
                <div className="surname-35 valign-text-middle dmsans-bold-white-24px">
                  {surname}
                </div>
              </Link>
              <Link href="/30-mob-qui-sommes-nous">
                <div className="qui-sommes-nous-18 valign-text-middle dmsans-bold-white-24px">
                  {quiSommesNous}
                </div>
              </Link>
              <div className="menu-item valign-text-middle">{fAQ}</div>
              <div className="menu-item valign-text-middle">{presse}</div>
              <div className="menu-item valign-text-middle">
                {nousContactez}
              </div>
              <img className="social-9" src="/img/social-9@2x.svg" />
            </div>
            <div className="flex-row-35 dmsans-medium-white-18px-2">
              <div className="surname-36 valign-text-middle">{surname2}</div>
              <div className="en valign-text-middle">{en}</div>
            </div>
            <div className="content-item valign-text-middle">
              {mentionsLgales}
            </div>
            <div className="content-item valign-text-middle">{copyright}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobMenu;
