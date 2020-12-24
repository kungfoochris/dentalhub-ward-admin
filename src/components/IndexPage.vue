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

  <!-- {{ currentDate.day}} / {{ currentDate.month }} / {{ currentDate.year }} -->


    <div class="row mt-4 text-center">
      <div class="col-12">
        <div class="card shadow">
          <h3 class="mb-3">Filter Data Table</h3>

          <div class="row">
            <div class="col-lg-6 col-sm-12 mb-3">
              <h6>Select Start Date:</h6>
              <b-input v-model="date_obj.last_30_days" type="date"/>
            </div>

            <div class="col-lg-6 col-sm-12 mb-3">
              <h6>Select End Date:</h6>
              <b-input v-model="date_obj.today_date" type="date"/>
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
              <b-button variant="custom" block class="mb-4" @click="FilterForm">Submit</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <b-toast id="error-toast" variant="warning" solid append-toast toaster="b-toaster-bottom-full">
      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
        <strong class="mr-auto">Overview filter required error</strong>
      </div>
      <div v-if="errors.Start_Date">
        <p>{{ errors.Start_Date }}</p>
      </div>
      <div v-if="errors.End_Date">
        <p>{{ errors.End_Date }}</p>
      </div>

      <div v-if="errors.checkbox_selected">
        <p>{{ errors.checkbox_selected }}</p>
      </div>

      <div v-if="message.length>0">
        <p>{{this.message }}</p>
      </div>


    </b-toast>

    <b-toast id="success-toast" variant="custom-success" solid append-toast toaster="b-toaster-bottom-full">
      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
        <strong class="mr-auto">Filtered success</strong>
      </div>
        Data is Successfully  Filtered
    </b-toast>

    <div class="row mt-4 text-center">
      <div class="col-12">
        <div class="card shadow">
          <h3>10.1 Overview</h3>
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


    <div class="row mt-4">
      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">
          <h3 class="mb-3">10.2 Contacts by Age & Gender</h3>
          <Visualization :tag="genderbargraph"></Visualization>
        </div>
      </div>

      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">
          <h3 class="mb-3">10.3 Treatments by Age & Gender</h3>
          <Visualization :tag="treatmentbargraph"></Visualization>
        </div>
      </div>

      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">
          <h3 class="mb-3">10.4 Contacts by Setting</h3>
          <Visualization :tag="lch"></Visualization>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <div class="card shadow">
          <h3 class="mb-3">10.5 Contacts Over Time</h3>
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
    ...mapState(['date_obj','errormessage','successmessage','message','activities_obj','token','profile','treatmenttable','basic_table','wardstrategicdata_obj'
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
    this.listDate();
    this.listTreatmentTable();
    this.listBasicTable();
    this.listWardStrategicData();
    this.listActivitie().then(() => {
      this.checkbox_optionsupdate();})
  },

  mounted() {
    this.current_date()
  },

  data() {
    return {
      genderbargraph: "genderbargraph",
      treatmentbargraph:"treatmentbargraph",
      uch:"uch",
      lch:"lch",
      isActive: true,
      options:[{"name":"All Location","language":null}],
      checkbox_selected: [], // Must be an array reference!
      checkbox_options: [],
      Start_Date:"",
      End_Date:"10/10/2020",
      errors:[],
      currentDate: {
        day: '',
        month: '',
        year: '',
      },


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
    ...mapActions(['listDate','listActivitie','listProfile','listTreatmentTable','listBasicTable','listWardStrategicData']),

    current_date() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth();
      var year = currentDate.getFullYear();
      this.currentDate.day = day;
      this.currentDate.month = month;
      this.currentDate.year = year;
    },

FilterForm(){
  this.errors=[]
  if(this.Start_Date==""){
    this.errors['Start_Date']="Start_Date required."
    this.showdataget = true
    this.$bvToast.show('error-toast');
  }else if(this.End_Date ==""){
    this.errors['End_Date']="End_Date required."
    this.showdataget = true
    this.$bvToast.show('error-toast');
  }else if (this.checkbox_selected.length<0){
    this.errors['checkbox_selected']="Select Activity."
    this.showdataget = true
    this.$bvToast.show('error-toast');
  }else(
    this.$store.dispatch("CreateGenderChart",{'start_date':this.Start_Date,'end_date':this.End_Date,"activities":this.checkbox_selected}),
    this.$store.dispatch("CreateWardSettingGraphs",{'start_date':this.Start_Date,'end_date':this.End_Date,"activities":this.checkbox_selected}),
    this.$store.dispatch("CreateWardTreatmentGraphs",{'start_date':this.Start_Date,'end_date':this.End_Date,"activities":this.checkbox_selected}),
    this.$store.dispatch("CreateTreatmentTable",{'start_date':this.Start_Date,'end_date':this.End_Date,"activities":this.checkbox_selected}),
    this.$store.dispatch("CreateBasicTable",{'start_date':this.Start_Date,'end_date':this.End_Date,"activities":this.checkbox_selected}),
    this.$store.dispatch("CreateWardStrategicData",{'start_date':this.Start_Date,'end_date':this.End_Date,"activities":this.checkbox_selected}).then(() => {
      if(this.errormessage =='errormessage'){
        this.$bvToast.show('error-toast');
      }else if(this.successmessage=='success'){
        this.message = "",
        this.$bvToast.show('success-toast');
      }

    })
  )







},

    checkbox_optionsupdate(){
      var activities_data=[]
      var activities_data1=[]
      if (this.activities_obj.length>0){
        this.activities_obj.forEach(function(activity){
            activities_data.push({'text':activity.name,'value':activity.id})
            activities_data1.push(activity.id)

        })
        this.checkbox_options = activities_data
        this.checkbox_selected = activities_data1
      }

    },


  }
};
</script>

<style lang="scss" scoped>
  @import "../css/index.scss";

</style>
