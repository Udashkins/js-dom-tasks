import camelCase from 'lodash/camelCase';

// BEGIN
export default normalize = (document) => {
  const elements = document.body.getElementsByTagName('*');

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const classList_ = element.classList;

    const classNames = Array.from(classList_);

    classNames.forEach(className => {
      const camelCaseName = camelCase(className);
      if (camelCaseName !== className) {
        classList_.replace(className, camelCaseName);
      }
    });
  }
};
// END