/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Container, Grid, Box} from 'theme-ui';
import PresseCard from './presse-card';
import {useTranslation} from "next-i18next";


export default function PresseContent({items}) {
  const {t} = useTranslation('presse');

  return (

    <Container sx={styles.blog}>

      <Box sx={styles.flexBlog}>

        <Grid sx={styles.grid}>

          {items.map((item, index) => (
            <PresseCard
              key={index}
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
