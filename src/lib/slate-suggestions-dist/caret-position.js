// Acquire from http://jsfiddle.net/gliheng/vbucs/12/
function position(domElement, offsetx, offsety) {
  offsetx = offsetx || 0
  offsety = offsety || 0

  const pos = { left: 0, top: 0 }
  const children = domElement.childNodes;

  for(const child of children) { 
      if (child.getBoundingClientRect && child.getAttribute("data-key")) { 
          const rect = child.getBoundingClientRect();
          pos.left = rect.left + rect.width + offsetx;
          pos.top = rect.top + offsety;
      }
  }
  return pos
};

export default position
