const generateBtn = document.getElementById("generateBtn");
const restoreBtn = document.getElementById("restoreBtn");
const colorValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let currentHex;

// utility function to generate random index
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// function to generate hex color
const generateHex = () => {
  currentHex = "#";
  let len = colorValues.length;

  for(let i = 0; i < 6; i++) {
    let randomIndex = getRandom(0, len - 1);
    let value = colorValues[randomIndex];

    currentHex += value;
  }
  console.log(currentHex)
};

// event listeners
window.addEventListener("DOMContentLoaded", generateHex);