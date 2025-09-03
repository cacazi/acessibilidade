// script.js

// Aumentar tamanho da fonte
document.getElementById('font-increase').addEventListener('click', function() {
  let currentFontSize = window.getComputedStyle(document.body).fontSize;
  currentFontSize = parseFloat(currentFontSize);
  document.body.style.fontSize = (currentFontSize + 2) + 'px';
});

// Diminuir tamanho da fonte
document.getElementById('font-decrease').addEventListener('click', function() {
  let currentFontSize = window.getComputedStyle(document.body).fontSize;
  currentFontSize = parseFloat(currentFontSize);
  document.body.style.fontSize = (currentFontSize - 2) + 'px';
});

// Alternar cor da fonte
document.getElementById('font-color-toggle').addEventListener('click', function() {
  let currentColor = window.getComputedStyle(document.body).color;
  if (currentColor === 'rgb(51, 51, 51)') { // Cor padrão (escura)
    document.body.style.color = '#FFF'; // Cor clara
  } else {
    document.body.style.color = '#333'; // Cor escura
  }
});

// Alternar contraste (modo claro/escuro)
document.getElementById('contraste-toggle').addEventListener('click', function() {
  document.body.classList.toggle('contraste');
});
