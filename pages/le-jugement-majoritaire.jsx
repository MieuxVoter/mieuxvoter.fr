/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Image, Flex, Link } from 'theme-ui';
import { BsArrowRight } from "react-icons/bs";
import VideoCarousel from '../components/video-carousel';
import Blog from '../components/blog';
import SectionFive from "../components/home-page/section-three";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["le-jugement-majoritaire", "homepage", "common"])),
  },
});

export default function LeJugementMajoritaire() {
  const { t } = useTranslation('le-jugement-majoritaire');

  return (

    <section sx={styles.jugement}>

      <Box sx={styles.sectionOne}>

        <Flex sx={styles.containerOne}>

          <Box sx={styles.leftContainerOne}>

            <Text as="h2">
              {t("titre1 jugement majoritaire")}
            </Text>

            <Text as="p">
              {t("texte1 jugement majoritaire")}
            </Text>

            <Text as="p">
              {t("texte2 jugement majoritaire")}
            </Text>

            <Text as="p">
              {t("texte3 jugement majoritaire")}
            </Text>

          </Box>

          <Box sx={styles.rightContainerOne}>
            <Image sx={styles.screenshot} src="img/jugement-screenshot.png" alt="screenshot" />
          </Box>
        </Flex>
      </Box>

      <Box sx={styles.sectionTwo}>
        <Box sx={styles.containerTwo}>
          <VideoCarousel sx={styles.videoCarousel} />
        </Box>
      </Box>

      <Box sx={styles.sectionThree}>
        <Box sx={styles.containerThree}>
          <Box sx={styles.sectionTitle} ><Text as="h2">{t("titre2 jugement majoritaire")}</Text></Box>
          <Blog />
        </Box>
      </Box>

      <Box sx={styles.sectionFour}>

        <Box sx={styles.containerFour}>

          <Flex sx={styles.flexFour}>

            <Box sx={styles.titleOuvrage} >
              <Text as="h2">
                {t("titre3 jugement majoritaire")}
              </Text>
            </Box>

            <Image sx={styles.bookThumb} src="img/cover-majority-judgment.png" alt="" />

            <Box sx={styles.sectionParagraph} >

              <Text as="p">
                {t("texte4 jugement majoritaire")}
              </Text>

              <Link href="" sx={styles.lien} ><Text>{t("lien livre jugement majoritaire")}</Text><BsArrowRight /></Link>
            </Box>
          </Flex>
        </Box>
      </Box>

      <SectionFive />
    </section>
  );
}

const styles = {
  sectionOne: {
    backgroundImage: 'url("img/background-chevron-big-blue.svg")',
    backgroundSize: ['0px', '1000px', '1000px', '140%', '130%', '160%', '150%'],
    backgroundPosition: [null, '-250px 150px', '-100px 150px', '-12em 0em', '-15em -3em', '-23em -20em', '60% 30%'],
    backgroundRepeat: 'no-repeat',
    px: ['30px', '30px', 'auto'],
    p: 9,
    py: 9,
    h2: {
      fontSize: [12, '3em', '3em', '3em', '4vw'],
      lineHeight: '1',
      textAlign: ['center', 'center', 'center', 'left'],
      color: 'text',
    },
    p: {
      my: 5,
      fontSize: ['1em', '1em', '1em', '1.5vw'],
      lineHeight: ['1.5', '1'],
      color: 'text',
    },
  },
  containerOne: {
    width: ['100%', '100%', null, '90%', '70%'],
    mx: 'auto',
    flexDirection: ['column', 'column', 'row'],
  },
  leftContainerOne: {
    width: ['100%', '100%', '60%', '90%'],
    mx: [null, null, 5],
  },
  rightContainerOne: {
    width: ['100%', '100%', '40%', '75%'],
    display: ['none', 'none', 'inline-block'],
  },
  screenshot: {
    width: '100%',
    my: 'auto',
  },
  sectionTwo: {
    backgroundImage: 'url("img/background-chevron-big-blue-contour.svg")',
    backgroundSize: ['1000px', '1000px', '1000px', '140%', '130%', '160%', '145%'],
    backgroundPosition: ['-300px 100px', '50% 700%', '-100px -390px', '-12em -550px', '-15em -48em', '-23em -67em', '62% 124%'],
    backgroundRepeat: 'repeat',
    backgroundColor: 'text',
    height: '600px',
    p: [2, 2, 9],
  },
  containerTwo: {
    width: ['90%', null, null, '90%', '90%'],
    mx: 'auto',
  },
  containerThree: {
    width: [null, null, null, '90%', '80%'],
    mx: 'auto',
  },
  sectionThree: {
    py: 9,
    h2: {
      fontSize: ['2em', '3em', '3em', '3em', '4vw'],
      lineHeight: '1',
      textAlign: ['center', 'center', 'center', 'left']
    },
  },
  sectionTitle: {
    width: ['100%', '100%', '100%', '20%'],
  },
  sectionFour: {
    py: 9,
  },
  containerFour: {
    width: [null, null, null, '90%', '80%'],
    mx: 'auto',
  },
  flexFour: {
    flexDirection: ['column', 'column', 'column', 'row'],
  },
  titleOuvrage: {
    width: ['95%', '100%', '100%', '25%'],
    mx: ['auto', 'auto', 'auto', 0],
    mr: [null, null, null, 5],
    h2: {
      textAlign: ['center', 'center', 'center', 'left', 'left'],
    },
  },
  bookThumb: {
    mr: [0, null, null, 5],
    mx: ['auto', 'auto', null, 0],
    my: [5, null],
    width: ['80%', '50%', '50%', '20%'],
    objectFit: 'contain',
  },
  sectionParagraph: {
    width: [null, null, null, '80%', '40%'],
    mx: '30px',
    p: {
      color: 'text',
      fontSize: 3,
      mb: 5,
    },
    a: {
      fontSize: 1,
      color: 'primary',
      mt: 5,
      fontWeight: 'bold',
    },
  },
}