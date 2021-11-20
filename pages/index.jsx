import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DesktopHome from "@components/Home";
import QuiSommesNous from "@components/QuiSommesNous";
import MobMenu from "@components/MobMenu";
import Actualites from "@components/Actualites";
import QuiSommesNous2 from "@components/QuiSommesNous2";
import QuiSommesNous3 from "@components/QuiSommesNous3";
import MobHome from "@components/MobHome";
import QuiSommesNous4 from "@components/QuiSommesNous4";
import config from "../next-i18next.config.js";
import { isMobile } from "@services/responsive.js";

export const getStaticProps = async ({ locale, req }) => ({
  props: {
    ...(await serverSideTranslations(locale, [], config)),
    isMobile: isMobile(req),
  },
});
/**
function MobileApp() {
  return (
    <Router>
      <Switch>
        <Route path="/qui-sommes-nous">
          <MobQuiSommesNous {...MobQuiSommesNousData} />
        </Route>
        <Route path="/jugement-majoritaire">
          <MobJugement {...MobJugementData} />
        </Route>
        <Route path="/actualites">
          <Actualites {...ActualitesData} />
        </Route>
        <Route path="/" exact>
          <MobHome {...MobHomeData} />
        </Route>
      </Switch>
    </Router>
  );
}

function DesktopApp() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home {...HomeData} />
        </Route>
        <Route path="/jugement-majoritaire">
          <JugementMajoritaire {...JugementMajoritaireData} />
        </Route>
        <Route path="/30-qui-sommes-nous-2">
          <QuiSommesNous
            contentProps={QuiSommesNousData.contentProps}
            dONProps={QuiSommesNousData.dONProps}
            fOOTER3Props={QuiSommesNousData.fOOTER3Props}
          />
        </Route>
        <Route path="/actualites">
          <Actualites {...ActualitesData} />
        </Route>
        <Route path="/-qui-sommes-nous">
          <QuiSommesNous2 {...QuiSommesNous2Data} />
        </Route>
        <Route path="/-qui-sommes-nous2">
          <QuiSommesNous3 {...QuiSommesNous3Data} />
        </Route>
        <Route path="/30-qui-sommes-nous">
          <QuiSommesNous4
            contentProps={QuiSommesNous4Data.contentProps}
            dONProps={QuiSommesNous4Data.dONProps}
            fOOTER3Props={QuiSommesNous4Data.fOOTER3Props}
          />
        </Route>
      </Switch>
    </Router>
  );
}
*/

function Home({ isMobile }) {
  if (isMobile) return <MobHome {...MobHomeData} />;
  else return <DesktopHome {...HomeData} />;
}

export default Home;
const group51Data = {
  rectangle81: "/img/rectangle-81@2x.png",
  spanText: "Maria ",
  spanText2: "Balinska",
  text4:
    "Future Directrice exécutive de la Commission Fulbright Etats-Unis – Royaume Uni",
};

const group512Data = {
  rectangle81: "/img/rectangle-85@2x.png",
  spanText: "David ",
  spanText2: "Chavalarias",
  text4:
    "Directeur de Recherche CNRS (CAMS/EHESS) et Directeur de l’Institut des Systèmes Complexes de Paris Ile-de-France.",
  className: "group-48",
};

const group513Data = {
  rectangle81: "/img/rectangle-84@2x.png",
  spanText: "David ",
  spanText2: "Guez",
  text4: "Avocat au barreau de Paris et Co-fondateur de LaPrimaire.org.",
  className: "group-47",
};

const sizeLgColorMainData = {
  cestQuoiLeJugeme: "Adhérez",
};

const sizebigColorbleu2Data = {
  className: "logo-1",
};

const fOOTERData = {
  sizebigColorbleuProps: sizebigColorbleu2Data,
};

const MobQuiSommesNousData = {
  spanText: "Qui",
  spanText2: " ",
  spanText3: "sommes-nous ",
  spanText4: "?",
  text1: (
    <>
      Mieux Voter est une association créée en janvier 2018 voir les statuts de
      l’association pour promouvoir une nouvelle méthode de vote, le Jugement
      majoritaire.
      <br />
      <br />
      Mieux Voter agit pour faire connaître le Jugement Majoritaire au plus
      grand nombre et accompagne les collectivités publiques, les entreprises,
      les associations et les particuliers dans son utilisation.
    </>
  ),
  rectangle82: "/img/rectangle-82@2x.png",
  spanText5: "Loïc ",
  spanText6: "Blondiaux",
  text5: "Professeur des universités, Université Paris-1 Panthéon Sorbonne.",
  rectangle83: "/img/rectangle-83@2x.png",
  spanText7: "Eric ",
  spanText8: "Brousseau",
  text6: "Professeur d’économie et de management.",
  text3: "Adhérez à Mieux Voter",
  group51Props: group51Data,
  group512Props: group512Data,
  group513Props: group513Data,
  sizeLgColorMainProps: sizeLgColorMainData,
  fOOTERProps: fOOTERData,
};

