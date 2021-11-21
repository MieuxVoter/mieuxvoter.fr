import React from "react";
import Link from "next/link";
import SizebigColorbleu from "../SizebigColorbleu";
import SizeLgColorPrimary from "../SizeLgColorPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

function DeskFooter(props) {
  const { className, sizebigColorbleuProps, sizebigColorbleuProps2 } = props;

  return (
    <div className={`footer-3 ${className || ""}`}>
      <div className="flex-row-4">
        <div className="flex-col-5">
          <SizebigColorbleu className="logo-9" />
          <div className="text-10 dmsans-medium-tolopea-18px">
            Rendez les élections
            <br />
            aux électeurs
          </div>
        </div>
        <div className="newsletter">
          <div className="text-9 valign-text-middle dmsans-bold-blue-24px">
            Tenez-vous au courant des derniers actus de Mieux Voter
          </div>
          <div className="flex-row-5">
            <div className="mail">
              <div className="votre-email-4 valign-text-middle dmsans-medium-blue-16px">
                Votre email
              </div>
            </div>
            <SizeLgColorPrimary className="logo-9" />
          </div>
        </div>
      </div>
      <img className="line-1-7" src="/img/line-1@1x.svg" />
      <div className="flex-row-6">
        <div className="menu-4 dmsans-bold-tolopea-16px">
          <Link href="/qui-sommes-nous">
            <div className="surname-7 valign-text-middle link">
              Le jugement majoritaire
            </div>
          </Link>
          <Link href="/qui-sommes-nous">
            <div className="qui-sommes-nous-5 valign-text-middle link">
              Qui sommes-nous ?
            </div>
          </Link>
          <Link href="/faq">
            <div className="faq-3 link valign-text-middle">F.A.Q</div>
          </Link>
          <Link href="/actualites">
            <div className="presse-4 link valign-text-middle">Presse</div>
          </Link>
          <Link href="/nous-contacter">
            <div className="nous-contactez-5 link valign-text-middle">
              Nous contacter
            </div>
          </Link>
        </div>
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
      <img className="line-2-3" src="/img/line-1@1x.svg" />
      <div className="flex-row-7">
        <div className="copyright-3 valign-text-middle dmsans-medium-purple-mountains-majesty-14px">
          2021 © Mieux Voter
        </div>
        <div className="mentions-lgales-3 valign-text-middle dmsans-medium-purple-mountains-majesty-14px">
          Mentions légales
        </div>
        <div className="langue-en-3 valign-text-middle dmsans-medium-white-14px">
          <span>
            <span className="span-8 dmsans-medium-blue-bell-14px">Langue</span>
            <span className="span-8 dmsans-medium-tolopea-14px">
              &nbsp;&nbsp;
            </span>
            <span className="span-8 dmsans-bold-tolopea-14px">Fr</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DeskFooter;
