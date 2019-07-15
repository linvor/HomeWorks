function recSearchTags(node, tag) {
  const tName = tag.toLowerCase();
  const res = [];

  function recSearchNodes(node) {
    while (node) {
      if (1 == node.nodeType && node.tagName.toLowerCase() == tName) {
        res.push(node);
      }
      recSearchNodes(node.firstChild);
      node = node.nextSibling;
    }
  }
  recSearchNodes(node);
  return res;
}

const elements = recSearchTags(document, "p");
console.log(elements.length);
