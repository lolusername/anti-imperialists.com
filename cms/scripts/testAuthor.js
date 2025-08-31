import { createClient } from '@sanity/client'

// Configure your Sanity client
const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'development',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // You'll need a token with write permissions
})

async function testAuthor() {
  try {
    console.log('Testing author structure...')
    
    // Test creating a standalone author
    const testAuthor = {
      _type: 'author',
      authorType: 'standalone',
      name: 'Test Author',
      affiliation: 'Test University',
      email: 'test@example.com'
    }
    
    console.log('Test author object:', JSON.stringify(testAuthor, null, 2))
    
    // Test creating a member bio author
    const memberBioAuthor = {
      _type: 'author',
      authorType: 'memberBio',
      memberBio: {
        _type: 'reference',
        _ref: 'test-member-bio-id'
      }
    }
    
    console.log('Member bio author object:', JSON.stringify(memberBioAuthor, null, 2))
    
    // Test creating an editorial author
    const editorialAuthor = {
      _type: 'author',
      authorType: 'editorial',
      name: 'Editorial Member',
      affiliation: 'Editorial Board',
      editorialRole: 'editor-in-chief'
    }
    
    console.log('Editorial author object:', JSON.stringify(editorialAuthor, null, 2))
    
    console.log('Author structure test completed successfully!')
    
  } catch (error) {
    console.error('Test failed:', error)
  }
}

// Run test if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testAuthor()
}

export { testAuthor }
