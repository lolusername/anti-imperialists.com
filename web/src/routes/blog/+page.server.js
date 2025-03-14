import { client } from '$lib/sanity'

export async function load() {
  try {
    const [volumes, editorialStatement, submissionInstructions] = await Promise.all([
      client.fetch(`
        *[_type == "volume"] | order(number asc) {
          _id,
          number,
          title,
          description,
          "posts": *[_type == "blog" && references(^._id)] {
            title,
            slug,
            "preview": body[0].children[0].text,
            "author": author->name,
            publishedAt
          } | order(publishedAt desc)
        }
      `),
      client.fetch(`*[_type == "editorialStatement"][0].content`),
      client.fetch(`*[_type == "submissionInstructions"][0].content`)
    ]);

    return {
      volumes,
      editorialStatement,
      submissionInstructions
    }
  } catch (err) {
    console.error('Error fetching data:', err);
    return {
      volumes: [],
      editorialStatement: null,
      submissionInstructions: null
    }
  }
} 