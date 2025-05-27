// BEGIN
const _Body_ = () => {
  const _body_ = document.body.innerHTML;
  const lines = _body_.split('\n');
  const paragraphs = lines.map(line => {
    const trimLine = line.trim();
    if (trimLine === '') {
      return ''; 
    }
    return `<p>${trimLine}</p>`;
  });
  document.body.innerHTML = paragraphs.join('');
};

_Body_(); 
// END