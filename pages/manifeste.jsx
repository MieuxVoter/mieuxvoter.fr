/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Flex } from "theme-ui";
import React from "react";
import Adherez from "../components/adherez";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Manifeste() {
  return (
    <section sx={styles.manifeste}>
      {/* Header */}
      <Box sx={styles.header}>
        <Text as="h1" sx={styles.title}>
          Manifeste Mieux Voter
        </Text>
        <Text sx={styles.date}>Mars 2026</Text>
        <Text as="h2" sx={styles.subtitle}>
          Manifeste – Pour une révolution électorale
        </Text>
        <Text sx={styles.tagline}>
          Parce que voter ne devrait plus être un choix binaire
        </Text>
      </Box>

      {/* Introduction */}
      <Box sx={styles.section}>
        <Text as="p">
          Notre système de vote a 200 ans et nos élections sont devenues archaïques. Nos modes de scrutin permettent peu d’expression et mesurent mal l’opinion. Nous ne voulons plus avoir à voter utile, blanc ou par défaut.
        </Text>
        <Text as="p">
          <b>Au XXIe siècle, il est temps que nos élections évoluent.</b> 
La logique du “tout ou rien” a certes structuré notre vie politique mais elle ne permet pas d’exprimer la richesse et la nuance de nos opinions.
        </Text>
        <Text as="p">
          Avec l’aide des sciences sociales et des mathématiques, des chercheurs ont développé des méthodes plus nuancées, plus justes et plus représentatives pour donner son opinion.
        </Text>
        <Text as="h3" sx={styles.sectionTitle}>
          <b>Chez Mieux Voter, nous pensons que :</b>
        </Text>
        <ul sx={styles.bulletList}>
          <li>
            le vote ne doit pas contraindre à choisir “le moins pire”, mais permettre d’évaluer réellement toutes les options
          </li>
          <li>
            chaque citoyen doit pouvoir exprimer son opinion de manière nuancée
          </li>
          <li>
            un scrutin doit mesurer l’opinion collective avec fidélité, au plus proche de l’opinion des votant•es
          </li>
        </ul>
        <Text as="p">
          Il est temps pour notre démocratie de sortir de la binarité et de se mettre à jour. Des outils nous le permettent aujourd’hui.
        </Text>
        <Text as="p">
          Chez Mieux Voter, nous portons le développement et la diffusion du Jugement Majoritaire : une méthode de vote qui permet à chaque électeur d’évaluer chaque option à l’aide d’une mention. Le résultat reflète ainsi la majorité des jugements, et non la seule répartition des préférences. Nous soutenons également la diffusion de tous les autres modes de scrutins plurinominaux, permettant de s’exprimer sur l’ensemble des candidat·es et non un·e seul·e.
        </Text>
        <Text as="p">
          Nous croyons qu’améliorer la manière de voter, c’est renforcer la confiance démocratique.
        </Text>
        <Text as="p">
          Nous croyons qu’un meilleur système de vote peut transformer la qualité du débat public.
        </Text>
        <Text as="p">
          Nous croyons qu’une démocratie plus expressive est une démocratie plus solide.
        </Text>
        <Text as="p">
          Nous croyons que c’est un changement urgent en période de grande fatigue démocratique.
        </Text>
        <Text as="p">
          Rejoignez notre mouvement pour une révolution électorale.
        </Text>
        <Text as="p">
          En rejoignant notre communauté, vous pourrez :
        </Text>
        <ul sx={styles.bulletList}>
          <li>Découvrir les principes et le fonctionnement du Jugement Majoritaire</li>
          <li>Contribuer à des expérimentations et projets citoyens</li>
          <li>Soutenir des campagnes pour la mise en oeuvre locale et/ou nationale de modes de scrutins plus expressifs
</li>
        </ul>
        <Text as="p">
          Laissez votre adresse e-mail pour rester informé·e et participer aux prochaines actions.
        </Text>
        <Text as="p">
          Votre adresse ne sera utilisée que pour vous transmettre nos informations et invitations.
        </Text>
      </Box>

      {/* Newsletter */}
      <Adherez />
    </section>
  );
}

const styles = {
  manifeste: {
    px: ["30px", "30px", "60px"],
    py: [8, 10],
    color: "#0A004C",
    textAlign: "justify",
    h1: {
      fontSize: ["48px", "64px", "72px"],
      lineHeight: "1.2",
      fontWeight: 700,
      mb: 2,
    },
    h2: {
      fontSize: ["28px", "36px", "44px"],
      lineHeight: "1.3",
      fontWeight: 600,
    },
    h3: {
      fontSize: ["24px", "28px", "32px"],
      lineHeight: "1.3",
      fontWeight: 600,
      mt: 6,
      mb: 3,
    },
    p: {
      fontSize: ["16px", "18px"],
      lineHeight: "1.6",
      mb: 4,
      color: "#0A004C",
    },
    ul: {
      fontFamily: '"DM Sans", sans-serif',
      li: {
        fontSize: ["16px", "18px"],
        lineHeight: "1.6",
        mb: 2,
        color: "#0A004C",
        fontFamily: '"DM Sans", sans-serif',
      },
    },
  },
  header: {
    mb: 8,
    maxWidth: "900px",
    mx: "auto",
  },
  title: {},
  date: {
    fontSize: ["16px", "18px"],
    fontStyle: "italic",
    color: "#666",
    mb: 4,
  },
  subtitle: {
    fontSize: ["24px", "28px", "32px"],
    lineHeight: "1.4",
    fontWeight: 600,
    mb: 2,
  },
  tagline: {
    fontSize: ["16px", "18px"],
    color: "#666",
    fontWeight: 500,
    mb: 2,
  },
  section: {
    mb: 8,
    maxWidth: "900px",
    mx: "auto",
  },
  sectionTitle: {
    mt: 0,
  },
  bulletList: {
    paddingLeft: "24px",
    display: "inline-block",
    textAlign: "left",
    fontFamily: "inherit",
    li: {
      mb: 3,
      fontFamily: "inherit",
    },
  },
  listIntro: {
    fontWeight: 500,
    mb: 3,
  },
  ctaSection: {
    my: 10,
    maxWidth: "900px",
    mx: "auto",
    p: {
      mb: 3,
    },
  },
};
