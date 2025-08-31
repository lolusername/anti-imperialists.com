/**
 * Helper functions for handling the new flexible author system
 */

/**
 * Get the display name for a single author
 * @param {Object} author - The author object from the new schema
 * @returns {string} The author's display name
 */
export function getAuthorDisplayName(author) {
  if (!author) return ''
  
  if (author.authorType === 'memberBio' && author.memberBio?.name) {
    return author.memberBio.name
  } else if (author.name) {
    return author.name
  }
  
  return 'Unknown Author'
}

/**
 * Get the display name for multiple authors
 * @param {Object} primaryAuthor - The primary author object
 * @param {Array} additionalAuthors - Array of additional author objects
 * @returns {string} Formatted string of all author names
 */
export function getAllAuthorsDisplayNames(primaryAuthor, additionalAuthors = []) {
  const authors = []
  
  // Add primary author
  if (primaryAuthor) {
    const primaryName = getAuthorDisplayName(primaryAuthor)
    if (primaryName) {
      authors.push(primaryName)
    }
  }
  
  // Add additional authors
  if (additionalAuthors && additionalAuthors.length > 0) {
    additionalAuthors.forEach(author => {
      const name = getAuthorDisplayName(author)
      if (name) {
        authors.push(name)
      }
    })
  }
  
  if (authors.length === 0) return ''
  if (authors.length === 1) return authors[0]
  if (authors.length === 2) return authors.join(' and ')
  
  // For 3+ authors, use "Author1, Author2, and Author3" format
  const lastAuthor = authors.pop()
  return `${authors.join(', ')}, and ${lastAuthor}`
}

/**
 * Get author information for display (name, affiliation, role)
 * @param {Object} author - The author object
 * @returns {Object} Object with displayName, affiliation, and role
 */
export function getAuthorInfo(author) {
  if (!author) return { displayName: '', affiliation: '', role: '' }
  
  let displayName = ''
  let affiliation = ''
  let role = ''
  
  if (author.authorType === 'memberBio' && author.memberBio) {
    displayName = author.memberBio.name || ''
    // For memberBio authors, we could add bio info if needed
  } else if (author.name) {
    displayName = author.name
    affiliation = author.affiliation || ''
  }
  
  if (author.authorType === 'editorial') {
    role = author.editorialRole || ''
  }
  
  return { displayName, affiliation, role }
}

/**
 * Check if an author has a bio page
 * @param {Object} author - The author object
 * @returns {boolean} True if the author has a bio page
 */
export function hasAuthorBioPage(author) {
  return author?.authorType === 'memberBio' && author.memberBio?._id
}

/**
 * Get the bio page slug for an author (if they have one)
 * @param {Object} author - The author object
 * @returns {string|null} The bio page slug or null
 */
export function getAuthorBioSlug(author) {
  if (author?.authorType === 'memberBio' && author.memberBio?._id) {
    // We'll need to fetch the slug separately or include it in the query
    // For now, return the ID which can be used to construct the URL
    return author.memberBio._id
  }
  return null
}
