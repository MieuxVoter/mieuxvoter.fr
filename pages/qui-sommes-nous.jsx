/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
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
    <Box sx={styles.teamCardTemplate} itemID={member.name}>

      <Box sx={styles.imgOverlayWrap}>
        <Image sx={styles.imgOverlayWrapImg} src={`/img/${member.image}`} alt="" />
      </Box>

      <Text as="h3">{member.name}</Text>
      { /* <Text as="p">{member.desc} </Text> */}
    </Box>
  )
}

export default function QuiSommesNous() {
  const {t} = useTranslation('qui-sommes-nous');
  const bureauMembers = [
    {
      name: "Coline Serra",
      image: "coline-serra.jpg",
    },
    {
      name: "Murielle Reinhardt",
      image: "murielle-reinhardt.png",
    },
    {
      name: "Théo Sabattié",
      image: "theo-sabattie.jpeg",
    },
    {
      name: "Victoria Mure-Ravaud",
      image: "victoria-mure-ravaud.jpeg",
    },
    {
      name: "Clémence Arnautou-Pagès",
      image: "clemence-arnautou-pages.jpeg",
    }
  ];

  const otherCAMembers = [
    {
      name: "Anne-Lise Bance",
      image: "anne-lise-bance.png",
    },
    {
      name: "David Chavalarias",
      image: "david-chavalarias.jpeg",
    },
    {
      name: "Rida Laraki",
      image: "rida-laraki.jpg",
    },
    {
      name: "Solenn Briodin",
      image: "solenn-briodin.jpeg",
    },
    {
      name: "Jessy Micout",
      image: "jessy-micout.jpg",
    },
    {
      name: "Maxime Ollivier",
      image: "maxime-ollivier.jpg",
    },
    {
      name: "Caroline Span",
      image: "caroline-span.jpeg",
    }
  ]

  return (

    <section sx={styles.QuiSommesNous}>

      <Flex sx={styles.containerQuiSommesNous}>
        <Box sx={styles.boxImg1QuiSommesNous}>
          <Image src="/img/mikhail-nilov-vote.jpg" alt="vote" />
        </Box>

        <Box sx={styles.box1QuiSommesNous}>
          <Text as="p">
            {t("texte1 qui sommes nous")}
            {' '}
            <a target="blank" rel="noopener" href="https://drive.google.com/file/d/16sTkssx3QnYNA4eyQOFmHoy3EgqUg8-n/view?usp=sharing">
              {t("telecharger statut")}
            </a>
          </Text>

          <Text as="p">
            {t("texte2 qui sommes nous")}
          </Text>

          <Text as="p">
            {t("texte3 qui sommes nous")}
          </Text>

        </Box>

        <Box sx={styles.boxImg2QuiSommesNous}>
          <Image src="/img/mikhail-nilov-vote.jpg" alt="vote" />
        </Box>
      </Flex>

      <Text sx={styles.subtitle} as="h4">
        {t("bureau qui sommes nous")}
      </Text>
      <Box sx={styles.box2QuiSommesNous}>
        <Flex sx={styles.teamCard}>
          {bureauMembers.map(member => displayMember(member))}
        </Flex>

        <Text sx={styles.subtitle} as="h4">
          {t("conseil qui sommes nous")}
        </Text>


        <Flex sx={styles.teamCard}>
          {otherCAMembers.map(member => displayMember(member))}
        </Flex>
      </Box>

      <Adherez />

    </section >

  );
}

const styles = {
  QuiSommesNous: {
    pb: 10,
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign: 'left',
    },
    p: {
      my: [2, '30px'],
      fontSize: ['18px'],
      lineHeight: '30.6px'
    },
    h3: {
      fontSize: '32px',
    },
    h4: {
      fontSize: '32px',
    },
  },
  containerQuiSommesNous: {
    margin: '30px',
    mb: 0,
    width: [null, null, null, '80%'],
    mx: [null, null, null, 'auto'],
    flexDirection: ['column', 'column', 'column', 'row'],
  },
  titleQuiSommesNous: {
    width: ['100%', '100%', '50%', '45%', '63%'],
  },
  boxImg1QuiSommesNous: {
    width: ['100%', '100%', '50%', '40%'],
    display: ['none', 'none', 'none', 'flex'],
    img: {
      width: '90%',
      objectFit: 'contain',
    }
  },
  boxImg2QuiSommesNous: {
    width: '100%',
    display: ['flex', 'flex', 'flex', 'none'],
    img: {
      width: '100%',
      objectFit: 'contain',
    }
  },
  box1QuiSommesNous: {
    width: ['100%', '100%', '50%', '60%'],
    margin: 'auto',
    alignSelf: 'end',
  },
  subtitle: {
    width: '80%',
    mx: 'auto',
    mt: 7,
  },
  box2QuiSommesNous: {
    backgroundImage: ['url("/img/background-qui-sommes-nous-left.svg")', 'url("/img/background-qui-sommes-nous-left.svg")', 'none'],
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    py: 7,

  },
  teamCard: {
    width: ['85%', '98%', '87%'],
    mx: 'auto',
    flexWrap: 'wrap',
  },
  teamCardTemplate: {
    width: ['100%', '45%', '25%', '25%', '17%'],
    mx: ['auto', '2.5%', '4%'],
    my: ['4%', '4%', null],
    h3: {
      lineHeight: ['20px', '25px'],
    }
  },
  imgOverlayWrap: {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    height: '80%',
  },
  imgOverlayWrapImg: {
    display: 'block',
    width: '100%',
    height: '100%',
    borderBottom: ['solid 8px #2400FD', 'none'],
    objectFit: 'cover'
  },
  imgOverlayWrapSvg: {
    position: 'absolute',
    display: ['none', 'block'],
    bottom: '0',
    left: '0',
    width: '100%',
  },
}

