import React from "react";
import Link from "next/link";
import SizebigColorbleu2 from "../SizebigColorbleu2";

function TOP3(props) {
  const { className } = props;

  return (
    <div className={`top-4 ${className || ""}`}>
      <SizebigColorbleu2 />
      <div className="flex-col-11">
        <div className="frame-44-1 dmsans-medium-blue-14px">
          <div className="surname-18 valign-text-middle">Lang : En</div>
          <div className="text-39 valign-text-middle">
            S’inscrire à la newsletter
          </div>
          <div className="nous-soutenir-1 valign-text-middle">
            Nous soutenir
          </div>
          <img className="frame-47-1" src="/img/frame-47@2x.svg" />
        </div>
        <img className="line-1-13" src="/img/line-1-1@1x.svg" />
        <div className="menu-10 dmsans-medium-tolopea-16px">
          <Link href="/20-jugement-majoritaire">
            <div className="surname-19 valign-text-middle dmsans-medium-tolopea-16px">
              Le jugement majoritaire
            </div>
          </Link>
          <Link href="/30-qui-sommes-nous-2">
            <div className="qui-sommes-nous-11 valign-text-middle dmsans-medium-tolopea-16px">
              Qui sommes-nous ?
            </div>
          </Link>
          <div className="presse-10 valign-text-middle">Presse</div>
          <div className="nous-contactez-11 valign-text-middle">
            Nous contactez
          </div>
        </div>
      </div>
    </div>
  );
}

export default TOP3;
