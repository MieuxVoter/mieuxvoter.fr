/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import React from "react";
import SectionOne from "../components/home-page/section-one";
import SectionTwo from "../components/home-page/section-two";
import SectionThree from "../components/home-page/section-three";
import SectionFour from "../components/home-page/section-four";
import SectionFive from "../components/home-page/section-five";
import SectionSix from "../components/home-page/section-six";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homepage", "common"])),
  },
});

export default function Home() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
  );
}

