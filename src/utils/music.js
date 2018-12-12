// MUSIC 相关处理 播放

let utilMusic = Object.create(null)

utilMusic = {
  playRing: function (name, count, done) {
    done = done || function () {};
    this.playRingInstance = this.playRingInstance || {};
    let nameMap = {
      A: "avchat_connecting",
      B: "avchat_no_response",
      C: "avchat_peer_busy",
      D: "avchat_peer_reject",
      E: "avchat_ring"
    };

    let url = require('@/assets/audio/' + nameMap[name] + ".mp3")

    function doPlay(url, playDone) {
      let audio = document.createElement("audio");
      audio.autoplay = true;

      function onEnded() {
        this.playRingInstance.cancel = null;
        audio = null;
        playDone();
      }
      onEnded = onEnded.bind(this);
      audio.addEventListener("ended", onEnded);
      audio.src = url;
      this.playRingInstance.cancel = function () {
        audio.removeEventListener("ended", onEnded);
        audio.pause();
        audio = null;
      }
    }

    doPlay = doPlay.bind(this);
    let wrap = function () {
      this.playRingInstance = null
      done();
    }.bind(this);
    for (let i = 0; i < count; i++) {
      wrap = (function (wrap) {
        return function () {
          doPlay(url, wrap);
        };
      })(wrap);
    }
    wrap();
  },
  clearRingPlay: function () {
    if (this.playRingInstance) {
      this.playRingInstance.cancel && this.playRingInstance.cancel();
      this.playRingInstance = null;
    }
  }
}

export default utilMusic
