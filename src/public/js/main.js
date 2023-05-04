const init = () => {
  const body = document.querySelector('body');
  body.style.fontFamily = 'Verdana';
  const div = document.createElement('div');
  div.innerHTML = 'Hello Torrent!!!';
  body.appendChild(div);
  setInterval(() => updateColor(div), 500);
};

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
const updateColor = (element) => {
  const color = getRandomColor();
  element.style.color = getRandomColor();
};

init();
