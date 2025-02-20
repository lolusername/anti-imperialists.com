import { client } from '$lib/sanity'

export async function load() {
  const blogs = await client.fetch(`
    *[_type == "blog"] {
      title,
      slug,
      mainImage,
      body,
      "author": author->name,
      publishedAt
    }
  `)

  // Safely extract preview text from the body and sort by author's last name
  const blogsWithPreviews = blogs.map(blog => {
    let preview = '';
    if (blog.body && Array.isArray(blog.body)) {
      // Look through all body blocks until we find non-empty text
      for (const block of blog.body) {
        if (block.children && Array.isArray(block.children)) {
          for (const child of block.children) {
            if (child.text && child.text.trim()) {
              preview = `${child.text.split(/\s+/).slice(0, 50).join(' ')}...`;
              break;
            }
          }
          if (preview) break; // Exit outer loop if we found text
        }
      }
    }
    return {
      ...blog,
      preview
    };
  }).sort((a, b) => {
    if (!a.author || !b.author) return 0;
    const lastNameA = a.author.split(' ')[1].toLowerCase();
    const lastNameB = b.author.split(' ')[1].toLowerCase();
    return lastNameA.localeCompare(lastNameB);
  });

  return {
    blogs: blogsWithPreviews
  }
} 