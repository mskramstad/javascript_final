var topic = "Computer Science";

// create words and definitions here

// create variables here


updateScreen();
setText("title", topic + " Flashcards")

function updateScreen() {

  if (words.length > 0) {
    setText("word", words[index].toUpperCase());
  
    if (showing) {
      setText("definition", definitions[index]);
    } else {
      setText("definition", "");
    } 

  } else {
    setText("word", "You learned all the words!");
    setText("definition", "");
  }
  
  displayMessage("Total words to learn: " + words.length);
}

function toggle() {
  if (showing) {
    showing = false;
    setText("toggleBtn", "Show")
  } else {
    showing = true;
    setText("toggleBtn", "Hide")
  }

  updateScreen();
  
}

function nextWord() {
  // write code here
  console.log("nextWord btn clicked!")
}

function previousWord() {
  // write code here
  console.log("previousWord clicked!");
}

function learnedWord() {
  // write code here
  console.log("learned word btn clicked!");
}

function displayMessage(msg) {
  setText("message", msg);
}

function getText(id) {
  return document.getElementById(id).value;
}

function setText(id, value) {
   document.getElementById(id).innerHTML = value;
}
