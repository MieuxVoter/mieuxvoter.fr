import React from "react";
import SizebigColorbleu from "../SizebigColorbleu";
import SizeLgColorPrimary from "../SizeLgColorPrimary";

function FOOTER3(props) {
  const { className, sizebigColorbleuProps, sizebigColorbleuProps2 } = props;

  return (
    <div className={`footer-3 ${className || ""}`}>
      <div className="flex-row-4">
        <div className="flex-col-5">
          <SizebigColorbleu className={sizebigColorbleuProps.className} />
          <div className="text-10 dmsans-medium-tolopea-18px">
            Rendez les éléctions
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
              <div className="votre-email-4 valign-text-middle dmsans-medium-blue-16px">Votre email</div>
            </div>
            <SizeLgColorPrimary className={sizebigColorbleuProps2.className} />
          </div>
        </div>
      </div>
      <img className="line-1-7" src="/img/line-1@1x.svg" />
      <div className="flex-row-6">
        <div className="menu-4 dmsans-bold-tolopea-16px">
          <div className="surname-7 valign-text-middle">Le jugement majoritaire</div>
          <div className="qui-sommes-nous-5 valign-text-middle">Qui sommes-nous ?</div>
          <div className="faq-3 valign-text-middle">F.A.Q</div>
          <div className="presse-4 valign-text-middle">Presse</div>
          <div className="nous-contactez-5 valign-text-middle">Nous contactez</div>
        </div>
        <img className="social-3" src="/img/social@2x.svg" />
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
            <span className="span-8 dmsans-medium-tolopea-14px">&nbsp;&nbsp;</span>
            <span className="span-8 dmsans-bold-tolopea-14px">En</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FOOTER3;
