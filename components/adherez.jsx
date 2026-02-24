/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {Box, Text, Flex, Link} from 'theme-ui';
import Arrow from './arrow'
import {useTranslation} from "next-i18next";
import {ADHESION_URL} from "../services/constants";

export default function Adherez() {
  const {t} = useTranslation('common');

  return (

    <Box>
      <Flex sx={styles.boxAdherez}>

        <Text as="h3" >
          {t("titre adherez mieux voter")}
        </Text>

        <Link href={ADHESION_URL} target="_blank" sx={styles.adherezLink}>
          {t("titre adherez")}
          <Arrow />
        </Link>
      </Flex>
    </Box>
  );
}

const styles = {
  boxAdherez: {
    flexDirection: ['column', 'column', 'row'],
    width: ['100%', '100%', '80%', '80%'],
    backgroundImage: ['url("/img/background-adherez-banner-mobile-up.svg"), url("/img/background-adherez-banner-mobile-down.svg")', 'url("/img/background-adherez-banner-mobile-up.svg"), url("/img/background-adherez-banner-mobile-down.svg")', 'url("/img/background-adherez-banner.svg")'],
    backgroundPosition: ['top, bottom'],
    backgroundRepeat: 'no-repeat',
    backgroundSize: ['90%, cover', '100%', '100% 100%', '100% 100%', 'cover'],
    backgroundColor: '#0A004C',
    mx: 'auto',
    justifyContent: 'space-around',
    py: [10, 10, 7, 8],
    h3: {
      color: 'white',
      fontSize: 10,
      width: ['90%', '90%', '50%', '30%'],
      mx: ['auto'],
      textAlign: ['center', 'center', 'left'],
      lineHeight: '1',
      fontFamily: '"DM Serif Display", serif!important',
    },
  },
  adherezLink: {
    display: 'inline-block',
    width: ['50%', '50%', '30%', '25%'],
    mx: ['auto'],
    my: 'auto',
    mt: [7, 7, 'auto'],
    backgroundColor: '#0A004C',
    color: 'white',
    border: 'solid 2px white',
    boxShadow: '0px 3px 0px 0px white',
    mr: ['auto', 'auto'],
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '0',
    padding: '15px 30px',
    cursor: 'pointer',
    ':hover': { color: 'white' },
    ':active': { color: 'white' },
    ':visited': { color: 'white' },
  },
  arrow: {
    verticalAlign: 'middle',
    fontSize: '2em',
    color: '#FFFFFF',
    ml: 5,
  },
}
