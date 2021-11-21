import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DesktopHome from "@components/Home";
import MobMenu from "@components/MobMenu";
import MobHome from "@components/MobHome";
import config from "../next-i18next.config.js";
import { useMediaQuery } from "react-responsive";

export const getStaticProps = async ({ locale, req }) => ({
  props: {
    ...(await serverSideTranslations(locale, [], config)),
  },
});

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
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
  nousContactez: "Nous contacter",
  sizebigColorbleuProps: sizebigColorbleu3Data,
};

const sizeLgColorMain4Data = {
  cestQuoiLeJugeme: "Lancez votre vote",
  className: "bouton-1",
};

const group40Data = {
  sizeLgColorMain3Props: sizeLgColorMain4Data,
};

const sizeLgColorMain22Data = {
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
  text14: "Utilisez vous aussi le Jugement Majoritaire",
  text15:
    "Nous avons créé pour vous une application simple et gratuite afin d’organiser un vote avec le Jugement Majoritaire.",
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
  nousContactez: "Nous contacter",
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
  quiSommesNous: "Qui sommes-nous ?",
  spanText18: "N’hésitez pas à remplir le formulaire ci-contre",
  votrePrnom: "Votre prénom",
  votreNom: "Votre nom",
  votreEmail: "Votre email",
  votreMessage: "Votre message",
  cestQuoiLeJugeme: "C’est quoi le jugement majoritaire ?",
  voteDeskProps: voteDeskData,
  voteDesk2Props: voteDesk2Data,
  group40Props: group40Data,
  sizeLgColorMain22Props: sizeLgColorMain22Data,
  onEnParleIci: "On en parle ici",
  sizeLgColorWhiteProps: sizeLgColorWhiteData,
};

const MobMenuData = {
  surname: "Le jugement majoritaire",
  quiSommesNous: "Qui sommes-nous ?",
  fAQ: "F.A.Q",
  presse: "Presse",
  nousContactez: "Nous contacter",
  surname2: "Lang :",
  en: "Fr",
  mentionsLgales: "Mentions légales",
  copyright: "2021 © Mieux Voter",
};

const sizeLgColorMain9Data = {
  cestQuoiLeJugeme: "Adhérez",
  className: "bouton-6-1",
};

const dON3Data = {
  className: "don-5",
  sizeLgColorMainProps: sizeLgColorMain9Data,
};

const tOP36Data = {
  className: "top-7-2",
};

const sizeLgColorMain10Data = {
  cestQuoiLeJugeme: "Adhérez",
  className: "bouton-7",
};

const dON4Data = {
  className: "don-4",
  sizeLgColorMainProps: sizeLgColorMain10Data,
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
  text108: "Utilisez vous aussi le Jugement Majoritaire",
  text109:
    "Nous avons créé pour vous une application simple et gratuite afin d’organisez un vote avec le Jugement Majoritaire.",
  questionVote: "Posez la question de votre vote ici",
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
  nousContactez: "Nous contacter",
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
};
