import { client } from '$lib/sanity'

export async function load() {
  const blogs = await client.fetch(`
    *[_type == "blog" && featured == true ] | order(publishedAt desc) {
      title,
      slug,
      "preview": body[0].children[0].text,
      author{
        authorType,
        memberBio->{
          _id,
          name,
          bio,
          image
        },
        name,
        affiliation,
        email,
        website,
        editorialRole
      },
      additionalAuthors[]{
        authorType,
        memberBio->{
          _id,
          name,
          bio,
          image
        },
        name,
        affiliation,
        email,
        website,
        editorialRole
      },
      publishedAt
    }
  `)

  return {
    blogs
  }
} 