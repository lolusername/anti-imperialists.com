export const photos = {
  name: 'photos',
  title: 'Photos',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare(selection) {
      return {
        media: selection.media
      }
    }
  }
} 