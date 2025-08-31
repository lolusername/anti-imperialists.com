import { createClient } from '@sanity/client'

// Configure your Sanity client
const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'development',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // You'll need a token with read permissions
})

async function checkExistingBlogs() {
  try {
    console.log('Checking existing blog posts...')
    
    // Fetch all blog posts
    const blogs = await client.fetch(`
      *[_type == "blog"]{
        _id,
        title,
        author,
        authorInfo,
        "authorType": author._type,
        "authorRef": author._ref,
        "authorInfoType": authorInfo._type
      }
    `)
    
    console.log(`Found ${blogs.length} blog posts:`)
    
    blogs.forEach((blog, index) => {
      console.log(`\n${index + 1}. ${blog.title}`)
      console.log(`   ID: ${blog._id}`)
      console.log(`   Old Author:`, blog.author)
      console.log(`   Old Author Type: ${blog.authorType}`)
      console.log(`   Old Author Ref: ${blog.authorRef}`)
      console.log(`   New Author Info:`, blog.authorInfo)
      console.log(`   New Author Info Type: ${blog.authorInfoType}`)
    })
    
    // Check if there are any with the old structure
    const oldStructureBlogs = blogs.filter(blog => blog.authorType === 'reference')
    if (oldStructureBlogs.length > 0) {
      console.log(`\n⚠️  Found ${oldStructureBlogs.length} blog posts with old author structure that need migration`)
    } else {
      console.log('\n✅ All blog posts have the new author structure')
    }
    
  } catch (error) {
    console.error('Check failed:', error)
  }
}

// Run check if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  checkExistingBlogs()
}

export { checkExistingBlogs }
