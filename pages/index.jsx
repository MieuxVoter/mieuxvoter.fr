/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useRouter } from "next/router";
import Manifeste from "./manifeste";
import Home from "./home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homepage", "common"])),
  },
});

export default function Index() {
  const router = useRouter();
  const isFrench = router.locale === "fr";

  if (isFrench) {
    return <Manifeste />;
  } else {
    return <Home/>
  }
}

