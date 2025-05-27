// BEGIN
export default extractData = (documentElement) => {
  const paragraphs = [];
  const body = documentElement.querySelector('body');

  if (body) {
    const allChildren = body.children;

    for (let i = 0; i < allChildren.length; i++) {
      const element = allChildren[i];
      if (element.tagName === 'P') {
        paragraphs.push(element.textContent.trim());
      }
    }
  }

  return paragraphs;
};

// END