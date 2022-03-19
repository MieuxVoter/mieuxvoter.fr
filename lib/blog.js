import {join} from 'path'
import {serialize} from 'next-mdx-remote/serialize'

const postsDirectory = join(process.cwd(), 'content', 'blog')

export function getPostSlugs() {
  const fs = require('fs')
  return fs.readdirSync(postsDirectory)
}


// const DynamicPlot = dynamic(import('react-plotly.js'), {
//   ssr: false
// })


export async function getPostBySlug(slug, fields = []) {
  const fs = require('fs')

  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // serialize the file content into an MDX component
  let content = await serialize(fileContents, {parseFrontmatter: true})

  // re-serialize with assets
  if (content.frontmatter.assets) {
    const scope = {}
    Object.keys(content.frontmatter.assets).forEach(key => {
      const value = content.frontmatter.assets[key]
      const path = join(process.cwd(), 'content', 'assets', value.path)
      const fileContents = fs.readFileSync(path, 'utf8')
      if (value.type == 'json') {
        scope[key] = JSON.parse(fileContents)
      } else if (value.type == 'txt') {
        scope[key] = fileContents
      } else {
        console.error('Unknown type')
      }
    })
    content = await serialize(fileContents, {parseFrontmatter: true, scope: scope})
  }

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (typeof content.frontmatter[field] !== 'undefined') {
      items[field] = content.frontmatter[field]
    }
  })

  return items
}

export async function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = await Promise.all(slugs.map(async (slug) => {
    const item = await getPostBySlug(slug, fields)
    return item
  }))
  // sort posts by date in descending order
  // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
