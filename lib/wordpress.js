import {serialize} from 'next-mdx-remote/serialize'

export async function getAllPosts(fields = []) {
  const postsRes = await fetch(process.env.WORDRESS_API_ADDRESS + "/posts");
  const posts = await postsRes.json();
  const formatted = await Promise.all(posts.map(post => {
    const filtered = {}
    fields.forEach(async (field) => {
      if (field == 'author') {
        filtered[field] = 'Mieux Voter'
      }
      else if (field == 'title') {
        filtered[field] = post[field].rendered
      }
      else if (field == 'content') {
        const regex = /<object.*>.*<\/object>/gm;
        const content = post[field].rendered.replace('class=', 'className=').replace(regex, '')
        filtered[field] = await serialize(content)
      }
      else if (typeof post[field] !== 'undefined') {
        filtered[field] = post[field]
      }
    })
    return filtered;
  }));
  return formatted
}


export async function getPostBySlug(slug, fields = []) {
  const posts = await getAllPosts(fields.concat(['slug']));
  const postArray = posts.filter((post) => post.slug == slug);
  if (postArray.length == 1) {
    const post = postArray[0]
    const filtered = {}
    fields.forEach((field) => {
      if (typeof post[field] !== 'undefined') {
        filtered[field] = post[field]
      }
    })
    return filtered
  }
  else if (postArray.length > 1) {
    throw 'Could not uniquely find a post'
  }
  return undefined

}

