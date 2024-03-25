function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
  }


  function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
  }