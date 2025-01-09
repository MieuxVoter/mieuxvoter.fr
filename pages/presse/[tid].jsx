import {jsx, Text} from 'theme-ui';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

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
    const matter = require('gray-matter');
    const {join} = require('path')
    const {readFileSync, cp} = require('fs')
    const mdFolder = join(process.cwd(), 'content/presse')
    const filePath = join(mdFolder, `${params.tid}.mdx`);
    const fileContent = readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent);
    const mdxSource = await serialize(content);

    return { props: { 
      ...(await serverSideTranslations(locale, ["presse", "common"])),
      article: { ...data, mdxSource } } 
    };
}

export default function PresseArticle({article}) {
  useTranslation('presse');
  return (
    <section sx={styles.presse}>
      <h1>{article.title}</h1>
      <Text sx={styles.dateAndAuthor}>{article.date}, par {article.author}</Text>
      <MDXRemote {...article.mdxSource} components={{ Plot }}/>
    </section>
  );
}

const styles = {
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