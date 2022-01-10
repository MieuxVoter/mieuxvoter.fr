/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Text, Flex, Box } from 'theme-ui';
import BlogCard from './blog-card';
import { useTranslation } from "next-i18next";

const dataFr = [
  {
    id: 1,
    altText: '“Le jugement majoritaire : une nouvelle théorie du vote”',
    title: '“Le jugement majoritaire : une nouvelle théorie du vote”',
    author: 'Rida Laraki et Michel Balinski,',
    support: 'Collège-de-France.fr',
    lien: '',
  },
  {
    id: 2,
    altText: '“Ne votez pas, jugez !“',
    title: '“Ne votez pas, jugez !“',
    author: 'Balinski M., R. Laraki,',
    support: 'PourlaScience.fr - 2012',
    lien: '',
  },
  {
    id: 3,
    altText: 'Réponse à des Critiques du Jugement Majoritaire',
    title: 'Réponse à des Critiques du Jugement Majoritaire',
    author: 'Michel Balinski,',
    support: 'Rapport du CREST - 2018',
    lien: '',
  },
];
const dataEn = [
  {
    id: 1,
    altText: 'Majority Judgment – Measuring, Ranking, and Electing',
    title: 'Majority Judgment – Measuring, Ranking, and Electing',
    author: 'Rida Laraki et Michel Balinski,',
    support: 'MIT Press - 2011',
    lien: '',
  },
  {
    id: 2,
    altText: 'A theory of measuring, electing, and ranking',
    title: 'A theory of measuring, electing, and ranking',
    author: 'Balinski M., R. Laraki,',
    support: 'pnas.org - 2007',
    lien: '',
  },
  {
    id: 3,
    altText: 'Compare voting systems to improve them',
    title: 'Compare voting systems to improve them',
    author: 'Madhavan et al.',
    support: 'Nature - 2017',
    lien: '',
  },
];
const dataCo = [
  {
    id: 1,
    altText: 'Réformons l’élection présidentielle !',
    title: 'Réformons l’élection présidentielle !',
    author: '',
    support: '07/11/2020',
    lien: '',
  },
  {
    id: 2,
    altText: 'Aux urnes, citoyens !? Pour une révolution électorale',
    title: 'Aux urnes, citoyens !? Pour une révolution électorale',
    author: '',
    support: '18/06/2020',
    lien: '',
  },
  {
    id: 3,
    altText: 'Une histoire du vote en France Les expériences médiévales Xe – XIVe siècle',
    title: 'Une histoire du vote en France Les expériences médiévales Xe – XIVe siècle',
    author: '',
    support: '24/03/2020',
    lien: '',
  },
  {
    id: 4,
    altText: 'Au-delà des « fake news » : à l\’ère numérique, nos démocraties doivent évoluer pour ne pas mourir',
    title: 'Au-delà des « fake news » : à l\’ère numérique, nos démocraties doivent évoluer pour ne pas mourir',
    author: '',
    support: '07/05/2019',
    lien: '',
  },
  {
    id: 5,
    altText: 'Le jugement majoritaire et la délibération : mieux discuter, pour mieux voter !',
    title: 'Le jugement majoritaire et la délibération : mieux discuter, pour mieux voter !',
    author: '',
    support: '09/04/2019',
    lien: '',
  },
];

export default function Blog() {
  const { t } = useTranslation('le-jugement-majoritaire');

  return (

    <Container sx={styles.blog}>

      <Flex sx={styles.flexBlog}>

        <Box sx={styles.rowBlog}>
          <Text as="h3">
            {t("titre1 blog")}
          </Text>
        </Box>

        <Grid sx={styles.grid}>

          {dataFr.map((item) => (
            <BlogCard
              key={item.id}
              author={item.author}
              alt={item.altText}
              title={item.title}
              support={item.support}
              lien={item.lien}
            />
          ))}

        </Grid>

      </Flex>

      <Flex sx={styles.flexBlog}>

        <Box sx={styles.rowBlog}>
          <Text as="h3">
            {t("titre2 blog")}
          </Text>
        </Box>

        <Grid sx={styles.grid}>

          {dataEn.map((item) => (
            <BlogCard
              key={item.id}
              author={item.author}
              alt={item.altText}
              title={item.title}
              support={item.support}
              lien={item.lien}
            />
          ))}

        </Grid>

      </Flex>

      <Flex sx={styles.flexBlog}>

        <Box sx={styles.rowBlog}>
          <Text as="h3">
            {t("titre3 blog")}
          </Text>

          <Text as="p">
            {t("texte blog")}
          </Text>

        </Box>

        <Grid sx={styles.grid}>

          {dataCo.map((item) => (
            <BlogCard
              key={item.id}
              author={item.author}
              alt={item.altText}
              title={item.title}
              support={item.support}
              lien={item.lien}
            />
          ))}
        </Grid>
      </Flex>
    </Container>
  );
}

const styles = {
  blog: {
    maxWidth: '100%!important',
    px: '0!important',
    mx: 0,
    mt: 5,
    h3: {
      lineHeight: '24px',
    },
  },
  flexBlog: {
    flexDirection: ['column', 'column', 'column', 'row'],
  },
  grid: {
    width: ['100%', '80%', '100%'],
    title: {
      textAlign: 'left',
    },
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '25px 30px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  rowBlog: {
    width: ['95%', '95%', '100%', '30%'],
    mr: [0, 10, 5],
    mx: ['auto', null],
    h3: {
      textAlign: 'left',
      color: '#0A004C',
      fontSize: '18px',
      pt: 5,
    },
    p: {
      textAlign: 'left',
      color: '#8F88BA',
      fontSize: 1,
      lineHeight: '16px',
    },
  },
};
