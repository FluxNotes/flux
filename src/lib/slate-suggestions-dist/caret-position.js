// Acquire from http://jsfiddle.net/gliheng/vbucs/12/
function position($node, offsetx, offsety) {
    offsetx = offsetx || 0;
    offsety = offsety || 0;

    let nodeLeft = 0;
    let nodeTop = 0;
    if ($node) {
        nodeLeft = $node.offsetLeft;
        nodeTop = $node.offsetTop;
    }

    const pos = { left: 0, top: 0 };

    if (document.selection) {
        const range = document.selection.createRange();
        pos.left = range.offsetLeft + offsetx - nodeLeft;
        pos.top = range.offsetTop + offsety - nodeTop;
    } else if (window.getSelection) {
        const native = window.getSelection();
        const range = native.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        pos.top = rect.top
            + offsety
            + nodeTop;

        pos.left = rect.left +
          offsetx +
          nodeLeft +
          rect.width / 2;
    }
    return pos;
};

export default position
