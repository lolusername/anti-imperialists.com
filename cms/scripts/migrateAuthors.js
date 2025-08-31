import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'opgd2bhj',
  dataset: 'production',
  apiVersion: '2024-05-23',
  useCdn: false,
  token: 'skIsaUIzonbzhkPHasfuWRAM1RYfQZmGs8uGEHg6UvzQIfDVNgCFn4PssF6th6sYDIGGzmgI6sgTk63LM3eQ6rL4nv1Xaw9SkWpekvX0pPaC6JrZmXENrhJ9RbjhLQdTitzaSL1U4Ll20Nn57TPeHt9GpyBjdjpkirov0atXdN847OmzWSKP'
})

async function migrateAuthors() {
  try {
    console.log('Fetching all blog posts with existing authors...')
    
    // Get all blog posts that have author references
    const blogs = await client.fetch(`
      *[_type == "blog" && defined(author) && author._type == "reference"]{
        _id,
        title,
        author->{
          _id,
          name,
          bio,
          image,
          email,
          website,
          affiliation
        }
      }
    `)
    
    console.log(`Found ${blogs.length} blog posts with author references to migrate`)
    
    // Migrate each blog post
    for (const blog of blogs) {
      console.log(`Migrating author for: ${blog.title}`)
      
      if (blog.author) {
        // Convert the existing author reference to the new flexible author structure
        const newAuthor = {
          authorType: 'memberBio',
          memberBio: {
            _type: 'reference',
            _ref: blog.author._id
          }
        }
        
        // Update the blog post with the new author structure
        await client.patch(blog._id)
          .set({
            author: newAuthor
          })
          .commit()
        
        console.log(`✓ Migrated author for: ${blog.title}`)
      }
    }
    
    console.log('Successfully migrated all authors!')
    console.log('Your existing author data is now preserved in the new flexible system.')
    
  } catch (error) {
    console.error('Error migrating authors:', error)
  }
}

// Run the migration
migrateAuthors()