const sizeLgColorMain2Data = {
  text13: "C’est quoi le jugement majoritaire ?",
};

const nomData = {
  name: "Cameron Williamson",
};

const property1offData = {
  children: "Insuffisant",
};

const property1off2Data = {
  children: "Passable",
  className: "frame-42-1",
};

const property1off3Data = {
  children: "Assez bien",
  className: "frame-43-1",
};

const property1off4Data = {
  children: "Bien",
  className: "frame-39",
};

const property1onData = {
  trsBien: "Très bien",
};

const property1off5Data = {
  children: "Excellent",
  className: "frame-4-1",
};

const voteDeskData = {
  nomProps: nomData,
  property1offProps: property1offData,
  property1off2Props: property1off2Data,
  property1off3Props: property1off3Data,
  property1off4Props: property1off4Data,
  property1onProps: property1onData,
  property1off5Props: property1off5Data,
};

const nom2Data = {
  name: "Esther Howard",
};

const property1off6Data = {
  children: "Insuffisant",
};

const property1off7Data = {
  children: "Passable",
  className: "frame-42",
};

const property1off8Data = {
  children: "Assez bien",
  className: "frame-43",
};

const property1on2Data = {
  trsBien: "Bien",
  className: "frame-39-1",
};

const property1off9Data = {
  children: "Très bien",
  className: "frame-4-2",
};

const property1off10Data = {
  children: "Excellent",
  className: "frame-4",
};

const voteDesk2Data = {
  nomProps: nom2Data,
  property1offProps: property1off6Data,
  property1off2Props: property1off7Data,
  property1off3Props: property1off8Data,
  property1onProps: property1on2Data,
  property1off4Props: property1off9Data,
  property1off5Props: property1off10Data,
};

const sizebigColorbleu3Data = {
  className: "logo-2",
};

const tOP2Data = {
  surname: "Lang : En",
  text26: "S’inscrire à la newsletter",
  nousSoutenir: "Nous soutenir",
  surname2: "Le jugement majoritaire",
  quiSommesNous: "Qui sommes-nous ?",
  presse: "Presse",
  nousContactez: "Nous contactez",
  sizebigColorbleuProps: sizebigColorbleu3Data,
};

const sizeLgColorMain4Data = {
  cestQuoiLeJugeme: "Lancer votre vote",
  className: "bouton-1",
};

const group40Data = {
  sizeLgColorMain3Props: sizeLgColorMain4Data,
};

const sizeLgColorMain22Data = {
  text13: "Qui sommes-nous ?",
  className: "1222",
};

const sizeLgColorWhiteData = {
  cestQuoiLeJugeme: "Faire un don",
};

