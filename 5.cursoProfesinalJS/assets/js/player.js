import MediaPlayer from "./index.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const playButton = document.querySelector("#play");
const playButton2 = document.querySelector("#play2");
const muteButton = document.querySelector("#mute");

const player = new MediaPlayer({
  el: video,
  //plugins: [new AutoPlay({ media: video })],
});

playButton.onclick = () => player.controls();
playButton2.onclick = () => player.controls();
muteButton.onclick = () => player.mute();
