const terminalText = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "Git",
  "Docker",
];

let index = 0;
let subIndex = 0;
let currentText = "";
let isDeleting = false;

function terminalTyping() {
  const terminal = document.getElementById("terminal");

  if (index === terminalText.length) {
    index = 0;
  }

  if (!isDeleting && subIndex <= terminalText[index].length) {
    currentText = terminalText[index].substr(0, ++subIndex);
  } else if (isDeleting && subIndex > 0) {
    currentText = terminalText[index].substr(0, --subIndex);
  }

  terminal.textContent = currentText;

  const typingDelay = isDeleting ? 75 : 150;

  if (!isDeleting && subIndex === terminalText[index].length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1000);
  } else if (isDeleting && subIndex === 0) {
    setTimeout(() => {
      isDeleting = false;
      index++;
    }, 500);
  }

  setTimeout(terminalTyping, typingDelay);
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(terminalTyping, 1000);
});

// Matrix effect
const matrix = document.getElementById("matrix");
const ctx = matrix.getContext("2d");

matrix.width = window.innerWidth;
matrix.height = window.innerHeight;

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}|;:',<.>/?";

const fontSize = 16;
const columns = matrix.width / fontSize;

const drops = [];

for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, matrix.width, matrix.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px Roboto Mono";

  for (let i = 0; i < drops.length; i++) {
    const text = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > matrix.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

function matrixAnimation() {
  drawMatrix();
  requestAnimationFrame(matrixAnimation);
}

matrixAnimation();
