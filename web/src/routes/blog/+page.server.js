import { client } from '$lib/sanity'

export async function load() {
  const blogs = await client.fetch(`
    *[_type == "blog"] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      body,
      "author": author->name,
      publishedAt
    }
  `)

  // Safely extract preview text from the body
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
  });

  return {
    blogs: blogsWithPreviews
  }
} 