import dynamic from 'next/dynamic'
import {MDXRemote} from 'next-mdx-remote'
import {Box, Text} from 'theme-ui';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getAllPosts, getPostBySlug} from '../../lib/blog'

const Plot = dynamic(import('react-plotly.js'), {
  ssr: false
})

export async function getStaticProps({params, locale}) {
  const post = await getPostBySlug(params.slug, ['author', 'title', 'content', 'date'])
  return {
    props: {
      ...post,
      ...await serverSideTranslations(locale, ["faq", "common"]),
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
  console.log('content', content)
  return (
    <section>
      <Box sx={styles.blog}>
        <h1>{title}</h1>
        <h5>Par  {author}</h5>

        <Box sx={styles.post}>
          <MDXRemote  {...content} components={{Plot}} />
        </Box>
      </Box>
    </section>
  )
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
  }
}
