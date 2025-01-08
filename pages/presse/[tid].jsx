import {jsx} from 'theme-ui';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'));

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
  
export async function getStaticProps({ params }) {
    const matter = require('gray-matter');
    const {join} = require('path')
    const {readFileSync, cp} = require('fs')
    const mdFolder = join(process.cwd(), 'content/presse')
    const filePath = join(mdFolder, `${params.tid}.mdx`);
    const fileContent = readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent);
    const mdxSource = await serialize(content);

    return { props: { article: { ...data, mdxSource } } };
}

export default function PresseArticle({article}) {
  return (
    <section sx={styles.presse}>
      <h1>{article.title}</h1>
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
  }