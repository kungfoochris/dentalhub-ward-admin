<template>
<div id="app">

  <div class="contents">
    <div class="row mb-4">


      <div class="col-md-4 col-12 d-flex align-content-center flex-wrap">
        <LoginForm></LoginForm>
      </div>


      <div class="col-md-8 col-12">
        <div class="row mt-4">
          <div class="col-md-4 col-12" data-aos="fade-down" data-aos-duration="3200">
            <div class="card shadow">
              <p class="counter">
                <ICountUp
                :delay="delay"
                :endVal="treatment_obj"
                :options="options"
                />
              </p>
              <small class="counter-label">
                Treatments this year
              </small>
            </div>
          </div>

          <div class="col-md-4 col-12" data-aos="fade-down" data-aos-duration="3200">
            <div class="card shadow">
              <p class="counter">
                <ICountUp
                :delay="delay"
                :endVal="cavities_obj"
                :options="options"
                />
              </p>
              <small class="counter-label">
                Cavities restored this year
              </small>
            </div>
          </div>

          <div class="col-md-4 col-12" data-aos="fade-down" data-aos-duration="3200">
            <div class="card shadow">
              <p class="counter">
                <ICountUp
                :delay="delay"
                :endVal="contacted_obj"
                :options="options"
                />
              </p>
              <small class="counter-label">
                People contacted this year
              </small>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12 text-center">
            <div class="card shadow" data-aos="fade-left" data-aos-duration="3200">
              <p class="counter chart-counter">
                <LoginVisualization :tag="lch" :type="type" :clean-data="locationChart"></LoginVisualization>
              </p>
              <br />
              <!-- <small class="counter-label">
                Pie Chart
              </small> -->
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';

import LoginForm from './LoginForm';
import LoginVisualization from './LoginPageVisualization';
import locationChart from '../js/locationchart.js';

const axios = require('axios');

export default {
  name: "LoginPage",
  components:{
    'LoginForm': LoginForm,
    'LoginVisualization': LoginVisualization
  },

  data() {
    return {
      delay: 100,
      treatment_obj:500,
      cavities_obj:1500,
      contacted_obj:6000,
      endVal: [500, 1500, 6000],
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },

      locationChart: locationChart,
      lch:"lch",
      type: "pie",
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../css/loginpage.scss";

</style>
