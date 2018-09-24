<template>
  <div>
      <div class="row">
        <div class="col-xl-6 col-md-6">
          <stats-card title="New Session" subTitle="">
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-icon nc-button-play text-danger"></i>
            </div>
          </stats-card>
        </div>

        <div class="col-xl-6 col-md-6">
          <stats-card title="View Charts" subTitle="">
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-check-2 text-success"></i>
            </div>
          </stats-card>
        </div>

        <div class="col-xl-6 col-md-6">
          <stats-card title="Data Table" subTitle="">
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-simple-remove text-danger"></i>
            </div>
          </stats-card>
        </div>

        <div class="col-xl-6 col-md-6">
          <stats-card title="My Account" subTitle="">
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-check-2 text-success"></i>
            </div>
          </stats-card>
        </div>

      </div>
  </div>
</template>
<script>
import {
  ChartCard,
  StatsCard,
  Card,
  Table as LTable,
  Checkbox
} from 'src/components/index';

export default {
  components: {
    Checkbox,
    Card,
    LTable,
    ChartCard,
    StatsCard
  },
  data() {
    return {
      editTooltip: 'Edit Task',
      deleteTooltip: 'Remove',
      pieChart: {
        data: {
          labels: ['40%', '20%', '40%'],
          series: [40, 20, 40]
        }
      }
    };
  }
};
</script>
<style scoped>
h4.card-title {
  font-weight: 500 !important;
  padding-top: 15px !important;
  padding-right: 80px !important;
}
</style>
