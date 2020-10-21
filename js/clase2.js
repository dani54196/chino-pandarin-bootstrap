createjs.Sound.alternateExtensions = ["mp3"];

function loadSound() {
  createjs.Sound.registerSound("clase2/madre.mp3", "madre");
  createjs.Sound.registerSound("clase2/caballo.mp3", "caballo");
  createjs.Sound.registerSound("clase2/canamo.mp3", "canamo");
  createjs.Sound.registerSound("clase2/insultar.mp3", "insultar");
  createjs.Sound.registerSound("clase2/interrogativa.mp3", "interrogativa");
}
function playSound(sonido) {
  createjs.Sound.play(sonido);
}
