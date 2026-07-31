/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import {jsx} from 'theme-ui';
import {Box, Text} from 'theme-ui';
import Link from 'next/link';
import Head from 'next/head';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["incident-2026-06", "common"])),
  },
});

export default function Incident() {
  const {t} = useTranslation('incident-2026-06');

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section sx={styles.incident}>

        <Box sx={styles.container}>

          <Text as="h2">
            {t("titre")}
          </Text>

          <Text as="p" sx={styles.date}>
            {t("date")}
          </Text>

          <Text as="h3" sx={styles.date}>
            {t("resume_titre")}
          </Text>

          <Text as="p">
            {t("resume_p1")}
          </Text>

          <Text as="p">
            {t("resume_p2")}
          </Text>

          <Text as="p">
            {t("resume_p3")}
          </Text>

          <Text as="h5" sx={styles.h5}>
            {t("resume_donnees_titre")}
          </Text>

          <ul sx={styles.ul}>
            <li>
              {t("resume_donnees_1")}
            </li>
            <li>
              {t("resume_donnees_2")}
            </li>
            <li>
              {t("resume_donnees_3")}
            </li>
          </ul>

          <Text as="p">
            {t("contact_p")} {' '}
            <Link href="/contact">{t("contact_link")}</Link>
          </Text>

          <Text as="p">
            {t("chaleureusement")}
          </Text>

          <Text as="p">
            {t("equipe")}
          </Text>

          <Text as="h3">
            {t("detail_titre")}
          </Text>

          <Text as="p">
            {t("detail_p1")}
          </Text>

          <Text as="h5" sx={styles.h5}>
            {t("detail_donnees_titre")}
          </Text>

          <ul sx={styles.ul}>
            <li>
              {t("detail_donnees_1")}
            </li>
            <li>
              {t("detail_donnees_2")}
            </li>
            <li>
              {t("detail_donnees_3")}
            </li>
          </ul>

          <Text as="h5" sx={styles.h5}>
            {t("verif_titre")}
          </Text>

          <ul sx={styles.ul}>
            <li>
              {t("verif_1")}
            </li>
            <li>
              {t("verif_2")}
            </li>
          </ul>

          <Text as="h5" sx={styles.h5}>
            {t("suite_titre")}
          </Text>

          <ul sx={styles.ul}>
            <li>
              {t("suite_1")}
            </li>
            <li>
              {t("suite_2")}
            </li>
            <li>
              {t("suite_3")}
            </li>
            <li>
              {t("suite_4")}
            </li>
          </ul>

          <Text as="p">
            {t("app_ok")}
          </Text>

          <Text as="h3">
            {t("savoir_titre")}
          </Text>

          <Text as="p">
            {t("savoir_p1")}
          </Text>

          <Text as="p">
            {t("savoir_p2")}{' '}
            <Link href="/contact">{t("savoir_link")}</Link>.
          </Text>

          <Text as="p">
            {t("excuses_p")}
          </Text>

          <Text as="p">
            {t("equipe")}
          </Text>

        </Box>

      </section>
    </>
  );
}

const styles = {
  incident: {
    pb: 10,
    h2: {
      fontSize: ['32px', '44px'],
      lineHeight: '1.1',
      textAlign: 'left',
    },
    h3: {
      fontSize: '28px',
      mt: 6,
      fontFamily: '"DM Serif", serif',
    },
    p: {
      my: [2, '20px'],
      fontSize: ['18px'],
      lineHeight: '30.6px',
    },
  },
  container: {
    margin: '30px',
    mb: 0,
    width: [null, null, null, '80%'],
    mx: [null, null, null, 'auto'],
    pl: ['5%', '5%', '5%', '0'],
  },
  date: {
    fontStyle: 'italic',
    opacity: 0.7,
  },
  h5: {
    fontSize: '20px',
    mt: 5,
    fontFamily: '"DM Serif", sans-serif',
    fontWeight: 'bold',
  },
  ul: {
    fontSize: ['18px'],
    lineHeight: '30.6px',
    pl: '20px',
    fontFamily: '"DM Serif", sans-serif',
    li: {
      my: 2,
    },
  },
};