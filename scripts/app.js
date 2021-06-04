const generateBtn = document.getElementById("generateBtn");
const restoreBtn = document.getElementById("restoreBtn");
const colorValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let currentHex;
let previousHex;

// utility function to generate random index
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// function to generate hex color
const generateHex = () => {
  previousHex = currentHex;
  currentHex = "#";
  let len = colorValues.length;

  for(let i = 0; i < 6; i++) {
    let randomIndex = getRandom(0, len - 1);
    let value = colorValues[randomIndex];

    currentHex += value;
  }
  
  document.body.style.backgroundColor = currentHex;
};

// function to generate previous hex
const generatePreviousHex = () => {
  document.body.style.backgroundColor = previousHex;
};

// event listeners
window.addEventListener("DOMContentLoaded", generateHex);
generateBtn.addEventListener("click", generateHex);
restoreBtn.addEventListener("click", generatePreviousHex);