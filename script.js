const lines = [
  "Hello. I'm Anjali Juikar.",
  "I'm a Program Manager in Philips Healthcare.",
  "I enjoy building systems, exploring code , ideas and learning.",
  "I Love Music..."
];

const elements = [
  document.getElementById("line1"),
  document.getElementById("line2"),
  document.getElementById("line3"),
  document.getElementById("line4")
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex >= lines.length) return;

  if (charIndex < lines[lineIndex].length) {
    elements[lineIndex].textContent += lines[lineIndex][charIndex];
    charIndex++;
    setTimeout(typeLine, 50);
  } else {
    charIndex = 0;
    lineIndex++;
    setTimeout(typeLine, 400);
  }
}

typeLine();
