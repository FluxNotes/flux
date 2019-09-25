// utils/supportsSticky
const supportsSticky = (() => {
    const node = document.createElement('div');
    node.style.position = 'sticky';
    return node.style.position === 'sticky';
})();

export default supportsSticky;