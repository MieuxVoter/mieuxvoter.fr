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
    backgroundSize: ['2495px', '2495px', '2495px', '2495px', '2495px', '2495px', '2495px', '120%'],
    backgroundPosition: ['41.5% 65%', '42% 60%', '40% 80%', '45% 100%', '50% 100%', '55% 100%', '-497px -434px', '50% bottom'],
    backgroundRepeat: 'no-repeat',
    '@media screen and (min-width: 2150px)': {
      background: 'white',
    },
    pb: ['200px', '200px', '550px', '600px', '650px', '800px', '700px'],
    pt: [ '50px', '100px'],
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign: 'left',
    },
    p: {
      margin: [null, '50px 50px 50px 80px'],
      my: ['30px'],
      ml: [null, '50px', 8],
      fontSize: ['18px'],
    },
    button: {
      boxShadow: '0px 5px 0px 0px #7A64F9',
      mr: 0,
    },
  },
  containerSectionOne: {

    width: [null, null, null, '60%', '48%'],
    ml: [0, null, null, '10%', '12%'],
    mx: ['30px'],
  },
  boxButton: {
    marginRight: [null, '50px'],
    textAlign: ['center', 'center', 'right'],
  },
  arrow: {
    verticalAlign: 'middle',
    fontSize: '2em',
    color: '#FFFFFF',
    ml: 5,
},
}