const HomeData = {
  text11: "Rendre les élections aux électeurs",
  spanText:
    "Nos élections sont archaïques, il faut en changer les règles. Nous voulons que nos opinions soient pleinement prises en compte. Nous ne voulons plus avoir à voter utile, blanc, par défaut. Nous voulons mieux voter avec le ",
  spanText2: "Jugement majoritaire.",
  text20: "C’est quoi le jugement majoritaire ?",
  spanText3:
    "Le Jugement Majoritaire est une nouvelle méthode de vote inventée par ",
  spanText4: "Rida Laraki ",
  spanText5: "et ",
  spanText6: "Michel Balinski",
  spanText7: ", Directeurs de Recherche au CNRS.",
  spanText8:
    "L’électeur vote en donnant son opinion sur tous les candidats, à partir d’une échelle commune de mentions allant “d’",
  spanText9: "Excellent",
  spanText10: "” à “",
  spanText11: "À rejeter",
  spanText12: "”.",
  surname:
    "Le vainqueur de l’élection est celui qui est le mieux évalué par une majorité.",
  text14: "Crééz votre propre vote majoritaire",
  text15:
    "Nous avons créé pour vous une application simple et gratuite afin d’organisez un vote avec le Jugement Majoritaire.",
  text17: (
    <>
      Mieux nous
      <br />
      connaître
    </>
  ),
  spanText13:
    "Mieux Voter est une association qui veut révolutionner les élections grâce à une nouvelle méthode de vote, le ",
  spanText14: "Jugement majoritaire",
  spanText15: ".",
  image8: "/img/image-8@2x.png",
  text24: "Soutenez Mieux Voter",
  text25:
    "Mieux Voter est une association transpartisane et sans but lucratif. En adhérant à l’association, vous contribuez à financer son fonctionnement et ses activités.",
  nousContactez: "Nous contactez",
  spanText16: (
    <>
      Vous souhaitez vous investir, vous tenir
      <br />
      au courant, ou juste dire bonjour ?<br />
    </>
  ),
  spanText17: (
    <>
      {" "}
      <br />
    </>
  ),
  spanText18: "N’hésitez pas à remplir le formulaire ci-contre",
  votrePrnom: "Votre prénom",
  votreNom: "Votre nom",
  votreEmail: "Votre email",
  votreMessage: "Votre message",
  sizeLgColorMain2Props: sizeLgColorMain2Data,
  voteDeskProps: voteDeskData,
  voteDesk2Props: voteDesk2Data,
  group40Props: group40Data,
  sizeLgColorMain22Props: sizeLgColorMain22Data,
  sizeLgColorWhiteProps: sizeLgColorWhiteData,
};

const MobMenuData = {
  surname: "Le jugement majoritaire",
  quiSommesNous: "Qui sommes-nous ?",
  fAQ: "F.A.Q",
  presse: "Presse",
  nousContactez: "Nous contactez",
  surname2: "Lang :",
  en: "En",
  mentionsLgales: "Mentions légales",
  copyright: "2021 © Mieux Voter",
};

const tOP34Data = {
  className: "top-6",
};

const tOP35Data = {
  className: "top-7-1",
};

const quest02Data = {
  text82: "Pourquoi peut-on mieux voter ?",
};

const quest022Data = {
  text82: "Quels sont les atouts du jugement majoritaire?",
};

const quest023Data = {
  text82: "Le jugement majoritaire, ce n’est pas trop compliqué ?",
};

const quest024Data = {
  text82: "Le jugement majoritaire a t-il déjà été expérimenté?",
};

const quest025Data = {
  text82: "Pourquoi des mentions plutôt que des notes ?",
};

const quest026Data = {
  text82: "Pourquoi pas le vote par classement ?",
};

const quest027Data = {
  text82: "Le jugement majoritaire ne va-t-il pas favoriser le centre ?",
};

const quest028Data = {
  text82: "Avec le jugement majoritaire, est-ce qu’on peut voter blanc ?",
};

const quest029Data = {
  text82:
    "Les électeurs ne seraient-ils pas tentés de tricher avec le jugement majoritaire ?",
};

const quest0210Data = {
  text82: "Comment organiser un vote papier avec le jugement  majoritaire ?",
};

const quest0211Data = {
  text82:
    "Comment organiser un vote électronique avec le Jugement majoritaire ?",
};

const sizeLgColorMain9Data = {
  cestQuoiLeJugeme: "Adhérez",
  className: "bouton-6-1",
};

const dON3Data = {
  className: "don-5",
  sizeLgColorMainProps: sizeLgColorMain9Data,
};

const sizebigColorbleu10Data = {
  className: "logo-9-1",
};

const sizeLgColorPrimary8Data = {
  className: "bouton-16",
};

const fOOTER35Data = {
  className: "footer-7",
  sizebigColorbleuProps: sizebigColorbleu10Data,
  sizebigColorbleuProps2: sizeLgColorPrimary8Data,
};

const QuiSommesNous2Data = {
  text90: "Questions fréquentes",
  text80: "Qu’est-ce qu’une élection ?",
  text81:
    "Une élection doit mesurer qualitativement l’état d’une opinion pour choisir, élire ou ranger. Pour ce faire, une bonne méthode de vote doit permettre à chaque électeur d’exprimer pleinement son avis, puis en ressortir une préférence collective consensuelle et cohérente. Depuis 200 ans, la science démontre que ni le scrutin majoritaire, ni le scrutin proportionnel, ne remplissent pleinement ces critères.",
  tOP3Props: tOP35Data,
  quest02Props: quest02Data,
  quest022Props: quest022Data,
  quest023Props: quest023Data,
  quest024Props: quest024Data,
  quest025Props: quest025Data,
  quest026Props: quest026Data,
  quest027Props: quest027Data,
  quest028Props: quest028Data,
  quest029Props: quest029Data,
  quest0210Props: quest0210Data,
  quest0211Props: quest0211Data,
  dONProps: dON3Data,
  fOOTER3Props: fOOTER35Data,
};

