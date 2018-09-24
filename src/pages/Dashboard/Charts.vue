<template>
  <div class="row">
    <div class="col-lg-12">
      <card title="Daily Posture" subTitle="Average Score Throughout Each Day">
        <div id="chartPerformance" class="ct-chart"></div>
      </card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      $Chartist: null
    };
  },
  methods: {
    initPerformanceChart() {
      const dataPerformance = {
        labels: [
          '08am',
          '09am',
          '10am',
          '11am',
          '12pm',
          '01pm',
          '02pm',
          '03pm',
          '04pm',
          '05pm'
        ],
        series: [[88, 91, 81, 74, 71, 85, 89, 82, 70, 69]]
      };

      const optionsPerformance = {
        showPoint: true,
        lineSmooth: true,
        axisX: {
          showGrid: false,
          showLabel: true
        },
        axisY: {
          offset: 50,
          divisor: 10,
          onlyInteger: true,
          ticks: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        },
        low: 0,
        high: 100,
        ticks: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        height: '500px'
      };

      this.$Chartist.Line(
        '#chartPerformance',
        dataPerformance,
        optionsPerformance
      );
    },
    initCharts() {
      this.initPerformanceChart();
    }
  },
  async mounted() {
    this.$Chartist = await import('chartist');
    this.initCharts();
  }
};
</script>
<style scoped>
.card {
  height: 650px;
}
</style>
