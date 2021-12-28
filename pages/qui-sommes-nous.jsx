/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {Box, Text, Flex, Image} from 'theme-ui';
import Adherez from '../components/adherez'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["qui-sommes-nous", "common"])),
  },
});

const displayMember = (member) => {
  return (
    <Box sx={styles.teamCardColumn1}>

      <Box sx={styles.imgOverlayWrap}>
        <Image sx={styles.imgOverlayWrapImg} src={`img/${member.image}`} alt="" />
        <Image sx={styles.imgOverlayWrapSvg} src="img/overlay-shapes-picture.svg" alt="" />
      </Box>

      <Text as="h3">{member.name}</Text>
      { /* <Text as="p">{member.desc} </Text> */}
    </Box>
  )
}

export default function QuiSommeNous() {
  const {t} = useTranslation('qui-sommes-nous');

  const members = [
    {
      name: "Chloé Ridel",
      desc: t("member1 qui sommes nous"),
      image: "chloe-ridel.jpeg",
    },
    {
      name: "David Chavalarias",
      desc: t("member4 qui sommes nous"),
      image: "david-chavalarias.jpeg",
    },
    {
      name: "Rida Laraki",
      desc: t("member2 qui sommes nous"),
      image: "rida-laraki.jpeg",
    },
    {
      name: "Paloma Moritz",
      desc: t("member5 qui sommes nous"),
      image: "paloma-moritz.jpeg",
    },
    {
      name: "Pierre-Louis Guhur",
      desc: t("member3 qui sommes nous"),
      image: "pierrelouis-guhur.jpeg",
    },
    {
      name: "Marta Balinska",
      desc: t("member6 qui sommes nous"),
      image: "maria-balinska.jpeg",
    },
    {
      name: "Eric Brousseau",
      desc: t("member6 qui sommes nous"),
      image: "eric-brousseau.jpeg",
    },
    {
      name: "Thibauld Favre",
      desc: t("member6 qui sommes nous"),
      image: "thibauld-favre.jpeg",
    },
    {
      name: "Loic Blondiaux",
      desc: t("member6 qui sommes nous"),
      image: "loic-blondiaux.jpeg",
    },
  ]

  return (

    <section sx={styles.QuiSommeNous}>

      <Flex sx={styles.containerQuiSommeNous}>

        <Text sx={styles.titleQuiSommeNous} as="h2">
          {}
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

      <Text sx={styles.subtitle} as="h4">
        {t("bureau qui sommes nous")}
      </Text>

      <Flex sx={styles.box2QuiSommeNous}>

        <Flex sx={styles.teamCardColumnLeft}>
          {displayMember(members[0])}
          {displayMember(members[1])}
        </Flex>

        <Flex sx={styles.teamCardColumnMiddle}>
          {displayMember(members[2])}
          {displayMember(members[3])}
        </Flex>

        <Flex sx={styles.teamCardColumnRight}>
          {displayMember(members[4])}
        </Flex>


      </Flex>

      <Text sx={styles.subtitle} as="h4">
        {t("conseil qui sommes nous")}
      </Text>

      <Flex sx={styles.box2QuiSommeNous}>

        <Flex sx={styles.teamCardColumnLeft}>
          {displayMember(members[5])}
          {displayMember(members[1])}
          {displayMember(members[2])}
        </Flex>

        <Flex sx={styles.teamCardColumnMiddle}>
          {displayMember(members[6])}
          {displayMember(members[7])}
          {displayMember(members[8])}
        </Flex>

        <Flex sx={styles.teamCardColumnRight}>
          {displayMember(members[0])}
          {displayMember(members[3])}
          {displayMember(members[4])}
        </Flex>
      </Flex>

      <Adherez />

    </section >

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
    h4: {
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

