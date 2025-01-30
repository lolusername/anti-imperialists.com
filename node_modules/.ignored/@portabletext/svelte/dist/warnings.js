const getTemplate = (type, prop) => `Unknown ${type}, specify a component for it in the \`components${prop ? '.' : ''}${prop}\` prop`;
export const getWarningMessage = (type, nodeType) => {
    switch (nodeType) {
        case 'block':
            return getTemplate(`block type "${type}"`, 'types');
        case 'blockStyle':
            return getTemplate(`block style "${type}"`, 'block');
        case 'listItemStyle':
            return getTemplate(`list item style "${type}"`, 'listItem');
        case 'listStyle':
            return getTemplate(`list style "${type}"`, 'list');
        case 'mark':
            return getTemplate(`mark type "${type}"`, 'marks');
        default:
            return getTemplate('type');
    }
};
export function printWarning(message) {
    console.warn(message);
}
