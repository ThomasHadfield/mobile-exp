// GSAP

gsap.fromTo(".mobile-screen", { 
  height: 0,
  width: 50 
}, { 
  height: 812, 
  duration: 0.8,
  ease: "power3.inOut"
});


gsap.fromTo(".mobile-screen", { 
  width: 50 
}, { 
  delay: 0.6,
  width: 375,
  duration: 0.8,
  ease: "power3.inOut"
});


gsap.from("h1",{
  delay: 1.2,
  opacity: 0,
  x: 16,
  duration: 0.8
});













// COLOUR CHANGER

function randomize() {
    document.getElementById('p1').style.backgroundColor = randomColors();
  }
  
  
  // random colors - taken from here:
  // http://www.paulirish.com/2009/random-hex-color-code-snippets/
  
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }