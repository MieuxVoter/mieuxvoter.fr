/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Button } from 'theme-ui';
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "next-i18next";
import Arrow from '../arrow';
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
          <Button>{t("bouton première section")}<Arrow /></Button>
        </Box>
      </Box>
    </section>
  );
}

const styles = {
  sectionOne: {
    backgroundImage: 'url("img/chevron.svg")',
    backgroundSize: ['343%', '343%', '250%', '250%', '250%', '250%', '169%', '259%'],
    backgroundPosition: ['50% bottom', '50% bottom', 'center bottom', '49% bottom', '51% bottom', '47% bottom  ', '61% bottom', '47% bottom'],
    backgroundRepeat: 'no-repeat',
    
    pb: ['88%', '73%', '73%', '60%', '48%', '43%', '46%', '62%'],
    pt: [ '50px', '100px'],
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: ['52px', '72px'],
      textAlign: 'left',
    },
    p: {
      margin: [null, '50px 50px 50px 80px'],
      my: ['30px'],
      ml: [null, '50px', 8],
      fontSize: ['18px'],
      lineHeight: '30.6px'
    },
    button: {
      boxShadow: '0px 5px 0px 0px #7A64F9',
      mr: 0,
    },
  },
  containerSectionOne: {

    width: [null, null, null, '60%', '48%'],
    ml: [0, null, null, '25%', '22%'],
    mx: ['30px'],
  },
  boxButton: {
    marginRight: [null, '50px'],
    textAlign: ['center', 'center', 'right'],
  },
}