const tOP36Data = {
  className: "top-7-2",
};

const quest0212Data = {
  text82: "Qu’est-ce qu’une élection ?",
  className: "quest-4",
};

const quest0213Data = {
  text82: "Quels sont les atouts du jugement majoritaire?",
};

const sizeLgColorMain10Data = {
  cestQuoiLeJugeme: "Adhérez",
  className: "bouton-7",
};

const dON4Data = {
  className: "don-4",
  sizeLgColorMainProps: sizeLgColorMain10Data,
};

const sizebigColorbleu11Data = {
  className: "logo-10",
};

const sizeLgColorPrimary9Data = {
  className: "bouton-17",
};

const fOOTER36Data = {
  className: "footer-8",
  sizebigColorbleuProps: sizebigColorbleu11Data,
  sizebigColorbleuProps2: sizeLgColorPrimary9Data,
};

const QuiSommesNous3Data = {
  text100: "Questions fréquentes",
  text96: "Pourquoi peut-on mieux voter ?",
  text97: (
    <>
      Qu’il s’agisse du scrutin majoritaire ou proportionnel, uninominal ou
      plurinominal… nos modes de scrutin sont archaïques et ne permettent pas de
      mesurer et traduire l’opinion de l’électorat. Ils reposent tous sur la
      même pratique: donner à l’électeur un bulletin, lui demander de
      l’attribuer à une seule candidature, puis calculer la somme des voix
      obtenues pour chaque candidature.
      <br />
      <br />
      Ces modes de scrutin souffrent de nombreux paradoxes démontrés par la
      science depuis plus de deux siècles (notamment : le paradoxe de Condorcet,
      le paradoxe d’Arrow). <br />
      <br />
      Ils comportent aussi d’importants biais anti-démocratiques et sont source
      de frustration pour les électeurs :
    </>
  ),
  tOP3Props: tOP36Data,
  quest02Props: quest0212Data,
  quest022Props: quest0213Data,
  dONProps: dON4Data,
  fOOTER3Props: fOOTER36Data,
};

const sizeLgColorMain222Data = {
  cestQuoiLeJugeme: "C’est quoi le vote majoritaire ?",
};

const tOP5Data = {
  className: "top-2",
};

const darkTrue4Data = {
  className: "dark-true-3",
};

const sizeLgColorMain223Data = {
  cestQuoiLeJugeme: "On vous en dit plus ici",
  className: "bouton-26",
};

const sizeLgColorMain32Data = {
  className: "bouton-19",
};

const sizeLgColorMain11Data = {
  cestQuoiLeJugeme: "Lancer votre vote",
  className: "bouton-8",
};

const sizeLgColorMain224Data = {
  cestQuoiLeJugeme: "Qui sommes-nous ?",
  className: "bouton-27",
};

const group422Data = {
  className: "group-41",
};

const sizeLgColorMain12Data = {
  cestQuoiLeJugeme: "Faire un don",
  className: "bouton-9",
};

const sizeLgColorPrimary22Data = {
  className: "bouton-24",
};

const sizebigColorbleu13Data = {
  className: "logo-12",
};

const fOOTER4Data = {
  className: "footer-2",
  sizebigColorbleuProps: sizebigColorbleu13Data,
};

