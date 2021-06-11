let bgColor = [
  '#e03131',
  '#d6336c',
  '#91a7ff',
  '#868e96',
  '#ffc9c9',
  '#e03131',
  '#4dabf7',
  '#1c7ed6',
  '#3bc9db',
  '#0c8599',
  '#63e6be',
  '#51cf66',
  '#d8f5a2',
  '#fcc419',
  '#ff922b',
];

function changeColor() {
  let bg = document.getElementById('main');
  let toggle = document.getElementById('click');

  let colorIndex = bgColor[Math.floor(Math.random() * 15)];

  toggle.addEventListener('click', function () {
    bg.style.backgroundColor = colorIndex;
    toggle.style.backgroundColor = colorIndex;
  });
}
