window.addEventListener("keydown", (e) => {
  // to slelect the attribute without giving class
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   console.log(audio);
  //   console.log(key);
  if (!audio) {
    return;
  }
  audio.currentTime = 0; // to rewind the audio
  audio.play();
  key.classList.toggle("playing");
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", () => {
      key.classList.remove("playing");
    })
  );
});
