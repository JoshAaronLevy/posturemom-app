<template>
  <div id="app">
    <div class="row d-flex justify-content-center">
      <div class="col-sm-8">
        <div class="card card-wizard" id="wizardCard" title="">
          <form-wizard shape="tab"
                        @on-complete="wizardComplete"
                        error-color="#FB404B"
                        color="#35495E">
            <tab-content title="Goal Posture"
                          class="col-12"
                          :before-change="() => validateStep('firstStep')"
                          icon="nc-icon nc-badge">
              <first-step ref="firstStep" @on-validated="onStepValidated"></first-step>
            </tab-content>
            <tab-content title="Resting Posture"
                          class="col-12"
                          :before-change="() => validateStep('secondStep')"
                          icon="nc-icon nc-notes">
              <second-step ref="secondStep" @on-validated="onStepValidated"></second-step>
            </tab-content>
            <tab-content title="Begin Session"
                          class="col-12"
                          icon="nc-icon nc-check-2">
              <div>
                <h2 class="text-center text-space">Looking Good!
                  <br>
                  <small>Click "<b>Initialize</b>" to start the posture session</small>
                </h2>
              </div>
            </tab-content>

            <button slot="prev" class="btn btn-default btn-fill btn-wd btn-back">Back</button>
            <button slot="next" class="btn btn-default btn-fill btn-wd btn-next">Next</button>
            <button slot="finish" class="btn btn-success btn-fill btn-wd">Initialize</button>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import FirstStep from '../Dashboard/Forms/Wizard/FirstStep.vue';
import SecondStep from '../Dashboard/Forms/Wizard/SecondStep.vue';
import swal from 'sweetalert2';
// import * as posenet from '@tensorflow-models/posenet';
// import dat from 'dat.gui';
// import Stats from 'stats.js';
// import { drawKeypoints, drawSkeleton, drawBoundingBox } from '../../demo_util';
// import * as camera from '../../camera.js';

export default {
  name: 'Session',
  // data() {
  //   return {
  //     video: {},
  //     canvas: {},
  //     captures: []
  //   };
  // },
  components: {
    FormWizard,
    TabContent,
    FirstStep,
    SecondStep
  },
  // mounted() {
  //   this.video = this.$refs.video;
  //   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //     navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  //       this.video.src = window.URL.createObjectURL(stream);
  //       this.video.play();
  //     });
  //   }
  // },
  methods: {
    // capture() {
    //   this.canvas = this.$refs.canvas;
    //   var context = this.canvas
    //     .getContext('2d')
    //     .drawImage(this.video, 0, 0, 640, 480);
    //   this.captures.push(canvas.toDataURL('image/png'));
    // },
    validateStep(ref) {
      return this.$refs[ref].validate();
    },
    onStepValidated(validated, model) {
      this.wizardModel = { ...this.wizardModel, ...model };
      swal({
        title: 'Looking Good!',
        text: 'Your posture has been recorded',
        type: 'success',
        position: 'top-end'
      });
      // swal('Good job!', 'You clicked the finish button!', 'success');
    },
    wizardComplete() {
      swal('Good job!', 'You clicked the finish button!', 'success');
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
  margin-top: 0px;
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
.wizard-title {
  visibility: hidden;
}
</style>
