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

