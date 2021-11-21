import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MobQuiSommesNous from "@components/MobQuiSommesNous";
import DesktopQuiSommesNous from "@components/QuiSommesNous";
import config from "../next-i18next.config.js";
import { useMediaQuery } from "react-responsive";

export const getStaticProps = async ({ locale, req }) => ({
  props: {
    ...(await serverSideTranslations(locale, [], config)),
  },
});

function QuiSommesNous() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  if (isMobile) {
    return <MobQuiSommesNous {...MobQuiSommesNousData} />;
  } else {
    return (
      <DesktopQuiSommesNous
        team1Props={team1Data}
        team12Props={team12Data}
        team13Props={team13Data}
        team14Props={team14Data}
        team15Props={team15Data}
      />
    );
  }
}

export default QuiSommesNous;

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

const team12Data = {
  photo: "/img/rectangle-85@2x.png",
  name: "David Chavalarias",
  text51:
    "Directeur de Recherche CNRS (CAMS/EHESS) et Directeur de l’Institut des Systèmes Complexes de Paris Ile-de-France.",
  className: "team-4",
};

const team13Data = {
  photo: "/img/rectangle-82@2x.png",
  name: "Loïc Blondiaux",
  text51: "Professeur des universités, Université Paris-1 Panthéon Sorbonne.",
  className: "team-2",
};

const team14Data = {
  photo: "/img/rectangle-84@2x.png",
  name: "David Guez",
  text51: "Avocat au barreau de Paris et Co-fondateur de LaPrimaire.org.",
  className: "team-5",
};

const team15Data = {
  photo: "/img/rectangle-83@2x.png",
  name: "Eric Brousseau",
  text51: "Professeur d’économie et de management.",
  className: "team-3",
};

const team1Data = {
  photo: "/img/rectangle-81@2x.png",
  name: "Maria Balinska",
  text51:
    "Future Directrice exécutive de la Commission Fulbright Etats-Unis – Royaume Uni",
};

const contentData = {
  team1Props: team1Data,
  team12Props: team12Data,
  team13Props: team13Data,
  team14Props: team14Data,
  team15Props: team15Data,
};

const QuiSommesNousData = {
  contentProps: contentData,
};
