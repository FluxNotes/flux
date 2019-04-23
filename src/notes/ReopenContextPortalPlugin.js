function ReopenContextPortalPlugin(opts) {
    function onChange(state) {
        const previousNode = state.document.getPreviousSibling(state.selection.anchorKey);
        if (previousNode && previousNode.type === 'structured_field') {
            const previousNodeShortcut = previousNode.data.get('shortcut');
            if (!previousNodeShortcut.isComplete
                && state.selection.anchorOffset === 0
                && state.selection.isCollapsed
            ) {
                    let transform = state.transform();
                    transform = opts.openPortal(previousNodeShortcut, false, transform);
                    return transform.apply();
            }
        }
        const currentNode = state.document.getParent(state.selection.anchorKey);
        if (currentNode && currentNode.type === "structured_field") {
            let transform = state.transform().collapseToStartOfNextText();
            transform = opts.openPortal(currentNode.data.get('shortcut'), false, transform);
            return transform.apply();
        }
    }

    return {
        onChange
    };
}

export default ReopenContextPortalPlugin;