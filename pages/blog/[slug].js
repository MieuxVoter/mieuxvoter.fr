import dynamic from 'next/dynamic'
import {MDXRemote} from 'next-mdx-remote'
import {Box, Text} from 'theme-ui';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getAllPosts, getPostBySlug} from '../../lib/blog'

const Plot = dynamic(import('react-plotly.js'), {
  ssr: false
})

export async function getStaticProps({params, locale}) {
  return {
    props: {
      ...await getPostBySlug(params.slug, ['author', 'title', 'content']),
      ...(await serverSideTranslations(locale, ["faq", "common"])),
    }
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts(['author', 'title', 'date', 'slug'])
  const paths = {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
  return paths
}


export default function Post({content, author, title}) {
  return (
    <section sx={styles.blog}>
      <Box sx={styles.containerBlog}>
        <MDXRemote {...content} components={{Plot}} />
      </Box>
    </section>
  )
}

const styles = {
  blog: {
    pb: [0, 0, 10],
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign: 'left',

    },
  },
  containerBlog: {
    flexDirection: 'column',
    margin: '30px',
    mb: 0,
    pl: ['5%', '5%', '5%', '7%'],
  },
}
