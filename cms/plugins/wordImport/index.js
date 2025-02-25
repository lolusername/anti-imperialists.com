import {definePlugin} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import WordImportTool from './WordImportTool'

export const wordImportTool = definePlugin({
  name: 'word-import',
  tools: [
    {
      name: 'word-import',
      title: 'Import Word Doc',
      icon: DocumentIcon,
      component: WordImportTool
    }
  ]
}) 