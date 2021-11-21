import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MobJugementMajoritaire from "@components/MobJugement";
import DesktopJugementMajoritaire from "@components/JugementMajoritaire";
import config from "../next-i18next.config.js";
import { useMediaQuery } from "react-responsive";

export const getStaticProps = async ({ locale, req }) => ({
  props: {
    ...(await serverSideTranslations(locale, [], config)),
  },
});

function JugementMajoritaire() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  if (isMobile) {
    return <MobJugementMajoritaire {...MobJugementData} />;
  } else {
    return <DesktopJugementMajoritaire {...JugementMajoritaireData} />;
  }
}

export default JugementMajoritaire;

const sizeLgColorMain7Data = {
  cestQuoiLeJugeme: "Lancer votre vote",
  className: "bouton-4",
};

const group402Data = {
  className: "group-40-1",
  sizeLgColorMain3Props: sizeLgColorMain7Data,
};
const frame68Data = {
  text26: "“Le jugement majoritaire : une nouvelle théorie du vote”",
  spanText: (
    <>
      Rida Laraki et Michel Balinski,
      <br />
    </>
  ),
  spanText2: "Collège-de-France.fr",
};

const frame683Data = {
  text26: (
    <>
      Réponse à des Critiques
      <br />
      du Jugement Majoritaire
    </>
  ),
  spanText: (
    <>
      Michel Balinski,
      <br />
    </>
  ),
  spanText2: "Rapport du CREST - 2018",
};

const frame684Data = {
  text26: "A theory of measuring, electing, and ranking",
  spanText: (
    <>
      Balinski M., R. Laraki,
      <br />
    </>
  ),
  spanText2: "pnas.org - 2007",
};

const frame72Data = {
  text30: "Réformons l’élection présidentielle !",
  phone: "07/11/2020",
};

const frame722Data = {
  text30: "Aux urnes, citoyens !? Pour une révolution électorale",
  phone: "18/06/2020",
  className: "frame-73",
};
const video2Data = {
  className: "video-1",
};

const JugementMajoritaireData = {
  surname: "Le jugement majoritaire",
  spanText: "Le ",
  spanText2: "Jugement Majoritaire",
  spanText3:
    " est une nouvelle méthode de vote inventée par deux directeurs de recherche du CNRS, ",
  spanText4: "Rida Laraki ",
  spanText5: "et ",
  spanText6: "Michel Balinski",
  spanText7: (
    <>
      .<br />
      <br />
      L’électeur vote en évaluant tous les candidats, à partir d’une échelle de
      valeur (par exemple: Excellent, Très bien, Bien, Assez bien, Passable,
      Insuffisant, À rejeter).
      <br />
      Le candidat le mieux évalué par une majorité remporte l’élection.
    </>
  ),
  surname2: (
    <>
      Le Jugement majoritaire est la méthode de vote à ce jour la plus fiable
      pour mesurer l’opinion, tout en mettant fin à ce qui empêche l’électeur de
      s’exprimer :<br />
      le vote utile, le vote par défaut, le vote blanc.
    </>
  ),
  image12: "/img/image-12@1x.png",
  image13: "/img/image-13@2x.png",
  surname3: "Le jugement majoritaire en 1 minutes",
  enVido: "En vidéo",
  surname4: "Le jugement majoritaire en 20 minutes",
  text44: (
    <>
      Fondements
      <br />
      scientifique
    </>
  ),
  text45: "Travaux de références en français",
  text57: "“Ne votez pas, jugez !“",
  spanText8: (
    <>
      Balinski M., R. Laraki,
      <br />
    </>
  ),
  spanText9: "PourlaScience.fr - 2012",
  text46: "Travaux de références en anglais",
  text49: "Majority Judgment – Measuring, Ranking, and Electing",
  spanText10: (
    <>
      Rida Laraki et Michel Balinski,
      <br />
    </>
  ),
  spanText11: "MIT Press - 2011",
  text62: (
    <>
      Compare voting systems
      <br />
      to improve them
    </>
  ),
  spanText12: (
    <>
      Madhavan et al.
      <br />
    </>
  ),
  spanText13: "Nature - 2017",
  contributions: "Contributions",
  text56: "Contributions de scientifiques portant sur le jugement majoritaire",
  text55:
    "Une histoire du vote en France Les expériences médiévales Xe – XIVe siècle",
  phone: "24/03/2020",
  text52: (
    <>
      Au-delà des « fake news » :<br />à l’ère numérique, nos démocraties
      doivent évoluer pour ne pas mourir
    </>
  ),
  phone2: "07/05/2019",
  surname5:
    "Le jugement majoritaire et la délibération : mieux discuter, pour mieux voter !",
  text54: "09/04/2019",
  ouvrageEnAnglais: "Ouvrage en anglais",
  image10: "/img/image-10@2x.png",
  surname6:
    "Le jugement majoritaire repose sur une théorie mathématique publiée en 2007 dans les Proceedings of the National Academy of Sciences2 et développée dans un livre paru chez MIT Press en 2011.",
  voirLouvrage: "Voir l’ouvrage",
  text42: "Venez essayer le jugement majoritaire avec notre outil",
  spanText14: "Nous avons créé pour vous une application ",
  spanText15: "simple et gratuite ",
  spanText16: "afin d’organisez un vote avec le Jugement Majoritaire.",
  videoProps: video2Data,
  frame68Props: frame68Data,
  frame682Props: frame683Data,
  frame683Props: frame684Data,
  frame72Props: frame72Data,
  frame722Props: frame722Data,
  group40Props: group402Data,
};

const sizeLgColorMain5Data = {
  cestQuoiLeJugeme: "Lancer votre vote",
  className: "bouton-2",
};
const MobJugementData = {
  spanText: "Le jugement",
  spanText2: " ",
  spanText3: "majoritaire",
  surname: (
    <>
      Le Jugement Majoritaire est une nouvelle méthode de vote inventée par deux
      directeurs de recherche du CNRS, Rida Laraki et Michel Balinski.
      <br />
      <br />
      L’électeur vote en évaluant tous les candidats, à partir d’une échelle de
      valeur (par exemple: Excellent, Très bien, Bien, Assez bien, Passable,
      Insuffisant, À rejeter).
      <br />
      Le candidat le mieux évalué par une majorité remporte l’élection.
      <br />
      <br />
      Le Jugement majoritaire est la méthode de vote à ce jour la plus fiable
      pour mesurer l’opinion, tout en mettant fin à ce qui empêche l’électeur de
      s’exprimer :<br />
      le vote utile, le vote par défaut, le vote blanc.
    </>
  ),
  image9: "/img/image-9-2@2x.png",
  image92: "/img/image-9-2@2x.png",
  image93: "/img/image-9-2@2x.png",
  surname2: "Le jugement majoritaire en 1 minutes",
  surname3: "Le jugement majoritaire en 1 minutes",
  surname4: "Le jugement majoritaire en 1 minutes",
  image10: "/img/image-10-1@2x.png",
  text19: "Utilisez vous aussi le Jugement Majoritaire",
  text20:
    "Nous avons créé pour vous une application simple et gratuite afin d'organiser un vote avec le Jugement Majoritaire.",
  cestQuoiLeJugeme: "Posez la question de votre vote ici",
  sizeLgColorMainProps: sizeLgColorMain5Data,
};
