/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Button, Flex, Image } from 'theme-ui';
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "next-i18next";
import ArrowBlue from '../arrowBlue';
import {
  useViewportScroll,
  motion,
  useTransform 
} from 'framer-motion';

export default function SectionTwo() {
  const { t } = useTranslation('homepage');
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1500], [-300, 200]);
  const y2 = useTransform(scrollY, [1500, 2500], [200, -200]);
  return (

    <section sx={styles.sectionTwo}>
<motion.div
          
            style={{ y }}
          >
      <Flex sx={styles.containerSectionTwo}>

        <Text sx={styles.titleSectionTwo} as="h2">
          {t("titre deuxième section")}
        </Text>

        <Text sx={styles.box1SectionTwo} as="p">
          {t("texte1 deuxième section")}
        </Text>

        <Text sx={styles.box2SectionTwo} as="p">
          {t("texte2 deuxième section")}
        </Text>

        <Image sx={styles.box3SectionTwo} src="img/graph1.svg" alt="" />

        <Text sx={styles.box4SectionTwo} as="p">
          {t("texte3 deuxième section")}
        </Text>

        <Image sx={styles.box5SectionTwo} src="img/graph2.svg" alt="" />

        <Box sx={styles.boxButton2}>
          <Button>{t("bouton deuxième section")}<ArrowBlue /></Button>
        </Box>
      </Flex>
      </motion.div>
    </section>
  );
}

const styles = {
  sectionTwo: {
    backgroundImage: 'url("img/chevron-stripe-blue.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: ['bottom', 'bottom'],
    backgroundSize: ['170%', '170%', '190%', '190%', 'cover'],
    mt: [null, '200px', '-100px'],
    pb: '300px',
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign:  'left',
    },
    p: {
      my: ['30px'],
      fontSize: ['16px'],
    },
    button: {
      backgroundColor: 'transparent',
     color: '#2400FD',
      border: 'solid 2px #2400FD',
      boxShadow: '0px 3px 0px 0px #2400FD',
      mr: 0,
    },
  },
  containerSectionTwo: {
    flexDirection: 'column',
    margin: '30px',
    mb: 0,
    width: [null, null, null, '80%', '76%'],
    ml: [null, null, null, '10%', '12%'],
  },
  titleSectionTwo: {
    width: ['100%', '100%', '60%', '65%', '45%'],
  },
  box1SectionTwo: {
    width: ['100%', '100%', '50%', '45%'],
    alignSelf: 'end',
  },
  box2SectionTwo: {
    width: ['100%', '100%', '50%', '45%'],
    ml: [null, null, '5%'],
  },
  box3SectionTwo: {
    width: ['100%', '100%', '70%', '65%'],
    alignSelf: 'end',
  },
  box4SectionTwo: {
    width: ['100%', '100%', '50%', '45%'],
    ml: [null, null, '5%'],
  },
  box5SectionTwo: {
    width: ['100%', '100%', '70%', '65%'],
    alignSelf: 'end',
  },
  boxButton2: {
    width: ['80%'],
    ml: [null, null, '5%'],
    mt: '65px',
  },
  arrow: {
    verticalAlign: 'middle',
    fontSize: '2em',
    ml: 5,
},
}