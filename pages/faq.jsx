import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DesktopFAQ from "@components/FAQ";
import config from "../next-i18next.config.js";
import { isMobile } from "@services/responsive.js";

export const getStaticProps = async ({ locale, req }) => ({
  props: {
    ...(await serverSideTranslations(locale, [], config)),
    isMobile: isMobile(req),
  },
});

function FAQ({ isMobile }) {
  return <DesktopFAQ {...FAQData} />;
}

export default FAQ;

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

const quest0212Data = {
  text82: "Qu’est-ce qu’une élection ?",
  className: "quest-4",
};

const quest0213Data = {
  text82: "Quels sont les atouts du jugement majoritaire ?",
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
const FAQData = {
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
};
