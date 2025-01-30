import { client } from '$lib/sanity'

export async function load() {
  const blogs = await client.fetch(`
    *[_type == "blog"] | order(publishedAt desc)[0...2]{
      title,
      slug,
      "preview": body[0].children[0].text,
      "author": author->name,
      publishedAt
    }
  `)

  return {
    blogs
  }
} 