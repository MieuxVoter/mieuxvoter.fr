import React from "react";
import Head from "next/head";
import "@styles/styleguide.sass";
import "@styles/variables.sass";
import "@styles/globals.sass";
import "@components/Actualites/X30Actualits.sass";
import "@components/QuiSommesNous/QuiSommesNous.sass";
import "@components/DON/DON.sass";
import "@components/DarkTrue/DarkTrue.sass";
import "@components/FOOTER/FOOTER.sass";
import "@components/FOOTER3/FOOTER3.sass";
import "@components/Frame47/Frame47.sass";
import "@components/Frame68/Frame68.sass";
import "@components/Frame682/Frame682.sass";
import "@components/Frame69/Frame69.sass";
import "@components/Frame72/Frame72.sass";
import "@components/Group40/Group40.sass";
import "@components/Group42/Group42.sass";
import "@components/Group51/Group51.sass";
import "@components/Home/X10Home.sass";
import "@components/JugementMajoritaire/X20JugementMajoritaire.sass";
import "@components/MobHome/X10MobHome.sass";
import "@components/MobJugement/X20MobJugement.sass";
import "@components/MobMenu/X00MobMenu.sass";
import "@components/MobQuiSommesNous/X30MobQuiSommesNous.sass";
import "@components/Nom/Nom.sass";
import "@components/Property1big/Property1big.sass";
import "@components/Property1off/Property1off.sass";
import "@components/Property1on/Property1on.sass";
import "@components/Quest02/Quest02.sass";
import "@components/QuiSommesNous/X30QuiSommesNous.sass";
import "@components/QuiSommesNous2/X30QuiSommesNous2.sass";
import "@components/QuiSommesNous3/X30QuiSommesNous3.sass";
import "@components/QuiSommesNous4/X30QuiSommesNous4.sass";
import "@components/SizeLgColorMain/SizeLgColorMain.sass";
import "@components/SizeLgColorMain2/SizeLgColorMain2.sass";
import "@components/SizeLgColorMain22/SizeLgColorMain22.sass";
import "@components/SizeLgColorMain3/SizeLgColorMain3.sass";
import "@components/SizeLgColorPrimary/SizeLgColorPrimary.sass";
import "@components/SizeLgColorPrimary2/SizeLgColorPrimary2.sass";
import "@components/SizeLgColorWhite/SizeLgColorWhite.sass";
import "@components/SizebigColorbleu/SizebigColorbleu.sass";
import "@components/SizebigColorbleu2/SizebigColorbleu2.sass";
import "@components/SizebigColorbleu3/SizebigColorbleu3.sass";
import "@components/TOP/TOP.sass";
import "@components/TOP2/TOP2.sass";
import "@components/TOP4/TOP4.sass";
import "@components/Team1/Team1.sass";
import "@components/Video/Video.sass";
import "@components/VoteDesk/VoteDesk.sass";
import "@components/VoteDesk2/VoteDesk2.sass";
import { appWithTranslation } from "next-i18next";
// import Header from "@components/layouts/Header";
// import Footer from "@components/layouts/Footer";
import Header from "@components/TOP2";
import Footer from "@components/FOOTER3";
import DON from "@components/DON";
import { AppProvider } from "@services/context";

function Application({ Component, pageProps }) {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "http://localhost";
  return (
    <AppProvider>
      <Head>
        <link rel="icon" key="favicon" href="/favicon.ico" />
        <meta property="og:url" content={origin} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:image"
          content="https://mieuxvoter.fr/og-mieux-voter.png"
          key="og:image"
        />
      </Head>
      <div className="container-center-horizontal">
        <div className="screen">
          <div className="overlap-group2-8">
            <Header {...tOP2Data} />
          </div>
          <main className="d-flex flex-column justify-content-center">
            <Component {...pageProps} />
          </main>
          <DON sizeLgColorMainProps={dONData.sizeLgColorMainProps} />
          <Footer
            className={fOOTER32Data.className}
            sizebigColorbleuProps={fOOTER32Data.sizebigColorbleuProps}
            sizebigColorbleuProps2={fOOTER32Data.sizebigColorbleuProps2}
          />
        </div>
      </div>
    </AppProvider>
  );
}

export default appWithTranslation(Application);

const tOP2Data = {
  surname: "Lang : En",
  text26: "S’inscrire à la newsletter",
  nousSoutenir: "Nous soutenir",
  surname2: "Le jugement majoritaire",
  quiSommesNous: "Qui sommes-nous ?",
  presse: "Presse",
  nousContactez: "Nous contactez",
};
const sizeLgColorMain6Data = {
  cestQuoiLeJugeme: "Adhérez",
  className: "bouton-3",
};

const dONData = {
  sizeLgColorMainProps: sizeLgColorMain6Data,
};

const sizebigColorbleu7Data = {
  className: "logo-6",
};

const sizeLgColorPrimary5Data = {
  className: "bouton-13",
};

const fOOTER32Data = {
  className: "footer-4",
  sizebigColorbleuProps: sizebigColorbleu7Data,
  sizebigColorbleuProps2: sizeLgColorPrimary5Data,
};
