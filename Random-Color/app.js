document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("colorBox");
    const generateBtn = document.getElementById("generateBtn");
  
    // Function to generate a random color
    function generateRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
  
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
  
      return color;
    }
  
    // Function to set a new random color
    function setRandomColor() {
      const randomColor = generateRandomColor();
      colorBox.style.backgroundColor = randomColor;
      colorBox.textContent = randomColor;
    }
  
    // Set an initial random color
    setRandomColor();
  
    // Event listener for the "Generate Color" button
    generateBtn.addEventListener("click", setRandomColor);
  });
  