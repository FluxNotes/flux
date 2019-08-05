
export default function KeyboardShortcutsPlugin() {

    const onKeyDown = (e, data, state, editor) => {
        if (data.isCmd || data.isCtrl) {
            let style = '';
            if (data.key === 'b') {
                style = 'bold';
            }
            else if (data.key === 'i') {
                style = 'italic';
            }
            else if (data.key === 'u') {
                style= 'underlined';
            } else {
                return state;
            }
            return state.transform().toggleMark(style).apply();
        }
    };

    return {
        onKeyDown,
    };
}