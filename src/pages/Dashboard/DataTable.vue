<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Filter" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Type to Search" />
              <b-input-group-append>
                <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Sort By" class="mb-0">
            <b-input-group>
              <b-form-select v-model="sortBy" :options="sortOptions">
                <option slot="first" :value="null">-- none --</option>
              </b-form-select>
              <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                <option :value="false">Low-High</option>
                <option :value="true">High-Low</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Days Back" class="mb-0">
            <b-form-select :options="dayOptions" v-model="daysBack" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-table show-empty
                responsive
                hover
                stacked="md"
                :items="items"
                :fields="records"
                :current-page="currentPage"
                :per-page="daysBack"
                :filter="filter"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                @filtered="onFiltered"
      >
        <template slot="index" slot-scope="row">{{row.index + 1}}</template>
        <template slot="date" slot-scope="row">{{row.value | moment('MM/DD/YYYY')}}</template>
        <template slot="avg_good" slot-scope="row">{{row.value}}</template>
        <template slot="peak_time" slot-scope="row">{{row.value}}</template>
        <template slot="avg_bad" slot-scope="row">{{row.value}}</template>
        <template slot="trough_time" slot-scope="row">{{row.value}}</template>
        <template slot="actions" slot-scope="row">
          <b-button @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
            Info modal
          </b-button>
          <b-button @click.stop="row.toggleDetails">
            {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
          </b-button>
        </template>
        <template slot="row-details" slot-scope="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            </ul>
          </b-card>
        </template>
      </b-table>
      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="daysBack" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
      <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
        <pre>{{ modalInfo.content }}</pre>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
const items = [
  {
    date: '2018-09-23T14:25:10.487',
    avg_good: 3,
    peak_time: '10:00am',
    avg_bad: 5,
    trough_time: '4:00pm'
  },
  {
    date: '2018-09-22T14:25:10.487',
    avg_good: 2,
    peak_time: '09:00am',
    avg_bad: 6,
    trough_time: '3:00pm'
  },
  {
    date: '2018-09-21T14:25:10.487',
    avg_good: 3,
    peak_time: '09:00am',
    avg_bad: 5,
    trough_time: '4:00pm'
  },
  {
    date: '2018-09-20T14:25:10.487',
    avg_good: 2,
    peak_time: '10:00am',
    avg_bad: 6,
    trough_time: '4:00pm'
  },
  {
    date: '2018-09-19T14:25:10.487',
    avg_good: 1,
    peak_time: '02:00pm',
    avg_bad: 7,
    trough_time: '3:00pm'
  },
  {
    date: '2018-09-18T14:25:10.487',
    avg_good: 3,
    peak_time: '02:00pm',
    avg_bad: 5,
    trough_time: '4:00pm'
  },
  {
    date: '2018-09-17T14:25:10.487',
    avg_good: 4,
    peak_time: '10:00am',
    avg_bad: 4,
    trough_time: '1:00pm'
  },
  {
    date: '2018-09-16T14:25:10.487',
    avg_good: 3,
    peak_time: '09:00am',
    avg_bad: 5,
    trough_time: '4:00pm'
  },
  {
    date: '2018-09-15T14:25:10.487',
    avg_good: 3,
    peak_time: '10:00am',
    avg_bad: 5,
    trough_time: '3:00pm'
  },
  {
    date: '2018-09-14T14:25:10.487',
    avg_good: 3,
    peak_time: '10:00am',
    avg_bad: 5,
    trough_time: '4:00pm'
  }
];

export default {
  data() {
    return {
      items: items,
      records: [
        'index',
        {
          key: 'date',
          label: 'Date',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'avg_good',
          label: 'Good Posture Time',
          sortable: true,
          class: 'text-center'
        },
        {
          key: 'peak_time',
          label: 'Peak Posture',
          sortable: true,
          class: 'text-center'
        },
        {
          key: 'avg_bad',
          label: 'Bad Posture Time',
          sortable: true,
          class: 'text-center'
        },
        {
          key: 'trough_time',
          label: 'Trough Posture',
          sortable: true,
          class: 'text-center'
        }
      ],
      currentPage: 1,
      daysBack: 7,
      totalRows: items.length,
      dayOptions: [7, 14, 30, 60, 90],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' }
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our records
      return this.records.filter(f => f.sortable).map(f => {
        return { text: f.label, value: f.key };
      });
    }
  },
  methods: {
    info(item, index, button) {
      this.modalInfo.title = `Info for: ${index.value}`;
      this.modalInfo.content = JSON.stringify(item, null, 2);
      this.$root.$emit('bv::show::modal', 'modalInfo', button);
    },
    resetModal() {
      this.modalInfo.title = '';
      this.modalInfo.content = '';
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<style scoped>
tbody {
  font-size: 20px !important;
  font-weight: 500 !important;
}
</style>
