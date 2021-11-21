import React from "react";
import { useMediaQuery } from "react-responsive";
import DeskHeader from "@components/DeskHeader";
import MobHeader from "@components/MobHeader";

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  if (isMobile) return <MobHeader {...HeaderData} />;
  else return <DeskHeader {...HeaderData} />;
}

export default Header;

const HeaderData = {
  lang: "Langue : Fr",
  newsletter: "S’inscrire à la newsletter",
  nousSoutenir: "Nous soutenir",
  surname2: "Le jugement majoritaire",
  quiSommesNous: "Qui sommes-nous ?",
  presse: "Presse",
  nousContactez: "Nous contacter",
};
