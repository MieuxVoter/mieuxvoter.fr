/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import ContactCard from "../contact-card";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contact"])),
  },
});

export default function SectionSix() {
  return (
    <section sx={styles.sectionSix}>
      <ContactCard />
    </section>
  );
}

const styles = {
  sectionSix: {
    backgroundImage: [null, null, 'url("/img/red-stripe-down-right.svg")'],
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right top",
    backgroundSize: "14%",
    px: "30px",
  },
};
