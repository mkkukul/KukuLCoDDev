const container = document.querySelector(".container"),
  mainVideo = container.querySelector("video"),
  videoTimeline = container.querySelector(".video-timeline"),
  progressBar = container.querySelector(".progress-bar"),
  volumeBtn = container.querySelector(".volume i"),
  volumeSlider = container.querySelector(".left input");
(currentVidTime = container.querySelector(".current-time")),
  (videoDuration = container.querySelector(".video-duration")),
  (skipBackward = container.querySelector(".skip-backward i")),
  (skipForward = container.querySelector(".skip-forward i")),
  (playPauseBtn = container.querySelector(".play-pause i")),
  (speedBtn = container.querySelector(".playback-speed span")),
  (speedOptions = container.querySelector(".speed-options")),
  (pipBtn = container.querySelector(".pic-in-pic span")),
  (fullScreenBtn = container.querySelector(".fullscreen i"));
let timer;
