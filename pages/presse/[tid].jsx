import {jsx, Box, Text} from 'theme-ui';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Plot = dynamic(import('react-plotly.js'), {
  ssr: false
})

export async function getStaticPaths() {
    const {join} = require('path')
    const mdFolder = join(process.cwd(), 'content/presse')

    const files = require('fs').readdirSync(mdFolder);
    const paths = files.map((filename) => ({
        params: { tid: filename.replace(/\.mdx$/, '') },
    }));
  
    // We'll pre-render only these paths at build time.
    return { paths, fallback: false };
  }
  
export async function getStaticProps({ locale, params }) {
    const { join } = require('path')
    const { readFileSync } = require('fs')
    const mdFolder = join(process.cwd(), 'content/presse')
    const filePath = join(mdFolder, `${params.tid}.mdx`);
    const fileContent = readFileSync(filePath, 'utf8')
    let mdxSource = await serialize(fileContent, {parseFrontmatter: true});
    const scope = {}
    
    if (mdxSource.frontmatter.assets) {

      Object.keys(mdxSource.frontmatter.assets).forEach(key => {
        const value = mdxSource.frontmatter.assets[key]
        const path = join(process.cwd(), 'content', 'assets', value.path)
        const fileContents = readFileSync(path, 'utf8')
        
        if (value.type == 'json') {
          scope[key] = JSON.parse(fileContents)
        } else if (value.type == 'txt') {
          scope[key] = fileContents
        } else {
          console.error('Unknown type')
        }
      })

      mdxSource = await serialize(fileContent, {parseFrontmatter: true, scope: scope})
    }

    return { props: { 
      ...(await serverSideTranslations(locale, ["presse", "common"])),
      article: { mdxSource, scope } } 
    };
}

export default function PresseArticle({article}) {
  useTranslation('presse');

  return (
    <section>
      <Box sx={styles.blog}>
        <h1>{article.mdxSource.frontmatter.title}</h1>
        <Text sx={styles.dateAndAuthor}>{article.mdxSource.frontmatter.date}, par {article.mdxSource.frontmatter.author}</Text>
        <Box sx={styles.post}>
          <MDXRemote {...article.mdxSource} components={{ Plot, img: (props) => <img {...props} style={{ maxWidth: '100%' }} /> }}/>
        </Box>
      </Box>
    </section>
  );
}

const styles = {
  blog: {
    pb: ['50px'],
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign: 'left',

    },
    flexDirection: 'column',
    margin: [0, '100px'],
    mb: 0,
    pl: ['5%', '5%', '5%', '7%'],
    pb: ['100px'],
  },
  post: {
    mt: '50px'
  },
    containerThree: {
      width: [null, null, null, '90%', '80%'],
      mx: 'auto',
    },
    sectionThree: {
      py: 9,
      h2: {
        fontSize: ['52px', '72px'],
        lineHeight: '1',
        textAlign: 'left',
        ml: ['10%', '15%', '5%'],
      },
    },
    sectionTitle: {
      width: ['100%', '100%', '100%', '20%'],
    },
    dateAndAuthor: {
      fontSize: 2,
      color: 'grey',
      fontStyle: 'italic',
      fontSize: '13px',
   },
  }