const MobHomeData = {
  text104: (
    <>
      Une nouvelle
      <br />
      facon de voter !
    </>
  ),
  spanText:
    "Nos élections sont archaïques, il faut en changer les règles. Nous voulons que nos opinions soient pleinement prises en compte. Nous ne voulons plus avoir à voter utile, blanc, par défaut. Nous voulons mieux voter avec le ",
  spanText2: "Jugement majoritaire.",
  text107: "C’est quoi le jugement majoritaire ?",
  spanText3:
    "Le Jugement Majoritaire est une nouvelle méthode de vote inventée par ",
  spanText4: "Rida Laraki",
  spanText5: " ",
  spanText6: "et ",
  spanText7: "Michel Balinski",
  spanText8: (
    <>
      , Directeurs de Recherche au CNRS.
      <br />
      <br />
      L’électeur vote en donnant son opinion sur tous les candidats, à partir
      d’une échelle commune de mentions allant “d’
    </>
  ),
  spanText9: "Excellent",
  spanText10: "” à “",
  spanText11: "À rejeter",
  spanText12: (
    <>
      ”.
      <br />
    </>
  ),
  spanText13: (
    <>
      <br />
      Exemple : Excellent, Très bien, Bien, Assez bien, Passable, Insuffisant, À
      rejeter
    </>
  ),
  spanText14: (
    <>
      .<br />
    </>
  ),
  spanText15: (
    <>
      <br />
      Le vainqueur de l’élection est celui qui est le mieux évalué par une
      majorité.
    </>
  ),
  text108: "Crééz votre propre vote majoritaire",
  text109:
    "Nous avons créé pour vous une application simple et gratuite afin d’organisez un vote avec le Jugement Majoritaire.",
  cestQuoiLeJugeme: "Poser la question de votre vote ici",
  text102: (
    <>
      Mieux nous
      <br />
      connaître
    </>
  ),
  spanText16:
    "Mieux Voter est une association qui veut révolutionner les élections grâce à une nouvelle méthode de vote, le ",
  spanText17: "Jugement majoritaire",
  spanText18: ".",
  text110: "Soutenez Mieux Voter",
  nousContactez: "Nous contactez",
  spanText19: (
    <>
      Vous souhaitez vous investir, vous tenir au courant, ou juste dire bonjour
      ?<br />
    </>
  ),
  spanText20: (
    <>
      {" "}
      <br />
    </>
  ),
  spanText21: "N’hésitez pas à remplir le formulaire ci-contre",
  votrePrnom: "Votre prénom",
  votreNom: "Votre nom",
  votreEmail: "Votre email",
  votreMessage: "Votre message",
  sizeLgColorMain22Props: sizeLgColorMain222Data,
  tOPProps: tOP5Data,
  darkTrueProps: darkTrue4Data,
  sizeLgColorMain222Props: sizeLgColorMain223Data,
  sizeLgColorMain3Props: sizeLgColorMain32Data,
  sizeLgColorMainProps: sizeLgColorMain11Data,
  sizeLgColorMain223Props: sizeLgColorMain224Data,
  group42Props: group422Data,
  sizeLgColorMain2Props: sizeLgColorMain12Data,
  sizeLgColorPrimary2Props: sizeLgColorPrimary22Data,
  fOOTERProps: fOOTER4Data,
};

const team16Data = {
  photo: "/img/rectangle-81@2x.png",
  name: "Maria Balinska",
  text51:
    "Future Directrice exécutive de la Commission Fulbright Etats-Unis – Royaume Uni",
};

const team17Data = {
  photo: "/img/rectangle-85@2x.png",
  name: "David Chavalarias",
  text51:
    "Directeur de Recherche CNRS (CAMS/EHESS) et Directeur de l’Institut des Systèmes Complexes de Paris Ile-de-France.",
  className: "team-4-1",
};

const team18Data = {
  photo: "/img/rectangle-82@2x.png",
  name: "Loïc Blondiaux",
  text51: "Professeur des universités, Université Paris-1 Panthéon Sorbonne.",
  className: "team-2-1",
};

const team19Data = {
  photo: "/img/rectangle-84@2x.png",
  name: "David Guez",
  text51: "Avocat au barreau de Paris et Co-fondateur de LaPrimaire.org.",
  className: "team-5-1",
};

const team110Data = {
  photo: "/img/rectangle-83@2x.png",
  name: "Eric Brousseau",
  text51: "Professeur d’économie et de management.",
  className: "team-3-1",
};

const content2Data = {
  team1Props: team16Data,
  team12Props: team17Data,
  team13Props: team18Data,
  team14Props: team19Data,
  team15Props: team110Data,
};

const sizeLgColorMain13Data = {
  cestQuoiLeJugeme: "Adhérez",
  className: "bouton-6",
};

const dON5Data = {
  sizeLgColorMainProps: sizeLgColorMain13Data,
};

const sizebigColorbleu14Data = {
  className: "logo-9",
};

const sizeLgColorPrimary11Data = {
  className: "bouton-16",
};

const fOOTER37Data = {
  className: "footer-7",
  sizebigColorbleuProps: sizebigColorbleu14Data,
  sizebigColorbleuProps2: sizeLgColorPrimary11Data,
};

const QuiSommesNous4Data = {
  contentProps: content2Data,
  dONProps: dON5Data,
  fOOTER3Props: fOOTER37Data,
};
