/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import {jsx} from 'theme-ui';
import {Box, Text} from 'theme-ui';
import Link from 'next/link';
import Head from 'next/head';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Incident() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section sx={styles.incident}>

        <Box sx={styles.container}>

          <Text as="h2">
            Attaque malveillante — ce qu’il s’est passé et comment nous avons réagi pour renforcer la sécurité de nos outils
          </Text>

          <Text as="p" sx={styles.date}>
            Publié le 15/07/2026
          </Text>

          <Text as="h3" sx={styles.date}>
            En résumé
          </Text>

          <Text as="p">
            Entre le 23 juin et le 7 juillet 2026, notre site et notre application de vote ont subi une attaque malveillante.
          </Text>

          <Text as="p">
            Notre équipe a réagi rapidement pour préserver la confidentialité des données et remettre en ligne nos outils, renforcer leur sécurité et protéger notre infrastructure.
          </Text>

          <Text as="p">
          Si vous n’avez eu aucun échange avec l’association ni organisé un vote sur l’application, aucune de vos données personnelles n’est concernée.
          </Text>

          <Text as="h5" sx={styles.h5}>
            Seules les données suivantes sont concernées :
          </Text>

          <ul sx={styles.ul}>
            <li>
              Des informations concernant quelques membres du conseil d’administration de l’association
            </li>
            <li>
              le contenu de nos boîtes mail associatives & drive
            </li>
            <li>
              les données des élections créées sur l’application (hors adresses emails car la version actuelle de l’application ne les stocke pas)
            </li>
          </ul>

          <Text as="p">
            Notre équipe reste à votre entière disposition pour répondre à d’éventuelles questions. {' '}
            <Link href="/contact">Nous contacter.</Link>
          </Text>

          <Text as="p">
            Chaleureusement,
          </Text>

          <Text as="p">
            L’équipe Mieux Voter
          </Text>

          <Text as="h3">
            En détails
          </Text>

          <Text as="p">
            Un tiers non autorisé a obtenu l’accès au compte d’hébergement de l’association, ce qui lui a permis de mettre temporairement hors ligne notre application et d’accéder à nos boîtes email associatives.
          </Text>

          <Text as="h5" sx={styles.h5}>
            Les données concernées sont les suivantes :
          </Text>

          <ul sx={styles.ul}>
            <li>
              Des informations relatives à quelques membres du conseil
              d’administration de l’association
            </li>
            <li>
              le contenu de nos boîtes mail associatives & drive
            </li>
            <li>
              Les données des élections créées sur l’application (hors mail, la
              version actuelle de l’application ne les stocke pas)
            </li>
          </ul>

          <Text as="h5" sx={styles.h5}>
            Nous avons pu vérifier les points suivants :
          </Text>

          <ul sx={styles.ul}>
            <li>
              L’outil d’envoi d’emails de l’application n’a enregistré aucune
              connexion pendant la période de l’attaque
            </li>
            <li>
              Le CRM enregistrant les informations des formulaires du site
              mieuxvoter.fr n’a enregistré aucune connexion pendant cette période
            </li>
          </ul>

          <Text as="h5" sx={styles.h5}>
            Suite à la découverte de l’incident, nous avons :
          </Text>

          <ul sx={styles.ul}>
            <li>
              Repris le contrôle de nos accès et sécurisé l’ensemble de notre
              infrastructure
            </li>
            <li>
              Déposé une plainte auprès des autorités
            </li>
            <li>
              Notifié la CNIL conformément au RGPD
            </li>
            <li>
              Renforcé nos mesures de sécurité pour éviter qu’une telle situation
              se reproduise
            </li>
          </ul>

          <Text as="p">
            L’application fonctionne de nouveau normalement.
          </Text>

          <Text as="h3">
            Ce que vous devez savoir
          </Text>

          <Text as="p">
            L’application Mieux Voter, dans sa version actuelle, ne collecte pas de
            données personnelles identifiantes sur ses utilisateurs — pas de
            compte, pas de mot de passe, pas d’adresse IP enregistrée. Les votes
            sont anonymes, aucune donnée personnelle liée à l’organisation d’un vote ne peut donc avoir été volée hormis l’intitulé et les options proposées au vote.
          </Text>

          <Text as="p">
            Si vous faites partie des contacts de l’association et que vous avez
            des questions, vous pouvez nous écrire via{' '}
            <Link href="/contact">le formulaire</Link>.
          </Text>

          <Text as="p">
            Nous nous excusons pour cette situation et restons disponibles pour
            toute question.
          </Text>

          <Text as="p">
            L’équipe Mieux Voter
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