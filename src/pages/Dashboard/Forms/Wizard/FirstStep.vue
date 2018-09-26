<template>
  <div>
    <div v-if="!readyToFire">
      <h5 class="text-center">Please initialize camera.</h5>
      <button class="btn btn-primary" id="snap" v-on:click="initCamera">Initialize</button>
    </div>
    <div v-if="readyToFire">
      <h5 class="text-center">Please set your goal posture.</h5>
      <div class="row video-session">
        <button class="btn btn-danger" id="snap" v-on:click="capture">Capture</button>
        <canvas v-if="readyToFire" ref="canvas" id="output" width="640" height="480"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2';
import * as camera from '../../../../camera.js';

export default {
  data() {
    return {
      video: {},
      canvas: {},
      captures: [],
      readyToFire: false
    };
  },
  methods: {
    initCamera() {
      this.readyToFire = true;
    },
    capture() {
      swal({
        title: 'Looking Good!',
        text: 'Your posture has been recorded',
        type: 'success',
        position: 'top'
      });
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
.btn-primary {
  font-size: 18px;
  margin-bottom: 15px;
}
.btn-danger {
  font-size: 18px;
  margin-bottom: 15px;
}
</style>
