function playPause() {
  const player = document.getElementById('player');
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}