export default function ContextPortalPlugin(opts) {

    const onKeyDown = (...args) => {
        const completionComponent = opts.getCompletionComponent();
        if (completionComponent && completionComponent.onKeyDown) {
            return completionComponent.onKeyDown(...args);
        }
    };

    const onChange = (state, editor) => {
        // Step one: If we're at the beginning of a line, see if the previous node is a shortcut
        const previousNode = (state.selection.focusOffset === 0) ? state.document.getPreviousSibling(state.selection.focusKey) : null;
        const previousNodeShortcut = previousNode ? previousNode.data.get('shortcut') : null;
        // IF we're right next to a shortcut, that shortcut has a completion component and is incomplete, then let's open that completionComponent
        if (previousNodeShortcut && previousNodeShortcut.completionComponent) {
            // But only if the portal isn't already open
            if (!opts.getCompletionComponent()) {
                opts.openPortal(previousNodeShortcut);
            }
        } else if (opts.getCompletionComponent()) {
            // Else, we should close any portals that were open previously that shouldn't now be open
            opts.closePortal();
        }
    };

    return {
        onChange,
        onKeyDown,
    };
}