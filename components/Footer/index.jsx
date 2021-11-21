import React from "react";
import { useMediaQuery } from "react-responsive";
import DeskFooter from "@components/DeskFooter";
import MobFooter from "@components/MobFooter";

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  if (isMobile) return <MobFooter {...FooterData} />;
  else return <DeskFooter {...FooterData} />;
}

export default Footer;

const FooterData = {
  lang: "Langue : Fr",
  newsletter: "S’inscrire à la newsletter",
  nousSoutenir: "Nous soutenir",
  surname2: "Le jugement majoritaire",
  quiSommesNous: "Qui sommes-nous ?",
  presse: "Presse",
  nousContactez: "Nous contacter",
};
