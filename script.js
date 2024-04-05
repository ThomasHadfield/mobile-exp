

// COLOUR CHANGER

function randomize() {
    document.getElementById('p1').style.backgroundColor = randomColors();
  }
  
  
  // random colors - taken from here:
  // http://www.paulirish.com/2009/random-hex-color-code-snippets/
  
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }