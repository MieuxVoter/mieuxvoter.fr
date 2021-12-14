/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Flex, Image } from 'theme-ui';
import Adherez from '../components/adherez'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["qui-sommes-nous", "common"])),
  },
});

export default function QuiSommeNous() {
  const { t } = useTranslation('qui-sommes-nous');

  return (

    <section sx={styles.QuiSommeNous}>

      <Flex sx={styles.containerQuiSommeNous}>

        <Text sx={styles.titleQuiSommeNous} as="h2">
          {t("titre qui sommes nous")}
        </Text>

        <Box sx={styles.box1QuiSommeNous}>
          <Text as="p">
            {t("texte1 qui sommes nous")}
          </Text>

          <Text as="p">
            {t("texte2 qui sommes nous")}
          </Text>

          <Text as="p">
            {t("texte3 qui sommes nous")}
          </Text>

        </Box>
      </Flex>

      <Text sx={styles.subtitle} as="h2">
        {t("bureau qui sommes nous")}
      </Text>

      <Flex sx={styles.box2QuiSommeNous}>

        <Flex sx={styles.teamCardColumnLeft}>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/chloe-ridel.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Chloé Ridel</Text>
            <Text as="p">
              {t("member1 qui sommes nous")}
            </Text>

          </Box>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/david-chavalarias.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">David Chavalarias</Text>
            <Text as="p">
              {t("member4 qui sommes nous")}
            </Text>

          </Box>

        </Flex>

        <Flex sx={styles.teamCardColumnMiddle}>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/rida-laraki.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Rida Laraki</Text>
            <Text as="p">
              {t("member2 qui sommes nous")}
            </Text>

          </Box>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/paloma-moritz.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Paloma Moritz</Text>
            <Text as="p">
              {t("member5 qui sommes nous")}
            </Text>

          </Box>

        </Flex>

        <Box sx={styles.teamCard} >

          <Box sx={styles.imgOverlayWrap}>
            <Image sx={styles.imgOverlayWrapImg} src="img/pierrelouis-guhur.png" alt="" />
            <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
          </Box>

          <Text as="h3">Pierre-Louis Guhur</Text>
          <Text as="p">
            {t("member3 qui sommes nous")}
          </Text>

        </Box>

      </Flex>

      <Text sx={styles.subtitle} as="h2">
        {t("conseil qui sommes nous")}
      </Text>

      <Flex sx={styles.box2QuiSommeNous}>

        <Flex sx={styles.teamCardColumnLeft}>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/marta-balinska.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Maria Balinska</Text>
            <Text as="p">
              {t("member6 qui sommes nous")}
            </Text>

          </Box>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/david-chavalarias.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">David Chavalarias</Text>
            <Text as="p">
              {t("member4 qui sommes nous")}
            </Text>

          </Box>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/rida-laraki.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Rida Laraki</Text>
            <Text as="p">
              {t("member2 qui sommes nous")}
            </Text>

          </Box>

        </Flex>

        <Flex sx={styles.teamCardColumnMiddle}>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/loic-blondiaux.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Loïc Blondiaux</Text>
            <Text as="p">
              {t("member7 qui sommes nous")}
            </Text>

          </Box>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/thibault-favre.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Thibault Favre</Text>
            <Text as="p">
              {t("member8 qui sommes nous")}
            </Text>

          </Box>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/paloma-moritz.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Paloma Moritz</Text>
            <Text as="p">
              {t("member5 qui sommes nous")}
            </Text>

          </Box>

        </Flex>

        <Flex sx={styles.teamCardColumnRight}>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/eric-brousseau.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Eric Brousseau</Text>
            <Text as="p">
              {t("member9 qui sommes nous")}
            </Text>

          </Box>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/pierrelouis-guhur.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Pierre-Louis Guhur</Text>
            <Text as="p">
              {t("member3 qui sommes nous")}
            </Text>

          </Box>

          <Box sx={styles.teamCardColumn1}>

            <Box sx={styles.imgOverlayWrap}>
              <Image sx={styles.imgOverlayWrapImg} src="img/chloe-ridel.png" alt="" />
              <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
            </Box>

            <Text as="h3">Chloé Ridel</Text>
            <Text as="p">
              {t("member1 qui sommes nous")}
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Adherez />

    </section>

  );
}

const styles = {
  QuiSommeNous: {
    pb: 10,
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign: 'left',
    },
    p: {
      my: [2, '30px'],
      fontSize: ['18px'],
    },
    h3: {
    fontSize: '32px',
    },
  },
  containerQuiSommeNous: {
    flexDirection: 'column',
    margin: '30px',
    mb: 0,
    width: [null, null, null, '80%'],
    mx: [null, null, null, 'auto'],
  },
  titleQuiSommeNous: {
    width: ['100%', '100%', '50%', '45%', '63%'],
  },
  box1QuiSommeNous: {
    width: ['100%', '100%', '50%', '60%'],
    mt: 6,
    alignSelf: 'end',
  },
  subtitle: {
    width: '80%',
    mx: 'auto',
    mt: 7,
  },
  box2QuiSommeNous: {
    justifyContent: 'space-evenly',
    backgroundImage: ['url("img/background-qui-sommes-nous-left.svg")', 'url("img/background-qui-sommes-nous-left.svg")', 'none'],
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    flexDirection: ['column', 'column', 'row'],
    py: 7,
  },
  teamCard: {
    width: ['85%', '85%', '20%'],
    mx: ['auto', 'auto', 0],
    ':nth-of-type(3)': {
      mt: [9, 9, '30%'],
    },
  },
  teamCardColumnLeft: {
    flexDirection: 'column',
    width: ['85%', '85%', '20%'],
    mx: ['auto', 'auto', 0],
    teamCard: {
      width: '100%',
    },
  },
  teamCardColumn1: {
    ':nth-of-type(1n)': {
      mt: 9,
    },
  },
  teamCardColumnMiddle: {
    flexDirection: 'column',
    mt: [9, 9, '15%'],
    width: ['85%', '85%', '20%'],
    mx: ['auto', 'auto', 0],
    teamCard: {
      width: '100%',
    },
  },
  teamCardColumnRight: {
    flexDirection: 'column',
    mt: [9, 9, '30%'],
    width: ['85%', '85%', '20%'],
    mx: ['auto', 'auto', 0],
    teamCard: {
      width: '100%',
    },
  },
  imgOverlayWrap: {
    position: 'relative',
    display: 'inline-block',
  },
  imgOverlayWrapImg: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    borderBottom: ['solid 8px #2400FD', 'solid 8px #2400FD', 'none'],
  },
  imgOverlayWrapSvg: {
    position: 'absolute',
    display: ['none', 'none', 'block'],
    bottom: '0',
    left: '0',
    width: '100%',
  },
}
