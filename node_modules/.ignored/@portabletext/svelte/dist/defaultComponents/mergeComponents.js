export function mergeComponents(parent, overrides = {}) {
    return {
        ...parent,
        ...overrides,
        block: mergeDeeply(parent, overrides, 'block'),
        list: mergeDeeply(parent, overrides, 'list'),
        listItem: mergeDeeply(parent, overrides, 'listItem'),
        marks: mergeDeeply(parent, overrides, 'marks'),
        types: mergeDeeply(parent, overrides, 'types')
    };
}
/**
 * As some components can be single functions, we can't simply spread them as objects
 */
function mergeDeeply(parent, overrides, key) {
    const override = overrides[key];
    const parentVal = parent[key];
    if (typeof override === 'function') {
        return override;
    }
    if (override && typeof parentVal === 'function') {
        return override;
    }
    if (override) {
        return { ...parentVal, ...override };
    }
    return parentVal;
}
