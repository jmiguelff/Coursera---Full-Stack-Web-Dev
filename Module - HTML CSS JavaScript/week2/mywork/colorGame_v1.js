var colors = ["black","blue","orange","yellow","cyan","red","green","aqua"];
var colorsAlphabetical = new Array(colors.length);
var targetIndex;
var targetColor;
var playerColor;
var playerIndex;
var finished = false;
var nGuesses = 0;

function runGame() {
  // Sort colors Array
  colorsAlphabetical = colors.sort();
  // Calculate the target answer
  targetIndex = Math.random() * colorsAlphabetical.length;
  targetIndex = Math.floor(targetIndex);
  targetColor = colorsAlphabetical[targetIndex];

  // Debug window
  alert("Result is: " + targetColor);

  // Guessing cycle
  while(!finished) {
    // Get color from player
    playerColor = prompt("I am thinking of a color!\n"+
                        "Guess the color from the folowing:\n\n" +
                        colorsAlphabetical.valueOf());
    nGuesses++; // Increment number of guesses
    playerIndex = getPlayerColorIndex(playerColor);
    finished = isPlayerCorrect(); // Process the guess
  }
}

function getPlayerColorIndex(inputColor) {
  // Find the index of the color inserted by the player
  var element = 0;
  for(element = 0; element < colorsAlphabetical.length; element++) {
    if(inputColor == colorsAlphabetical[element]) {
      return element;
    }
  }
  // The color inserted is not a valid option
  return -1;
}

function isPlayerCorrect() {
  //
  if(playerIndex == -1) {
    alert("Please insert a valid color!\n\n" + colorsAlphabetical);
    return false;
  }
  if(playerIndex > targetIndex) {
    alert("WRONG!\n" + "The correct answer is alphabetical lower.");
    return false;
  }
  if(playerIndex < targetIndex) {
    alert("WRONG!\n" + "The correct answer is alphabetical higher");
    return false;
  }
  if(playerIndex == targetIndex) {
    setTimeout(lastAlert, 100);
    // Change the background color
    document.body.style.background = colorsAlphabetical[playerIndex];
    return true;
  }
}

function lastAlert() {
  alert("Congratulations!! You are correct my dear Sir.\n\n" +
        "Number of tries: " + nGuesses);
}
