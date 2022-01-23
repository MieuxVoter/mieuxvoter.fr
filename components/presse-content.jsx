/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box } from 'theme-ui';
import PresseCard from './presse-card';
import { useTranslation } from "next-i18next";

const data = [
  {
    id: 1,
    thumb: 'https://beymedias.brightspotcdn.com/dims4/default/e3d4b71/2147483647/strip/true/crop/6000x3129+0+328/resize/840x438!/format/webp/quality/90/?url=http%3A%2F%2Fl-opinion-brightspot.s3.amazonaws.com%2F5c%2Fb8%2F1d2c4604433a90b18576cd22d531%2Fchloe-ridel-dr.jpg',
    source: 'L\'opinon',
    altText: 'Présidentielle: ce sondage qui place Eric Zemmour dernier et Arnaud Montebourg troisième',
    title: 'Présidentielle: ce sondage qui place Eric Zemmour dernier et Arnaud Montebourg troisième',
    author: 'Par Matthieu Deprieck',
    date: '— 14 décembre 2021 à 17h45',
    lien: 'https://www.lopinion.fr/politique/presidentielle-ce-sondage-qui-place-eric-zemmour-dernier-et-arnaud-montebourg-troisieme',
  },
  {
    id: 2,
    thumb: 'https://img.20mn.fr/0gHcHuyNR9irX6fCGquMMCk/640x410_chloe-ridel-veut-reformer-maniere-voter-representation-plus-equilibree-opinions-brut.jpg',
    source: '20 minutes',
    altText: 'Chloé Ridel veut réformer le vote en France avec le jugement majoritaire',
    title: 'Chloé Ridel veut réformer le vote en France avec le jugement majoritaire',
    author: 'Brut',
    date: '— Le 16 décembre 2021',
    lien: 'https://www.20minutes.fr/politique/3199343-20211216-chloe-ridel-veut-reformer-vote-france-jugement-majoritaire',
  },
  {
    id: 3,
    thumb: 'https://institut-rousseau.fr/wp-content/uploads/2021/12/OW-image-1.png',
    source: 'Institut Rousseau',
    altText: 'Et si les élections présidentielles se jouaient au jugement majoritaire ?',
    title: 'Et si les élections présidentielles se jouaient au jugement majoritaire ?',
    author: '',
    date: '— Le 17 décembre 2021',
    lien: 'https://institut-rousseau.fr/et-si-les-elections-presidentielles-se-jouaient-au-jugement-majoritaire/',
  },
  {
    id: 4,
    thumb: 'https://usbeketrica.com/media/86349/download/jugementmaj1.jpeg',
    source: 'Usbek & Rica',
    altText: 'Le jugement majoritaire permettrait aux électeurs de s’exprimer dans la nuance',
    title: 'Le jugement majoritaire permettrait aux électeurs de s’exprimer dans la nuance',
    author: 'Par Pablo Maillé',
    date: '— Le 12 janvier 2022',
    lien: 'https://usbeketrica.com/fr/article/le-jugement-majoritaire-permettrait-aux-electeurs-de-s-exprimer-dans-la-nuance',
  },
  {
    id: 5,
    thumb: 'img/thumb-le-monde.jfif',
    source: 'Le monde',
    altText: 'Paris teste le vote au jugement majoritaire',
    title: 'Paris teste le vote au jugement majoritaire',
    author: 'Par Denis Cosnard',
    date: '— Le 06 septembre 2021',
    lien: 'https://www.lemonde.fr/politique/article/2021/09/06/paris-teste-le-vote-au-jugement-majoritaire_6093619_823448.html',
  },
  {
    id: 6,
    thumb: 'img/thumb-le-monde-2.jfif',
    source: 'Le monde',
    altText: 'Election présidentielle 2022 : choisir son président en donnant un avis à chaque candidat, une expérience démocratique',
    title: 'Election présidentielle 2022 : choisir son président en donnant un avis à chaque candidat, une expérience démocratique',
    author: 'Par Julien Lemaignen',
    date: '—  Le 13 janvier 2022',
    lien: 'https://www.lemonde.fr/politique/article/2022/01/13/election-presidentielle-2022-le-jugement-majoritaire-une-experience-democratique_6109332_823448.html',
  },
  {
    id: 7,
    thumb: 'img/press-thumb-1.svg',
    source: 'Libération',
    altText: 'Le déclic de la politique par et pour tous ?',
    title: 'Le déclic de la politique par et pour tous ?',
    author: 'Par Nicolas Massol',
    date: '— 1 janvier 2021 à 20:26',
    lien: 'https://www.liberation.fr/france/2021/01/01/le-declic-de-la-politique-par-et-pour-tous_1810158/',
  },
  {
    id: 8,
    thumb: 'img/press-thumb-2.svg',
    source: 'Horizons Publics',
    altText: 'Réinventer notre démocratie avec le jugement majoritaire',
    title: 'Réinventer notre démocratie avec le jugement majoritaire',
    author: '',
    date: '— Le 15 septembre 2020',
    lien: 'https://www.horizonspublics.fr/territoires/reinventer-notre-democratie-avec-le-jugement-majoritaire',
  },
  {
    id: 9,
    thumb: 'img/press-thumb-3.svg',
    source: 'Science et Avenir',
    altText: 'Le climat à l\'épreuve du jugement majoritaire',
    title: 'Le climat à l\'épreuve du jugement majoritaire',
    author: 'Par Arnaud Devillard',
    date: '— Le 04 juillet 2020 ',
    lien: 'https://www.sciencesetavenir.fr/high-tech/le-climat-a-l-epreuve-du-jugement-majoritaire_145719',
  },
  {
    id: 10,
    thumb: 'https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2020/07/voterpourleclimat2.jpg',
    source: 'Numerama',
    altText: 'Convention citoyenne pour le climat : vous pouvez donner votre avis sur les propositions',
    title: 'Convention citoyenne pour le climat : vous pouvez donner votre avis sur les propositions',
    author: 'Par Marcus Dupont-Besnard',
    date: '— Le 03 juillet 2020',
    lien: 'https://www.numerama.com/politique/634848-convention-citoyenne-pour-le-climat-vous-pouvez-donner-votre-avis-sur-les-propositions.html',
  },
  {
    id: 11,
    thumb: 'https://beymedias.brightspotcdn.com/dims4/default/e34b22d/2147483647/strip/true/crop/2678x1396+0+53/resize/840x438!/format/webp/quality/90/?url=http%3A%2F%2Fl-opinion-brightspot.s3.amazonaws.com%2F3f%2F94%2Fb8412c0502db0ec88c161eaa2574%2Flouis-drounau-dr-web.jpg',
    source: 'L\'opinion',
    altText: 'Réforme constitutionnelle: revoir le mode d’élection pour renforcer notre démocratie',
    title: 'Réforme constitutionnelle: revoir le mode d’élection pour renforcer notre démocratie',
    author: 'Par Louis Drounau',
    date: '— Le 24 juin 2019',
    lien: 'https://www.lopinion.fr/politique/reforme-constitutionnelle-revoir-le-mode-delection-pour-renforcer-notre-democratie',
  },
  {
    id: 12,
    thumb: 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/04/619ef891-133d-4b89-a231-d406fc8b103f/838_000_1bm5og.webp',
    source: 'France culture',
    altText: 'Le jugement majoritaire au secours de la démocratie',
    title: 'Le jugement majoritaire au secours de la démocratie',
    author: 'Par Arjuna Andrade',
    date: '— Le 24 avril 2019',
    lien: 'https://www.franceculture.fr/emissions/les-nouvelles-de-leco/la-justice-annule-la-privatisation-de-laeroport-toulouse-blagnac',
  },
  {
    id: 13,
    thumb: 'https://aoc.media/wp-content/uploads/2018/08/logo-aoc-grand.png',
    source: 'AOC',
    altText: 'Réinventer le référendum',
    title: 'Réinventer le référendum',
    author: 'Par Chloé Ridel, Rida Laraki et Paloma Moritz',
    date: '— Le 15 avril 2019',
    lien: 'https://aoc.media/opinion/2019/04/15/reinventer-le-referendum/',
  },
  {
    id: 14,
    thumb: 'https://img.lemde.fr/2019/02/01/0/37/4488/2244/1024/512/75/0/db4e8d9_dSGh1sOd3MZ969Se8Xmzplw1.jpg',
    source: 'Le monde',
    altText: 'Mon idée pour la France : « Un “préférendum” plutôt qu’un référendum »',
    title: 'Mon idée pour la France : « Un “préférendum” plutôt qu’un référendum »',
    author: 'Par Collectif',
    date: '— Le 04 février 2019',
    lien: 'https://www.lemonde.fr/idees/article/2019/02/04/mon-idee-pour-la-france-un-preferendum-plutot-qu-un-referendum_5418771_3232.html',
  },
  {
    id: 15,
    thumb: 'https://www.liberation.fr/resizer/DYNep1hEeQf8pOP8DYq6dmJkQ1s=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/RYGNXSFGBXHCI7QI5TRELJSAYM.jpg',
    source: 'Libération',
    altText: 'Parcoursup : la solution n’est pas le retour au classement des vœux',
    title: 'Parcoursup : la solution n’est pas le retour au classement des vœux',
    author: 'Par Le collectif «Mieux voter»',
    date: '— Le 21 septembre 2018',
    lien: 'https://www.liberation.fr/debats/2018/09/21/parcoursup-la-solution-n-est-pas-le-retour-au-classement-des-voeux_1680299/',
  },
  {
    id: 16,
    thumb: 'https://aoc.media/wp-content/uploads/2018/08/logo-aoc-grand.png',
    source: 'AOC',
    altText: 'Pour un nouveau mode de scrutin : « le jugement majoritaire »',
    title: 'Pour un nouveau mode de scrutin : « le jugement majoritaire »',
    author: 'Par Chloé Ridel',
    date: '— Le 19 juillet 2018',
    lien: 'https://aoc.media/opinion/2018/07/19/nouveau-mode-de-scrutin-jugement-majoritaire/',
  },
  {
    id: 17,
    thumb: 'https://www.liberation.fr/resizer/Ifj0tuxewDA1yEdGlQMw6ljjPBU=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/EGMXMM2SVHLSNJWOHJHGU7IGYE.jpg',
    source: 'Libération',
    altText: 'L’urgence de mieux voter',
    title: 'L’urgence de mieux voter',
    author: 'Par Le collectif «Mieux voter»',
    date: '— Le 5 avril 2018',
    lien: 'https://www.liberation.fr/debats/2018/04/05/l-urgence-de-mieux-voter_1641029/',
  },
  {
    id: 18,
    thumb: 'https://cdn.radiofrance.fr/s3/cruiser-production/2017/04/a2b5d1cf-8509-4a27-a37e-ce7da15bca49/838_constant_forme-becherat_hans_lucas.webp',
    source: 'France Culture',
    altText: 'Si on votait autrement',
    title: 'Si on votait autrement',
    author: 'Par Catherine Petillon',
    date: '— Le 25 avril 2017',
    lien: 'https://www.franceculture.fr/politique/si-votait-autrement',
  },
  {
    id: 19,
    thumb: 'https://www.sciencesetavenir.fr/assets/img/2017/04/20/cover-r4x3w1000-58f8d5b869526-capture-d-e-cran-2017-04-20-a-17-20-20.png',
    source: 'Science et Avenir',
    altText: 'Elections : une expérience scientifique pour évaluer un nouveau mode de scrutin',
    title: 'Elections : une expérience scientifique pour évaluer un nouveau mode de scrutin',
    author: 'Par Stéphane Desmichelle',
    date: '— Le 20 avril 2017',
    lien: 'https://www.sciencesetavenir.fr/politique/elections-une-experience-pour-faire-progresser-la-science-du-vote_112339',
  },
  {
    id: 20,
    thumb: 'https://lelephant-larevue.fr/wp-content/uploads/2017/05/candidats-640x359.png',
    source: 'L\'éléphant',
    altText: ' Le jugement majoritaire est équilibré entre droite modérée, centre et gauche modérée',
    title: ' Le jugement majoritaire est équilibré entre droite modérée, centre et gauche modérée',
    author: 'Par David Louapre',
    date: '— janvier 2017',
    lien: 'https://lelephant-larevue.fr/thematiques/jugement-majoritaire/',
  },
  {
    id: 21,
    thumb: 'https://resize.marianne.net/r/770,462/img/var/LQ4101125C/505839/9297-100242214.jpg',
    source: 'Marianne',
    altText: 'Pour éviter un nouveau 21 avril, instaurons le "jugement majoritaire"',
    title: 'Pour éviter un nouveau 21 avril, instaurons le "jugement majoritaire"',
    author: 'Par Michel Balinski et Rida Laraki',
    date: '— Le 21 avril 2016',
    lien: 'https://www.marianne.net/agora/tribunes-libres/pour-eviter-un-nouveau-21-avril-instaurons-le-jugement-majoritaire',
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
