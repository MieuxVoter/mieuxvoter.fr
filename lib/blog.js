import fs from 'fs'
import {join} from 'path'
import {serialize} from 'next-mdx-remote/serialize'

const postsDirectory = join(process.cwd(), 'content', 'blog')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}


// const DynamicPlot = dynamic(import('react-plotly.js'), {
//   ssr: false
// })


export async function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const content = await serialize(fileContents, {parseFrontmatter: true})
  console.log('POST', content, content.frontmatter.title)
  const {compiledSource: data, frontmatter: meta} = content
  console.log(data, meta)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = data
    }
    if (typeof meta[field] !== 'undefined') {
      items[field] = meta[field]
    }
  })

  return items
}

export async function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = await slugs
    .map(async (slug) => await getPostBySlug(slug, fields))
  // sort posts by date in descending order
  // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  console.log(posts)
  return posts
}
