function AutoPlay(config) {
  this.media = config.media;
}
AutoPlay.prototype.run = function () {
  this.media.muted = true;
  this.media.play();
};

export default AutoPlay;

/* function AutoPlay(config) {
  this.media = config.media;
}

AutoPlay.prototype.run = function () {
  this.media.muted = true;
  this.media.play();
};

export default AutoPlay; */
