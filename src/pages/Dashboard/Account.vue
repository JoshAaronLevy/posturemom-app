<template>
  <div>
    <h4 class="text-center">Please set your goal posture.</h4>
    <div class="row video-session">
      <div><button class="btn btn-danger" id="snap" v-on:click="capture()">Capture</button></div>
      <canvas ref="canvas" id="output" width="640" height="480"></canvas>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2';
import * as camera from '../../camera.js';

export default {
  data() {
    return {
      video: {},
      canvas: {},
      captures: []
    };
  },
  mounted() {
    // this.video = this.$refs.video;
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //   navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    //     this.video.src = window.URL.createObjectURL(stream);
    //     this.video.play();
    //   });
    // }
  },
  methods: {
    capture() {
      this.canvas = this.$refs.canvas;
      var context = this.canvas
        .getContext('2d')
        .drawImage(this.video, 0, 0, 640, 480);
      this.captures.push(canvas.toDataURL('image/png'));
      return validate();
    },
    validate() {
      return this.$validator.validateAll().then(res => {
        this.$emit('on-validated', res, this.model);
        return res;
      });
    }
  }
};
</script>
<style scoped>
body {
  background-color: #f0f0f0;
}
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#video {
  background-color: #000000;
}
#canvas {
  display: none;
}
li {
  display: inline;
  padding: 5px;
}
.video-session {
  flex-direction: column;
}
.btn-danger {
  font-size: 18px;
  margin-bottom: 15px;
}
</style>
