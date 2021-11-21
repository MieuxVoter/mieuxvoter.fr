import React from "react";
import SizebigColorbleu from "../SizebigColorbleu";
import SizeLgColorPrimary from "../SizeLgColorPrimary";

function MobFooter(props) {
  const { className } = props;

  return (
    <div className={`footer ${className || ""}`}>
      <SizebigColorbleu className="logo-2" />
      <div className="group-43">
        <div className="text-2 valign-text-middle dmsans-bold-blue-20px">
          Tenez-vous au courant des derniers actus de Mieux Voter
        </div>
        <div className="overlap-group-7">
          <div className="votre-email valign-text-middle dmsans-medium-blue-16px">
            Votre email
          </div>
        </div>
        <SizeLgColorPrimary />
      </div>
      <img className="line-1-3" src="/img/line-1-6@2x.svg" />
      <div className="menu dmsans-bold-tolopea-16px">
        <div className="surname valign-text-middle">
          Le jugement majoritaire
        </div>
        <div className="qui-sommes-nous-1 valign-text-middle">
          Qui sommes-nous ?
        </div>
        <div className="faq valign-text-middle">F.A.Q</div>
        <div className="presse valign-text-middle">Presse</div>
        <div className="nous-contactez valign-text-middle">Nous contacter</div>
      </div>
      <img className="social" src="/img/social@2x.svg" />
      <img className="line-2" src="/img/line-1-6@2x.svg" />
      <div className="langue-en valign-text-middle dmsans-medium-white-14px">
        <span>
          <span className="span-4 dmsans-medium-blue-bell-14px">Langue</span>
          <span className="span-4 dmsans-medium-tolopea-14px">
            &nbsp;&nbsp;
          </span>
          <span className="span-4 dmsans-bold-tolopea-14px">En</span>
        </span>
      </div>
      <div className="mentions-lgales valign-text-middle dmsans-medium-tolopea-14px">
        Mentions légales
      </div>
      <div className="copyright valign-text-middle dmsans-medium-tolopea-14px">
        2021 © Mieux Voter
      </div>
    </div>
  );
}

export default MobFooter;
