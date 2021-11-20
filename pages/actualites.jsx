import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DesktopActualites from "@components/Actualites";
import config from "../next-i18next.config.js";
import { isMobile } from "@services/responsive.js";

export const getStaticProps = async ({ locale, req }) => ({
  props: {
    ...(await serverSideTranslations(locale, [], config)),
    isMobile: isMobile(req),
  },
});

function Actualites({ isMobile }) {
  return <DesktopActualites {...ActualitesData} />;
}

export default Actualites;

const frame47Data = {
  image11: "/img/image-11@2x.png",
  libration: "Libération",
  surname: "Le déclic de la politique par et pour tous ?",
  parNicolasMassol: "Par Nicolas Massol",
  text69: "— 1 janvier 2021 à 20:26",
};

const frame472Data = {
  image11: "/img/image-11-4@2x.png",
  libration: "Science et Avenir",
  surname: "Le climat à l'épreuve du jugement majoritaire",
  parNicolasMassol: "Par Arnaud Devillard",
  text69: "—  04 juillet 2020",
  className: "frame-3",
};

const frame473Data = {
  image11: "/img/image-11@2x.png",
  libration: "Libération",
  surname: "Le déclic de la politique par et pour tous ?",
  parNicolasMassol: "Par Nicolas Massol",
  text69: "— 1 janvier 2021 à 20:26",
};

const frame474Data = {
  image11: "/img/image-11-4@2x.png",
  libration: "Science et Avenir",
  surname: "Le climat à l'épreuve du jugement majoritaire",
  parNicolasMassol: "Par Arnaud Devillard",
  text69: "—  04 juillet 2020",
  className: "frame-3",
};

const sizeLgColorMain8Data = {
  cestQuoiLeJugeme: "Adhérez",
  className: "bouton-5",
};

const sizebigColorbleu9Data = {
  className: "logo-8",
};

const sizeLgColorPrimary7Data = {
  className: "bouton-15",
};

const ActualitesData = {
  presse: "Presse",
  image11: "/img/image-11-2@2x.png",
  horizonsPublics: "Horizons Publics",
  text71: "Réinventer notre démocratie avec le jugement majoritaire",
  text72: "— Le 15 septembre 2020",
  image112: "/img/image-11-2@2x.png",
  horizonsPublics2: "Horizons Publics",
  text73: "Réinventer notre démocratie avec le jugement majoritaire",
  text74: "— Le 15 septembre 2020",
  frame47Props: frame47Data,
  frame472Props: frame472Data,
  frame473Props: frame473Data,
  frame474Props: frame474Data,
};
