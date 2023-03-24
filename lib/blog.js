import {join} from 'path'
import {serialize} from 'next-mdx-remote/serialize'
import {getPostBySlug as getPostBySlugMd, getAllPosts as getAllPostsMd} from './markdown.js'
import {getPostBySlug as getPostBySlugWp, getAllPosts as getAllPostsWp} from './wordpress.js'


export async function getPostBySlug(slug, fields = []) {
  const wpItem = await getPostBySlugWp(slug, fields)
  if (wpItem !== undefined) {
    return wpItem
  }

  const mdItem = await getPostBySlugMd(slug, fields)
  if (mdItem !== undefined) {
    return mdItem
  }

  throw 'Unknown slug!'
}


export async function getAllPosts(fields = []) {
  // const wpPosts = await getAllPostsWp(fields);
  const mdPosts = await getAllPostsMd(fields);
  // const posts = wpPosts.concat(mdPosts);
  const posts = mdPosts;
  return posts.sort((post1, post2) => (post1.date && post2.date && post1.date > post2.date ? -1 : 1))
}
