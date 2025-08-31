import {defineType, defineField} from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'object',
  fields: [
    defineField({
      name: 'authorType',
      title: 'Author Type',
      type: 'string',
      options: {
        list: [
          {title: 'Member with Bio Page', value: 'memberBio'},
          {title: 'Standalone Author', value: 'standalone'},
          {title: 'Editorial Member Reference', value: 'editorial'}
        ]
      },
      initialValue: 'memberBio'
    }),
    defineField({
      name: 'memberBio',
      title: 'Member Bio Reference',
      type: 'reference',
      to: [{type: 'memberBio'}],
      hidden: ({parent}) => parent?.authorType !== 'memberBio'
    }),
    defineField({
      name: 'name',
      title: 'Author Name',
      type: 'string',
      hidden: ({parent}) => parent?.authorType === 'memberBio'
    }),
    defineField({
      name: 'affiliation',
      title: 'Affiliation',
      type: 'string',
      hidden: ({parent}) => parent?.authorType === 'memberBio'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      hidden: ({parent}) => parent?.authorType === 'memberBio'
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      hidden: ({parent}) => parent?.authorType === 'memberBio'
    }),
    defineField({
      name: 'editorialRole',
      title: 'Editorial Role',
      type: 'string',
      options: {
        list: [
          {title: 'Editor-in-Chief', value: 'editor-in-chief'},
          {title: 'Managing Editor', value: 'managing-editor'},
          {title: 'Associate Editor', value: 'associate-editor'},
          {title: 'Editorial Board Member', value: 'editorial-board'},
          {title: 'Guest Editor', value: 'guest-editor'},
          {title: 'Other', value: 'other'}
        ]
      },
      hidden: ({parent}) => parent?.authorType !== 'editorial'
    })
  ],
  preview: {
    select: {
      authorType: 'authorType',
      name: 'name',
      memberName: 'memberBio.name'
    },
    prepare(selection) {
      const {authorType, name, memberName} = selection

      if (authorType === 'memberBio' && memberName) {
        return {title: memberName, subtitle: 'Member with Bio Page'}
      } else if (name) {
        return {title: name, subtitle: `Standalone Author`}
      }

      return {title: 'Unknown Author', subtitle: 'No name specified'}
    }
  }
})
