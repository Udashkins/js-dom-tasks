// BEGIN
export default prettify = (document) => {
  const divs = document.querySelectorAll('div');

  divs.forEach(div => {
    const childNodes = div.childNodes;

    childNodes.forEach(node => {
      if (node instanceof Text) {
        const textContent = node.textContent.trim();
        if (textContent !== "") {  
            const p = document.createElement('p');
            p.textContent = node.textContent; 
            node.replaceWith(p);
            }
        }
    });
  });
};

// END
