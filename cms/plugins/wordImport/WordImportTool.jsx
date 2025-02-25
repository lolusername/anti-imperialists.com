import React, {useCallback, useState} from 'react'
import {Card, Stack, Text, Button, Container, Box} from '@sanity/ui'
import {useClient} from 'sanity'
import {useRouter} from 'sanity/router'
import mammoth from 'mammoth'
import {nanoid} from 'nanoid'

const uploadImageBuffer = async (arrayBuffer, filename, client) => {
  const blob = new Blob([arrayBuffer], { type: 'image/png' })
  const imageFile = new File([blob], filename, { type: 'image/png' })
  return client.assets.upload('image', imageFile)
}

export default function WordImportTool() {
  const [isLoading, setIsLoading] = useState(false)
  const client = useClient()
  const router = useRouter()

  const handleFileUpload = useCallback(async (event) => {
    const file = event.target.files[0]
    if (!file) return

    setIsLoading(true)
    try {
      const arrayBuffer = await file.arrayBuffer()
      
      const result = await mammoth.convertToHtml({
        arrayBuffer: arrayBuffer,
        styleMap: [
          "p[style-name='Normal'] => p",
          "p[style-name='Body Text'] => p",
          "p[style-name='Heading 1'] => h1",
          "p[style-name='Heading 2'] => h2",
          "p[style-name='Heading 3'] => h3"
        ],
        ignoreEmptyParagraphs: false,
        includeDefaultStyleMap: true,
        convertFootnotes: "extract"
      })

      // Convert main content to blocks
      const blocks = []
      const parser = new DOMParser()
      const doc = parser.parseFromString(result.value, 'text/html')

      // Process main content with footnote references
      const elements = Array.from(doc.body.children)
      for (const element of elements) {
        // Skip truly empty elements (no text content at all)
        if (!element.textContent) continue

        // Log element details for debugging
        console.log('Element type:', element.tagName.toLowerCase())
        console.log('Element classes:', element.className)
        console.log('Element content:', element.textContent)
        console.log('------------------------')

        // Determine the style based on element type
        let style = 'normal'
        switch (element.tagName.toLowerCase()) {
          case 'h1': style = 'h1'; break
          case 'h2': style = 'h2'; break
          case 'h3': style = 'h3'; break
          case 'p': style = 'normal'; break
          case 'ol': {
            // Split footnotes into separate blocks
            const footnotes = element.textContent.split('↑').filter(Boolean)
            footnotes.forEach((footnote, index) => {
              const footnoteText = footnote.trim()
              if (footnoteText) {
                blocks.push({
                  _type: 'block',
                  _key: nanoid(),
                  style: 'normal',
                  children: [{
                    _type: 'span',
                    _key: nanoid(),
                    text: `[${index + 1}] ${footnoteText}`
                  }]
                })
              }
              console.log(blocks)
            })
            continue // Skip the rest of the loop for footnotes
          }
        }

        // Only process non-footnote content
        if (element.tagName.toLowerCase() !== 'ol') {
          // Process text content
          const text = element.textContent.trim()
          const children = []
          let currentText = text

          // Add remaining text if any
          if (currentText) {
            children.push({
              _type: 'span',
              _key: nanoid(),
              text: currentText
            })
          }

          // Create block with processed children
          if (children.length > 0 || text) {
            blocks.push({
              _type: 'block',
              _key: nanoid(),
              style: style,
              children: children.length > 0 ? children : [{
                _type: 'span',
                _key: nanoid(),
                text: text
              }]
            })
          }
        }
      }

      // Generate the slug
      const slug = file.name.replace(/\.[^/.]+$/, '').toLowerCase().replace(/\s+/g, '-')
      
      // Check if a document with this slug already exists
      const existingDoc = await client.fetch(
        `*[_type == "blog" && slug.current == $slug][0]`,
        { slug }
      )

      let docId
      if (existingDoc) {
        // Update existing document
        docId = existingDoc._id
        await client
          .patch(docId)
          .set({
            title: file.name.replace(/\.[^/.]+$/, ''),
            body: blocks
          })
          .commit()
      } else {
        // Create new document
        docId = `imported-${nanoid()}`
        await client.create({
          _type: 'blog',
          _id: docId,
          title: file.name.replace(/\.[^/.]+$/, ''),
          slug: {
            _type: 'slug',
            current: slug
          },
          body: blocks
        })
      }
      console.log(blocks)
      
      // Navigate to the document using the correct path format
      router.navigateIntent('edit', {
        type: 'blog',
        id: docId
      })
      
    } catch (error) {
      console.error('Error importing document:', error)
      alert('Error importing document. Check console for details.')
    } finally {
      setIsLoading(false)
    }
  }, [client, router])

  return (
    <Container>
      <Box padding={4}>
        <Card padding={4} radius={2} shadow={1}>
          <Stack space={4}>
            <Text size={2} weight="bold">Import Word Document</Text>
            <Text>Upload a Word document (.doc, .docx) to create a new blog post.</Text>
            <input
              type="file"
              accept=".doc,.docx"
              onChange={handleFileUpload}
              disabled={isLoading}
            />
            {isLoading && <Text>Importing document and uploading images...</Text>}
          </Stack>
        </Card>
      </Box>
    </Container>
  )
} 