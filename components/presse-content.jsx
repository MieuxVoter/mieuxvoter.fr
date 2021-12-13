/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box } from 'theme-ui';
import PresseCard from './presse-card';
import { useTranslation } from "next-i18next";

const data = [
  {
    id: 1,
    thumb: 'img/press-thumb-1.svg',
    source: 'Libération',
    altText: 'Le déclic de la politique par et pour tous ?',
    title: 'Le déclic de la politique par et pour tous ?',
    author: 'Par Nicolas Massol',
    date: '— 1 janvier 2021 à 20:26',
    lien: '',
  },
  {
    id: 2,
    thumb: 'img/press-thumb-2.svg',
    source: 'Horizons Publics',
    altText: 'Réinventer notre démocratie avec le jugement majoritaire',
    title: 'Réinventer notre démocratie avec le jugement majoritaire',
    author: '',
    date: '— Le 15 septembre 2020',
    lien: '',
  },
  {
    id: 3,
    thumb: 'img/press-thumb-3.svg',
    source: 'Science et Avenir',
    altText: 'Le climat à l\'épreuve du jugement majoritaire',
    title: 'Le climat à l\'épreuve du jugement majoritaire',
    author: 'Par Arnaud Devillard',
    date: '—  04 juillet 2020 ',
    lien: '',
  },
  {
    id: 4,
    thumb: 'img/press-thumb-1.svg',
    source: 'Libération',
    altText: 'Le déclic de la politique par et pour tous ?',
    title: 'Le déclic de la politique par et pour tous ?',
    author: 'Par Nicolas Massol',
    date: '— 1 janvier 2021 à 20:26',
    lien: '',
  },
  {
    id: 5,
    thumb: 'img/press-thumb-2.svg',
    source: 'Horizons Publics',
    altText: 'Réinventer notre démocratie avec le jugement majoritaire',
    title: 'Réinventer notre démocratie avec le jugement majoritaire',
    author: '',
    date: '— Le 15 septembre 2020',
    lien: '',
  },
  {
    id: 6,
    thumb: 'img/press-thumb-3.svg',
    source: 'Science et Avenir',
    altText: 'Le climat à l\'épreuve du jugement majoritaire',
    title: 'Le climat à l\'épreuve du jugement majoritaire',
    author: 'Par Arnaud Devillard',
    date: '—  04 juillet 2020 ',
    lien: '',
  },
];

export default function PresseContent() {
  const { t } = useTranslation('presse');

  return (

    <Container sx={styles.blog}>

      <Box sx={styles.flexBlog}>

        <Grid sx={styles.grid}>

          {data.map((item) => (
            <PresseCard
              key={item.id}
              author={item.author}
              thumb={item.thumb}
              source={item.source}
              alt={item.altText}
              title={item.title}
              date={item.date}
              lien={item.lien}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

const styles = {
  blog: {
    maxWidth: '100%!important',
    px: '0!important',
    mx: 0,
    mt: 5,
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
};
