import {MDXRemote} from 'next-mdx-remote'
import {getAllPosts, getPostBySlug, mdxToComponent} from '../../lib/blog'

export async function getStaticProps({params}) {
  const post = await getPostBySlug(params.slug, ['author', 'title', 'content'])
  const content = await mdxToComponent(post.content || '')

  return {
    props: {
      ...post,
      content
    }
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  console.log(posts)
  return {
    paths: posts.map(post => {
      console.log(post)
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}


export default function Post({content, author, title}) {
  return (
    <div className="wrapper">
      <MDXRemote {...content} />
    </div>
  )
}
