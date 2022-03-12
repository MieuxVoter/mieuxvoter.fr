import React from 'react';
import {Box, Text, Image, Flex, Link} from 'theme-ui';
import {BsArrowRight} from "react-icons/bs";
import VideoCarousel from '../components/video-carousel';
import Blog from '../components/blog';
import SectionFive from "../components/home-page/section-three";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import matter from 'gray-matter';
import {join} from 'path'
import {readFileSync} from 'fs'

export const getStaticProps = async ({locale}) => {
  const videoFile = join(process.cwd(), 'content/carousel-videos.yaml')
  const fileContents = readFileSync(videoFile, 'utf8')
  let {data: videos, isEmpty} = matter(fileContents);
  if (isEmpty) {videos = []}
  console.log(videos)

  return {
    props: {
      ...(await serverSideTranslations(locale, ["le-jugement-majoritaire", "homepage", "common"])),
      videos,
    },
  };
};


const LeJugementMajoritaire = (props) => {
  const {t} = useTranslation('le-jugement-majoritaire');

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
            <Image sx={styles.screenshot} src="/img/jugement-screen.png" alt="screenshot" />
          </Box>
        </Flex>
      </Box>

      <Box sx={styles.sectionTwo}>
        <Box sx={styles.containerTwo}>
          <VideoCarousel videos={props.videos} sx={styles.videoCarousel} />
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



            <Box sx={styles.sectionParagraph} >
              {/* <Image sx={styles.bookThumb} src="img/cover-majority-judgment.png" alt="" /> */}

              <Text as="h3">
                Majority Judgment
              </Text>
              <Text sx={styles.subtitle}>Measuring, Ranking and Electing<br /></Text>
              <Text sx={styles.author}>Michel Balinski and Rida Lariki</Text>

              <Text as="p">
                {t("texte4 jugement majoritaire")}
              </Text>

              <Link href="https://mitpress.mit.edu/books/majority-judgment" sx={styles.lien} ><Text>{t("lien livre jugement majoritaire")}</Text><BsArrowRight /></Link>
            </Box>
          </Flex>
        </Box>
      </Box>

      <SectionFive />
    </section>
  );
}
export default LeJugementMajoritaire
const styles = {
  sectionOne: {
    backgroundImage: 'url("img/background-chevron-big-blue.svg")',
    backgroundSize: ['0px', '1000px', '1000px', '140%', '130%', '160%', '150%'],
    backgroundPosition: [null, '-250px 456px', '-100px 404px', '-12em 41em', '-15em 28em', '-23em 5em', '72% 24%'],
    backgroundRepeat: 'no-repeat',
    px: ['30px', '30px', 'auto'],
    p: 9,
    py: 9,
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign: 'left',
      color: '#0A004C',
    },

    p: {
      my: 5,
      fontSize: '18px',
      lineHeight: '30.6px',
      color: '#0A004C',
    },
  },
  containerOne: {
    width: ['100%', '100%', null, '90%', '85%'],
    mx: 'auto',
    flexDirection: ['column', 'column', 'row'],
  },
  leftContainerOne: {
    width: ['100%', '100%', '100%', '80%', '65%'],
    mx: [null, null, 5],
  },
  rightContainerOne: {
    width: ['100%', '100%', '40%', '75%'],
    display: ['none', 'none', 'none', 'inline-block'],
    alignSelf: 'center',
    textAlign: ['right', 'right', 'right', 'right', 'right', 'center', 'center', 'center'],
  },
  screenshot: {
    width: ['20%', '20%', '20%', '70%', '60%', '50%', '40%', '20%'],
    // mt: [null, null, '200px', '10rem', '700px' ],
    ml: '30px',
  },
  sectionTwo: {
    backgroundImage: 'url("/img/background-chevron-big-blue-contour.svg")',
    backgroundSize: ['1000px', '1000px', '1000px', '140%', '130%', '160%', '145%'],
    backgroundPosition: ['-300px 100px', '50% 700%', '-100px -390px', '-12em -550px', '-15em -48em', '-23em -67em', '62% 124%'],
    backgroundRepeat: 'repeat',
    backgroundColor: '#0A004C',

    py: [2, 2, 9],
  },
  containerTwo: {
    width: '100%',
    pr: ['5%', '5%', '5%', 0, 0],
    pl: ['5%', '5%', '5%', '5%', '10%'],
  },
  containerThree: {

    mx: 'auto',
  },
  sectionThree: {
    pt: 9,
    px: ['30px', '30px', 'auto'],
    h2: {
      fontSize: ['44px', '56px'],
      lineHeight: '1',
      textAlign: 'left',
    },
  },
  sectionTitle: {
    width: ['100%', '100%', '100%', '20%'],
    ml: [null, null, null, '5%', '10%'],
    lineHeight: '24px',
  },
  sectionFour: {
    pb: 9,
    h3: {
      lineHeight: '24px',
    },
  },
  containerFour: {
    width: [null, null, null, '90%', '80%'],
    mx: 'auto',
  },
  flexFour: {
    flexDirection: ['column', 'column', 'column', 'row'],
    lineHeight: '24px',
  },
  titleOuvrage: {
    width: ['95%', '100%', '100%', '25%'],
    mx: ['auto', 'auto', 'auto', 0],
    mr: [null, null, null, 5],
    h2: {
      textAlign: 'left',
      fontSize: '18px',
      fontFamily: 'DM sans serif!important',
      lineHeight: '24px',
    },
  },
  bookThumb: {
    mx: 'auto',
    my: [5, null],
    width: ['80%', '50%', '50%', '20%'],
    objectFit: 'contain',
    textAlign: 'center',
  },
  sectionParagraph: {
    width: [null, null, null, '80%', '40%'],
    mx: '30px',

    p: {
      color: '#0A004C',
      fontSize: '17px',
      my: 5,
      lineHeight: '28.9px',
      textAlign: 'left',
    },
    a: {
      fontSize: 1,
      color: '#2400FD',
      mt: 5,
      fontWeight: 'bold',
      textAlign: 'left',
    },
  },
  author: {
    fontSize: '16px',
    color: 'black',
    fontStyle: 'italic',
    mb: 5,
  },
  subtitle: {
    textAlign: 'left',
    color: '#8F88BA',
    fontSize: 1,
    lineHeight: '16px',

  },
}
