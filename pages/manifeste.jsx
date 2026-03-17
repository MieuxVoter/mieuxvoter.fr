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
          Manifeste – Pour une démocratie plus juste et plus expressive
        </Text>
        <Text sx={styles.tagline}>
          Pour un mode de scrutin plus représentatif de l'opinion des votant•es
        </Text>
      </Box>

      {/* Introduction */}
      <Box sx={styles.section}>
        <Text as="p">
          Parce que voter doit être plus qu'un choix binaire : nous ne voulons
          plus avoir à voter utile, blanc ou par défaut. Nous voulons mieux
          voter avec le jugement majoritaire.
        </Text>
        <Text as="p">
          Nos élections sont archaïques. Notre démocratie repose encore largement
          sur des méthodes de vote conçues il y a plusieurs siècles. Vote à choix
          unique, majorité simple, logique du "tout ou rien"... Ces systèmes ont
          structuré notre vie politique, mais ils ne permettent pas toujours
          d'exprimer la richesse et la nuance de nos opinions.
        </Text>
        <Text as="p">
          Avec l'aide des sciences sociales et des mathématiques, des chercheurs
          ont développé des méthodes plus nuancées, plus précises, plus justes et
          plus représentatives pour donner son opinion sur les enjeux collectifs.
        </Text>
        <Text as="h3" sx={styles.sectionTitle}>
          Chez Mieux Voter, nous pensons que :
        </Text>
        <ul sx={styles.bulletList}>
          <li>
            Chaque citoyen doit pouvoir exprimer son opinion jugement de manière
            nuancée.
          </li>
          <li>
            Un scrutin doit mesurer l'opinion collective avec fidélité, au plus
            proche de l'opinion des votant•es, et non simplement additionner des
            voix.
          </li>
          <li>
            Le vote ne doit pas contraindre à choisir "le moins pire", mais
            permettre d'évaluer réellement les options.
          </li>
        </ul>
        <Text as="p">
          Il est temps pour la démocratie de se perfectionner. La démocratie peut
          évoluer, s'améliorer, se perfectionner. Des outils nous le permettent
          aujourd'hui.
        </Text>
        <Text as="p">
          C'est pourquoi, chez Mieux Voter, nous portons le développement et la
          diffusion du Jugement Majoritaire : une méthode de vote qui permet à
          chaque électeur d'évaluer chaque option à l'aide d'une mention. Le
          résultat reflète ainsi la majorité des jugements, et non la seule
          répartition des préférences.
        </Text>
        <ul sx={styles.bulletList}>
          <li>
            Nous croyons qu'améliorer la manière de voter, c'est renforcer la
            confiance démocratique.
          </li>
          <li>
            Nous croyons qu'un meilleur outil peut transformer la qualité du
            débat public.
          </li>
          <li>
            Nous croyons qu'une démocratie plus expressive est une démocratie plus
            solide.
          </li>
        </ul>
        <Text as="h3" sx={styles.sectionTitle}>
          Rendre les élections aux électeurs
        </Text>
        <Text as="p">
          Nos élections sont archaïques et nos modes de scrutin mesurent mal
          l'opinion. Nous ne voulons plus avoir à voter utile, blanc ou par
          défaut. Cela contribue à un désintérêt massif des électeurs et
          électrices. Leur confiance en notre démocratie s'érode chaque jour un
          peu plus. Pourquoi vote-on comme il y a 200 ans ? En deux siècles, la
          science a pourtant fait des progrès considérables : des modes de
          scrutin plus démocratiques ont été élaborés pour mieux prendre en
          compte l'opinion des votant•es.
        </Text>

        <Text as="p">
          Chez Mieux Voter, nous souhaitons que nos opinions soient pleinement
          prises en compte, avec leurs nuances. Nous voulons révolutionner les
          élections grâce au jugement majoritaire.
        </Text>

        <Text as="p">
          Imaginé par deux directeurs de recherche du CNRS, Rida Laraki et Michel
          Balinski, le vote au jugement majoritaire est à ce jour la méthode de
          vote la plus fiable pour mesurer l'opinion, en mettant fin à ce qui
          empêche l'électeur•ice de s'exprimer avec nuance : le vote utile, le
          vote par défaut ou le vote blanc.
        </Text>

        <Text as="p">
          Par des actions de plaidoyer et des campagnes de mobilisation, Mieux
          Voter agit pour faire connaître le jugement majoritaire au plus grand
          nombre et accompagne les collectivités publiques, les entreprises, les
          associations, les collectifs et les particuliers dans son utilisation.
          Notre objectif est simple : mieux voter grâce au jugement majoritaire.
        </Text>
        <Text as="h3" sx={styles.sectionTitle}>
          Rejoindre le mouvement
        </Text>
        <Text as="p">
          S'engager chez Mieux Voter c'est agir concrètement pour la démocratie.
        </Text>
        <Text as="p" sx={styles.listIntro}>
          En rejoignant notre communauté, vous pourrez :
        </Text>
        <ul sx={styles.bulletList}>
          <li>Comprendre en détail le jugement majoritaire</li>
          <li>Participer à des formations en ligne</li>
          <li>Contribuer à des expérimentations et projets citoyens</li>
          <li>Soutenir la diffusion de pratiques démocratiques plus justes</li>
        </ul>
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
