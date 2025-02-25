import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const memberBio = defineType({
  name: 'memberBio',
  title: 'Member Bio',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageBlock',
    }),
    defineField({
      name: 'affiliation',
      title: 'Affiliation',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})