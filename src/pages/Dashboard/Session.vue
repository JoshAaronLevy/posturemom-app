<template>
<div>
  <div id="info" style='display:none'>
  </div>
  <div id="loading">
      Loading the model...
  </div>

  <div id='main' style='display:none'>
      <video id="video" playsinline style=" -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      display: none;
      ">
      </video>
      <canvas id="output" />
  </div>
</div>
</template>

<script>
// import * as posenet from '@tensorflow-models/posenet';
// import dat from 'dat.gui';
// import Stats from 'stats.js';
// import { drawKeypoints, drawSkeleton, drawBoundingBox } from '../../demo_util';
import * as camera from '../../camera.js';

export default {
  name: 'Session',
  data() {
    return {};
  },
  mounted() {
    const videoWidth = 900;
    const videoHeight = 750;
    // const stats = new Stats();
  }
};
</script>

