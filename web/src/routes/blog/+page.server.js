import { client } from '$lib/sanity'

export async function load() {
  const blogs = await client.fetch(`
    *[_type == "blog"] {
      title,
      slug,
      "preview": body[0].children[0].text,
      "author": author->name,
      publishedAt
    } | order(coalesce(author, ''))
  `)

  // Sort by last name in JavaScript as fallback
  const sortedBlogs = blogs.sort((a, b) => {
    if (!a.author || !b.author) return 0;
    const lastNameA = a.author.split(' ')[1]?.toLowerCase() || a.author.toLowerCase();
    const lastNameB = b.author.split(' ')[1]?.toLowerCase() || b.author.toLowerCase();
    return lastNameA.localeCompare(lastNameB);
  });

  return {
    blogs: sortedBlogs
  }
} 