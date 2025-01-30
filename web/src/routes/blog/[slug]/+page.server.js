import { client } from '$lib/sanity'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  const { slug } = params
  
  const blog = await client.fetch(`
    *[_type == "blog" && slug.current == $slug][0]{
      title,
      "author": author->name,
      "authorBio": author->bio,
      "authorImage": author->image,
      mainImage,
      body[]{
        ...,
        markDefs[]{
          ...,
          _type == "footnote" => {
            ...
          }
        }
      },
      publishedAt
    }
  `, { slug })

  if (!blog) {
    throw error(404, 'Blog post not found')
  }

  return {
    blog
  }
} 