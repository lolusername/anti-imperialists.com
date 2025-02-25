import { AsteriskIcon } from '@sanity/icons'

export const structure = (S) =>
    S.list()
        .title('AISC Site')
        .items([
            // Points of Unity Singleton
            S.listItem()
                .title('Points of Unity')
                .id('pointsOfUnity')
                .icon(AsteriskIcon)
                .child(
                    S.editor()
                        .id('pointsOfUnity')
                        .schemaType('pointsOfUnity')
                        .documentId('pointsOfUnity')
                ),
            // Filter out pointsOfUnity from other document types
            ...S.documentTypeListItems().filter(
                (listItem) => !['pointsOfUnity'].includes(listItem.getId())
            )
        ])