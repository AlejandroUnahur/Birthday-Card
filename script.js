function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
  }


  function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
  }

  // Verificar si el navegador soporta el evento visibilitychange
if (typeof document.hidden !== "undefined") {
  // Escuchar el evento visibilitychange
  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      // Si la página se oculta, detener el audio
      stopAudio();
    }
  });
}