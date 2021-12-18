/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {Box, Text} from 'theme-ui';
import Adherez from '../components/adherez';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contact", "common"])),
  },
});


export default function Presse() {
  const {t} = useTranslation('contact');

  console.log(t)
  return (

    <section sx={styles.contact}>

      <Box sx={styles.sectionThree}>

        <Box sx={styles.containerThree}>

          <Box sx={styles.sectionTitle} >
            <Text as="h2">
              {t("titre success contact")}
            </Text>
          </Box>


        </Box>
      </Box>

      <Adherez />
    </section>
  );
}

const styles = {
  containerThree: {
    width: [null, null, null, '90%', '80%'],
    mx: 'auto',
  },
  sectionThree: {
    py: 9,
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign: 'left',
      ml: ['10%', '15%', '5%'],
    },
  },
  sectionTitle: {
    width: ['100%', '100%', '100%'],
  },
}
