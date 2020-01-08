<template>
<div id="app">

  <app-header></app-header>
  <div class="contents">
    <div class="row">
      <div class="col-12">
        <h1>Dashboard</h1>
        <p v-if="profile.location">
          <strong>Ward Number:</strong> {{profile.location[0]['ward']}} <br />
          <strong>Municipality:</strong> {{profile.location[0]['municipality_name']}}<br />
          <strong>District:</strong> {{profile.location[0]['district']}}
        </p>
      </div>
    </div>

    <div class="row mt-4 text-center">
      <div class="col-12">
        <div class="card shadow">
          <h3 class="mb-3">Filter Data Table</h3>

          <div class="row">
            <div class="col-lg-6 col-sm-12 mb-3">
              <h6>Select Start Date:</h6>
              <b-input v-model="Start_Date" type="date"/>
            </div>

            <div class="col-lg-6 col-sm-12 mb-3">
              <h6>Select End Date:</h6>
              <b-input v-model="End_Date" type="date"/>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-10 col-sm-12">
              <h6>Select Activities:</h6>
              <b-form-group>
                <b-form-checkbox-group
                v-model="checkbox_selected"
                :options="checkbox_options"
                switches
                size="lg"
                ></b-form-checkbox-group>
              </b-form-group>
            </div>

            <div class="col-lg-2 col-sm-12">
              <h6>Click Here:</h6>
              <b-button variant="custom" block class="mb-4">Submit</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">
          <h3 class="mb-3">Bar graph of basic data by age and gender</h3>
          <Visualization :tag="genderbargraph"></Visualization>
        </div>
      </div>

      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">
          <h3 class="mb-3">Bar graph of treatment data</h3>
          <Visualization :tag="treatmentbargraph"></Visualization>
        </div>
      </div>

      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">
          <h3 class="mb-3">Pie chart of contacts by settings</h3>
          <Visualization :tag="lch"></Visualization>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <div class="card shadow">
          <h3 class="mb-3">Line graph</h3>
          <Visualization :tag="uch"></Visualization>
        </div>
      </div>
    </div>

    <div class="row mt-4 text-center">

      <div class="col-12">

        <!-- <div class="row mt-4 text-center">
          <div class="col-12">
            <div class="card shadow">
              <h3 class="mb-4">Filter Data</h3>

              <div class="row">
                <div class="col-lg-4 col-sm-12 mb-4">
                  <h6>Select Start Date:</h6>
                  <b-input v-model="" type="date"/>
                </div>

                <div class="col-lg-4 col-sm-12 mb-4">
                  <h6>Select End Date:</h6>
                  <b-input v-model="" type="date"/>
                </div>

                <div class="col-lg-4 col-sm-12 mb-4">
                  <h6>Location:</h6>
                  <multiselect
                  v-model="location"
                  :options="options"
                  :multiple="true"
                  :preserve-search="true"
                  placeholder="Select Location"
                  label="name"
                  track-by="name"
                  open-direction="bottom"
                  :preselect-first="true"
                  >
                  </multiselect>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-10 col-sm-12">
                  <h6>Select Activities:</h6>
                  <b-form-group>
                    <b-form-checkbox-group
                    v-model="checkbox_selected"
                    :options="checkbox_options"
                    checked=true
                    switches
                    size="lg"
                    ></b-form-checkbox-group>
                  </b-form-group>
                </div>

                <div class="col-lg-2 col-sm-12">
                  <h6>Click Here:</h6>
                  <b-button variant="custom" block class="mb-4" @click="OverviewTable">Submit</b-button>
                </div>
              </div>
            </div>
          </div>
        </div> -->



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
import { mapState,mapActions } from 'vuex';
import AppHeader from './Header.vue';
import Visualization from './Visualization';
// import userChart from '../js/userchart.js';
// import locationChart from '../js/locationchart.js';

// const axios = require('axios');
export default {
  name: "IndexPage",
  components:{
    // "AuthenticationForm": AuthenticationForm
    'app-header': AppHeader,
    'Visualization': Visualization
  },
  computed: {
    ...mapState(['token','profile','treatmenttable','basic_table','wardstrategicdata_obj'
    ]),

    basic: function(){
      if(this.$store.state.basic_table.length > 0){
        var formattedRecord = []
        this.$store.state.basic_table.forEach(function(rec){
          formattedRecord.push({
           type: rec[0], male: rec[1], female: rec[2], child: rec[3], adult: rec[4], senior: rec[5], total: rec[6]
         })
        })
        return formattedRecord;

      }else{
        return []
      }

    },

  treatment: function(){
    if(this.$store.state.treatmenttable.length > 0){
      var formattedRecord1 = []
      this.$store.state.treatmenttable.forEach(function(rec){
        formattedRecord1.push({
         type: rec[0], male: rec[1], female: rec[2], child: rec[3], adult: rec[4], senior: rec[5], total: rec[6]
       })
      })
      return formattedRecord1;

    }else{
      return []
    }

  },

  strategic: function(){
    if(this.$store.state.wardstrategicdata_obj.length > 0){
      var formattedRecord2 = []
      this.$store.state.wardstrategicdata_obj.forEach(function(rec){
        formattedRecord2.push({
         type: rec[0], male: rec[1], female: rec[2], child: rec[3], adult: rec[4], senior: rec[5], total: rec[6]
       })
      })
      return formattedRecord2;

    }else{
      return []
    }

  }




},

  created(){
    this.listProfile();
    this.listTreatmentTable();
    this.listBasicTable();
    this.listWardStrategicData();
  },


  data() {
    return {
      genderbargraph: "genderbargraph",
      treatmentbargraph:"treatmentbargraph",
      uch:"uch",
      lch:"lch",
      isActive: true,
      options:[{"name":"All Location","language":null}],
      checkbox_options:[{"name":"pk"}],
      checkbox_selected: [], // Must be an array reference!
      checkbox_options: [],
      Start_Date:"",
      End_Date:"",

      basicFields: [
        { key: 'type', label: '', tdClass: 'font-weight-bold'},
        { key: 'male', label: 'Male'},
        { key: 'female', label: 'Female'},
        { key: 'child', label: 'Child (< 18Y)'},
        { key: 'adult', label: 'Adult (19Y - 60Y)'},
        { key: 'senior', label: 'Other Adult (>60Y)'},
        { key: 'total', label: 'Total'},
      ],

      treatmentFields: [
        { key: 'type', label: '', tdClass: 'font-weight-bold'},
        { key: 'male', label: 'Male'},
        { key: 'female', label: 'Female'},
        { key: 'child', label: 'Child (< 18Y)'},
        { key: 'adult', label: 'Adult (19Y - 60Y)'},
        { key: 'senior', label: 'Other Adult (>60Y)'},
        { key: 'total', label: 'Total'},
      ],

      strategicFields: [
        { key: 'type', label: '', tdClass: 'font-weight-bold'},
        { key: 'male', label: 'Male'},
        { key: 'female', label: 'Female'},
        { key: 'child', label: 'Child (< 18Y)'},
        { key: 'adult', label: 'Adult (19Y - 60Y)'},
        { key: 'senior', label: 'Other Adult (>60Y)'},
        { key: 'total', label: 'Total'},
      ],

    }
  },

  methods:{
    ...mapActions(['listProfile','listTreatmentTable','listBasicTable','listWardStrategicData']),


  }
};
</script>

<style lang="scss" scoped>
  @import "../css/index.scss";

</style>
