class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }

  _initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  controls() {
    this.media.paused ? this.media.play() : this.media.pause();
  }
  mute() {
    this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
  }
}

export default MediaPlayer;