navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
  var x = document.getElementById("myAudio");
  x.play();

  // stop microphone stream acquired by getUserMedia
  stream.getTracks().forEach(function (track) {
    track.stop();
  });
});
