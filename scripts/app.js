const generateBtn = document.getElementById("generateBtn");
const restoreBtn = document.getElementById("restoreBtn");
const colorValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

// utility function to generate random index
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// const generateHexColor = () => {
//   let len = colorValues.length;
//   let hexColor = "";
//   for(let i = 0; i < 6; i++) {

//   }
// };

// events
// window.addEventListener("DOMContentLoaded", generateHexColor);