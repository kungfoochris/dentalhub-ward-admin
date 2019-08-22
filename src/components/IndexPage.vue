<template>
<div id="app">

  <app-header></app-header>
  <div class="contents">
    <div class="row">
      <div class="col-12">
        <h1>Dashboard</h1>
        <p>
          <strong>Ward Number:</strong> 14 <br />
          <strong>Municipality:</strong> Mangalsen<br />
          <strong>District:</strong> Accham
        </p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">
          <Visualization :tag="uch" :type="type1" :clean-data="userChart"></Visualization>
        </div>
      </div>

      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">
          <Visualization :tag="uch" :type="type1" :clean-data="userChart"></Visualization>
        </div>
      </div>

      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">
          <Visualization :tag="lch" :type="type2" :clean-data="locationChart"></Visualization>
        </div>
      </div>
    </div>

    <div class="row mt-4 text-center">
      <div class="col-12">
        <div class="card shadow">
          <h3>Basic Data</h3>
          <b-table
          id="user-table"
          show-empty
          :items="basic"
          :fields="basicFields"
          bordered
          responsive
          hover
          >
              <!-- <template slot="S.N." slot-scope="data">
              {{ data.index + 1 + '.' }}
            </template> -->
          </b-table>
          <div class="row pr-4">
            <small class="ml-auto"><a href=""><i class="fas fa-file-export mr-1"></i>Export Now</a></small>
          </div>
        </div>
      </div>
    </div>


    <div class="row mt-4 text-center">
      <div class="col-12">
        <div class="card shadow">
          <h3>Treatments</h3>
          <b-table
          id="user-table"
          show-empty
          :items="treatment"
          :fields="treatmentFields"
          bordered
          responsive
          hover
          >
              <!-- <template slot="S.N." slot-scope="data">
              {{ data.index + 1 + '.' }}
            </template> -->
          </b-table>
          <div class="row pr-4">
            <small class="ml-auto"><a href=""><i class="fas fa-file-export mr-1"></i>Export Now</a></small>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4 text-center">
      <div class="col-12">
        <div class="card shadow">
          <h3>Strategic Data</h3>
          <b-table
          id="user-table"
          show-empty
          :items="strategic"
          :fields="strategicFields"
          bordered
          responsive
          hover
          >
                <!-- <template slot="S.N." slot-scope="data">
                {{ data.index + 1 + '.' }}
              </template> -->
            </b-table>
            <div class="row pr-4">
              <small class="ml-auto"><a href=""><i class="fas fa-file-export mr-1"></i>Export Now</a></small>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import { mapState,mapActions } from 'vuex';
import AppHeader from './Header.vue';
import Visualization from './Visualization';
import userChart from '../js/userchart.js';
import locationChart from '../js/locationchart.js';

// const axios = require('axios');
export default {
  name: "IndexPage",
  components:{
    // "AuthenticationForm": AuthenticationForm
    'app-header': AppHeader,
    'Visualization': Visualization
  },
  // computed: {
  //   ...mapState(['token','data'
  //   ])
  // },

  // created(){
  //   this.listVisualization().then(() => {
  //     this.locationChart.data.labels = data.labels
  //     this.locationChard.data.datasets = data.datasets
  //   });
  // },

  data() {
    return {
      // username: '',
      // password: '',
      // text: "Login Form",
      // available: false,
      // show: false,
      // errors: {'auth':''},
      // disabledLogin: true
      userChart: userChart,
      locationChart: locationChart,
      uch:"uch",
      lch:"lch",
      type1: "bar",
      type2: "pie",
      isActive: true,

      basicFields: [
        { key: 'type', label: '', tdClass: 'main-label'},
        { key: 'male', label: 'Male'},
        { key: 'female', label: 'Female'},
        { key: 'child', label: 'Child (< 18Y)'},
        { key: 'adult', label: 'Adult (19Y - 60Y)'},
        { key: 'senior', label: 'Other Adult (>60Y)'},
        { key: 'total', label: 'Total'},
      ],
      basic:[
        {type: 'Number of Cavities Prevented', male: '50', female: '20', child: '30', adult: '15', senior: '25', total: '70'},
        {type: 'Contacts', male: '10', female: '30', child: '10', adult: '15', senior: '15', total: '40'},

      ],

      treatmentFields: [
        { key: 'type', label: '', tdClass: 'main-label'},
        { key: 'male', label: 'Male'},
        { key: 'female', label: 'Female'},
        { key: 'child', label: 'Child (< 18Y)'},
        { key: 'adult', label: 'Adult (19Y - 60Y)'},
        { key: 'senior', label: 'Other Adult (>60Y)'},
        { key: 'total', label: 'Total'},
      ],
      treatment:[
        {type: 'EXO', male: '50', female: '20', child: '30', adult: '15', senior: '25', total: '70'},
        {type: 'ART', male: '10', female: '30', child: '10', adult: '15', senior: '15', total: '40'},
        {type: 'SEAL', male: '50', female: '20', child: '30', adult: '15', senior: '25', total: '70'},
        {type: 'SDF', male: '50', female: '20', child: '30', adult: '15', senior: '25', total: '70'},
        {type: 'FV', male: '50', female: '20', child: '30', adult: '15', senior: '25', total: '70'},

      ],

      strategicFields: [
        { key: 'type', label: '', tdClass: 'main-label'},
        { key: 'male', label: 'Male'},
        { key: 'female', label: 'Female'},
        { key: 'child', label: 'Child (< 18Y)'},
        { key: 'adult', label: 'Adult (19Y - 60Y)'},
        { key: 'senior', label: 'Other Adult (>60Y)'},
        { key: 'total', label: 'Total'},
      ],
      strategic:[
        {type: 'Preventive Ratio', male: '50', female: '20', child: '30', adult: '15', senior: '25', total: '70'},
        {type: 'Early Intervention Ratio', male: '10', female: '30', child: '10', adult: '15', senior: '15', total: '40'},
        {type: '% Recall', male: '50', female: '20', child: '30', adult: '15', senior: '25', total: '70'},

      ]
    }
  },

  methods:{
    // ...mapActions(['setToken']),


  }
};
</script>

<style lang="scss" scoped>
  @import "../css/index.scss";

</style>
