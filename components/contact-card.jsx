/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {Box, Text, Flex, Button, Input, Label, Textarea} from 'theme-ui';
import {BsArrowRight} from "react-icons/bs";
import {useTranslation} from "next-i18next";

export default function ContactCard() {
  const {t} = useTranslation('common');

  return (

    <form name='contact' action='/contact-success/' method='post' data-netlify="true">
      <Flex sx={styles.containerContact}>

        <Flex sx={styles.containerLeft}>

          <Text sx={styles.titleContact} as="h2">
            {t("titre formulaire de contact")}
          </Text>

          <Text sx={styles.box1Contact} as="p">
            {t("texte1 formulaire de contact")}
          </Text>

          <Text sx={styles.box1Contact} as="p">
            {t("texte2 formulaire de contact")}
          </Text>

        </Flex>

        <Box sx={styles.containerRight}>

          <Box as="form" onSubmit={(e) => e.preventDefault()}>

            <Flex sx={styles.nameForm}>

              <Label htmlFor="prenom" />
              <Input name="prenom" id="prenom" mb={3} placeholder={t("placeholder prénom formulaire de contact")} />

              <Label htmlFor="nom" />
              <Input name="nom" id="nom" mb={3} placeholder={t("placeholder nom formulaire de contact")} />

            </Flex>

            <Label htmlFor="email" />
            <Input type="email" name="email" id="email" mb={3} placeholder={t("placeholder email formulaire de contact")} />

            <Label htmlFor="message" />
            <Textarea name="message" id="message" rows={6} mb={3} placeholder={t("placeholder message formulaire de contact")} />

            <Box sx={styles.boxButton2}>
              <Button>{t("bouton formulaire de contact")}<BsArrowRight sx={styles.arrow} /></Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </form>
  );
}

const styles = {
  contact: {
    backgroundImage: [null, null, 'url("img/red-stripe-down-right.svg")'],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
    backgroundSize: '14%',
    px: '30px',

    p: {
      color: '#0A004C',
      my: ['30px'],
      fontSize: ['1em', '1em', '1em', '1.5vw'],
      width: '100%',
    },
  },
  containerLeft: {
    flexDirection: 'column',
    width: ['100%', '100%', '100%', '35%'],
    h2: {
      color: '#0A004C',
      fontSize: ['44px', '56px'],
      lineHeight: '1',
      textAlign: ['center', 'center', 'left'],
      width: '100%',
    },
    p: {
      color: '#0A004C',
      my: ['30px'],
      fontSize: '16px',
      width: '100%',
      textAlign: ['center', 'center', 'left'],
    },
  },
  containerRight: {
    width: ['100%', '100%', '100%', '60%'],
    alignSelf: 'end',
    label: {
      display: 'none',
    },
    '#prenom, #nom': {
      width: ['100%', '100%', '100%', '45%'],
    },
    input: {
      border: 'none',
      borderRadius: 0,
      boxShadow: '0px 2px 0px 0px #0A004C',
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: '#0A004C',
        fontSize: '1em',
        fontStyle: 'italic',
      },
    },
    textarea: {
      border: 'none',
      borderRadius: 0,
      boxShadow: '0px 2px 0px 0px #0A004C',
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: '#0A004C',
        fontSize: '1.1em',
        fontStyle: 'italic',
      },
    },
  },
  nameForm: {
    flexDirection: ['column', 'column', 'column', 'row'],
    justifyContent: 'space-between',
  },
  containerContact: {
    width: [null, null, null, null, '72%'],
    pt: '12.3%',
    pb: ['30%', '12.3%'],
    mx: 'auto',
    flexDirection: ['column', 'column', 'row'],
    justifyContent: 'space-between',
  },
  titleContact: {
    width: ['100%', '100%', '50%'],
  },
  box1Contact: {
    width: ['100%', '100%', '50%'],
  },
  boxButton2: {
    textAlign: ['center', 'center', 'center', 'right'],
    button: {
      backgroundColor: 'transparent',
      color: '#0A004C',
      border: 'solid 2px #0A004C',
      boxShadow: '0px 3px 0px 0px #0A004C',
      mr: 0,
    },
  },
  arrow: {
    verticalAlign: 'middle',
    fontSize: '2em',
    color: '#0A004C',
    ml: 5,
  },
}
