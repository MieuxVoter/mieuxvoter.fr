import React from "react";
import Link from "next/link";
import SizebigColorbleu from "../SizebigColorbleu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

function TOP2(props) {
  const {
    lang,
    newsletter,
    nousSoutenir,
    surname2,
    quiSommesNous,
    presse,
    nousContactez,
  } = props;

  return (
    <div className="top-3">
      <Link href="/">
        <SizebigColorbleu className="logo-2" />
      </Link>
      <div className="flex-col-4">
        <div className="frame-44 dmsans-medium-blue-14px">
          <div className="top-lang valign-text-middle">{lang}</div>
          <div className="top-newsletter valign-text-middle">{newsletter}</div>
          <Link href="https://www.paypal.com/donate?token=CV1OPJsV_eo2YNVK14Mg3_-Ft76Pcsct-fYxv7WsozyvS50O5Ye5BDerAn3rLYekYuqSAsmPxrAqfcJ-">
            <div className="nous-soutenir valign-text-middle">
              {nousSoutenir}
            </div>
          </Link>
          <Link href="https://www.facebook.com/mieuxvoter.fr">
            <FontAwesomeIcon
              icon={faFacebook}
              className="submenu valign-text-middle"
            />
          </Link>
          <Link href="https://twitter.com/Mieux_voter/">
            <FontAwesomeIcon
              icon={faTwitter}
              className="submenu valign-text-middle"
            />
          </Link>
        </div>
        <img className="line-1-6" src="/img/line-1-1@1x.svg" />
        <div className="menu-3 dmsans-medium-tolopea-16px">
          <Link href="/jugement-majoritaire">
            <div className="surname-6 valign-text-middle dmsans-medium-tolopea-16px">
              {surname2}
            </div>
          </Link>
          <Link href="/qui-sommes-nous">
            <div className="qui-sommes-nous-4 valign-text-middle dmsans-medium-tolopea-16px">
              {quiSommesNous}
            </div>
          </Link>
          <Link href="/actualites">
            <div className="presse-3 valign-text-middle">{presse}</div>
          </Link>
          <Link href="/nous-contacter">
            <div className="nous-contactez-4 valign-text-middle">
              {nousContactez}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TOP2;
