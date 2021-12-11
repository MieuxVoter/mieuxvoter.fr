/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Button } from 'theme-ui';
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "next-i18next";

export default function SectionOne() {
  const { t } = useTranslation('homepage');

  return (

    <section sx={styles.sectionOne}>

      <Box sx={styles.containerSectionOne}>

        <Text as="h2">
          {t("titre première section")}
        </Text>

        <Text as="p">
          {t("texte première section")}
        </Text>

        <Box sx={styles.boxButton}>
          <Button>{t("bouton première section")}<BsArrowRight sx={styles.arrow} /></Button>
        </Box>
      </Box>
    </section>
  );
}

const styles = {
  sectionOne: {
    backgroundImage: 'url("img/background-chevron-big-blue.svg")',
    backgroundSize: ['1000px', '1000px', '1000px', '140%', '130%', '160%', '150%'],
    backgroundPosition: ['-300px 100px', '-250px 150px', '-100px 150px', '-12em 0em', '-15em -3em', '-23em -20em', '-22em -20em'],
    backgroundRepeat: 'no-repeat',
    pb: '32em',
    h2: {
      fontSize: ['2em', '3em', '3em', '3em', '4vw'],
      lineHeight: '1',
      textAlign: ['center', 'center', 'center', 'left']
    },
    p: {
      margin: [null, '50px'],
      my: ['30px'],
      fontSize: ['1em', '1em', '1em', '1.5vw'],
    },
    button: {
      boxShadow: '0px 5px 0px 0px #7A64F9',
      mr: 0,
    },
  },
  containerSectionOne: {
    height: '100vh',
    width: [null, null, null, '60%', '40%'],
    ml: [null, null, null, '10%', '20%'],
    margin: ['30px'],
  },
  boxButton: {
    marginRight: [null, '50px'],
    textAlign: ['center', 'center', 'right'],
  },
}