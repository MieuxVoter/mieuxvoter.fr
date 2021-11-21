import React from "react";
import Quest02 from "../Quest02";
import DON from "../DON";

function X30QuiSommesNous3(props) {
  const {
    text100,
    text96,
    text97,
    tOP3Props,
    quest02Props,
    quest022Props,
    dONProps,
    fOOTER3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x30-qui-sommes-nous2 screen">
        <div className="text-100 valign-text-middle dmserifdisplay-normal-tolopea-72px">
          {text100}
        </div>
        <div className="frame-69-4">
          <Quest02
            text82={quest02Props.text82}
            className={quest02Props.className}
          />
          <div className="quest-02">
            <div className="question">
              <div className="text-96 dmsans-bold-black-18px">{text96}</div>
              <img
                className="icon-chevron-3"
                src="/img/icon---chevron-1@2x.svg"
              />
            </div>
            <div className="answer">
              <p className="text-97 dmsans-normal-tolopea-15px">{text97}</p>
              <div className="frame-47-6">
                <div className="rectangle-86"></div>
                <p className="text-98">
                  L’électeur est fortement contraint dans l’expression de ses
                  opinions. Bien que les électeurs aient une opinion, bonne ou
                  mauvaise, nuancée, sur toutes les candidatures, ils sont
                  cantonnés, souvent enfermés, dans le soutien à une seule, à
                  l&#39;exclusion de toutes les autres. <br />
                  <br />
                  Ayant voté pour un candidat, l’électeur ne révèle absolument
                  rien de ce qu’il pense des autres, et pas plus de ce qu’il
                  pense de celle ou celui pour qui il a voté ;<br />
                  Tout vote pour un candidat est assimilé à un vote d’adhésion,
                  alors que ce vote peut être un vote « contre » un autre
                  candidat, un vote par défaut, ou encore un vote utile : on
                  additionne des « voix » qui n’ont rien à voir les unes avec
                  les autres et on en sort un score numérique qui ne traduit
                  rien de la légitimité réelle du candidat.
                  <br />
                  <br />
                  L’électeur est souvent contraint à voter « utile », au mépris
                  de ses opinions : pour donner plus de poids à sa voix,
                  l’électeur est souvent contraint de ne pas choisir le candidat
                  qu’il préfère, mais celui ou celle qui a le plus de chances de
                  l’emporter. <br />
                  L’électeur qui n’apprécie aucune candidature ne peut pas
                  l’exprimer dans le cadre du scrutin, et se retrouve contraint
                  au vote blanc (non comptabilisé) ou à l’abstention.
                  <br />
                  <br />
                  Les modes de scrutin mesurent mal l’état de l’opinion et
                  peuvent aboutir, faute de désigner le vrai gagnant de la
                  majorité, à des accidents démocratiques : le vrai choix de la
                  majorité peut être vicié par la dispersion du nombre de voix
                  dès lors que le nombre de candidatures augmente, au travers de
                  votes &#34;stratégiques&#34; ou &#34;utile&#34;. Ce fait est
                  scientifiquement démontré : c’est le paradoxe d’Arrow.
                  <br />
                  <br />
                  Le scrutin uninominal majoritaire à deux tours, utilisé pour
                  les élections présidentielles et législatives, est biaisé en
                  faveur des candidats clivants. S’ils parviennent à rassembler
                  une base suffisante d’électeurs pour se qualifier au second
                  tour (aujourd’hui, ce seuil de qualification est tombé autour
                  de 20%), ils peuvent remporter l’élection avec des scores très
                  élevés et ce même s’ils sont rejetés en réalité par une
                  majorité de l’électorat. Ces candidats clivants se trouvent
                  favorisés par rapport aux seconds choix des électeurs,
                  potentiellement plus rassembleurs.
                </p>
              </div>
            </div>
          </div>
          <Quest02 text82={quest022Props.text82} />
        </div>
        <DON
          className={dONProps.className}
          sizeLgColorMainProps={dONProps.sizeLgColorMainProps}
        />
      </div>
    </div>
  );
}

export default X30QuiSommesNous3;
