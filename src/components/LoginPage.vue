<template>
<div id="app">

  <div class="contents">
    <div class="row mb-4">


      <div class="col-md-4 col-12 pt-4 d-flex align-content-center flex-wrap">
        <!-- <div class="col-12 align-self-center">
          <div class="card login-background-card">
            <p>Admin </p>
            <p>Panel</p> -->
            <div class="card shadow text-center login-card">
              <!-- <b-img src="/dental.png" fluid height="100" width="100" class="align-self-center mb-4"></b-img> -->
              <p class="title-text pb-4">
                Dental Hub
              </p>
              <b-form @submit.prevent>
                <b-form-group class="pb-3" label-for="email">
                  <b-form-input id="email" type="email" v-model="username" placeholder="Email Address"></b-form-input>
                </b-form-group>

                <b-form-group class="pb-3" label-for="password">
                  <b-form-input id="password" type="password" v-model="password" placeholder="Password"></b-form-input>
                </b-form-group>

  <!--               <b-form-group class="pb-3" label-for="rememberme">
                  <b-form-checkbox-group>
                    <b-form-checkbox value="">Remember Me</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
   -->
                <div class="col-md-12 submit-button text-center">
                  <b-button block variant="custom" type="submit" @click="processLogin">Sign in</b-button>
                </div>
              </b-form>
              <div class="row mt-4 justify-content-center">
                <b-nav pills>
                  <b-nav-item>About</b-nav-item>
                  <b-nav-item>Help</b-nav-item>
                  <b-nav-item>Privacy Policy</b-nav-item>
                </b-nav>
              </div>
              <small class="mt-4">&copy; 2019 | Designed, Developed & Maintained by <a href="https://abhiyantrik.com">Abhiyantrik Technology</a></small>
            </div>
          <!-- </div>
        </div> -->
      </div>


      <div class="col-md-8 col-12">
        <div class="row mt-4">
          <div class="col-md-4 col-12">
            <div class="card shadow">
              <p class="counter">
                <ICountUp
                :delay="delay"
                :endVal="endVal[0]"
                :options="options"
                @ready="onReady"
                />
              </p>
              <small class="counter-label">
                Treatments this year
              </small>
            </div>
          </div>

          <div class="col-md-4 col-12">
            <div class="card shadow">
              <p class="counter">
                <ICountUp
                :delay="delay"
                :endVal="endVal[1]"
                :options="options"
                @ready="onReady"
                />
              </p>
              <small class="counter-label">
                Cavities restored this year
              </small>
            </div>
          </div>

          <div class="col-md-4 col-12">
            <div class="card shadow">
              <p class="counter">
                <ICountUp
                :delay="delay"
                :endVal="endVal[2]"
                :options="options"
                @ready="onReady"
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
            <div class="card shadow">
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

    <!-- </div> -->
  </div>

    <b-toast id="error-toast" variant="danger" solid append-toast toaster="b-toaster-bottom-full">
      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
        <strong class="mr-auto">Login Error</strong>
      </div>
      <div v-if="errors.auth">
        <p>{{ errors.auth }}</p>
      </div>
      <div v-if="require_error.username">
        <p>{{ require_error.username }}</p>
      </div>
      <div v-if="require_error.password">
        <p>{{ require_error.password }}</p>
      </div>
    </b-toast>
  </div>
</div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
import LoginVisualization from './LoginPageVisualization';
import locationChart from '../js/locationchart.js';

const axios = require('axios');
export default {
  name: "LoginPage",
  components:{
    'LoginVisualization': LoginVisualization
  },
  computed: {
    ...mapState([
      'token','adminusername'
    ])
  },
  data() {
    return {
      username: '',
      password: '',
      errors: {'auth':''},
      require_error:[],
      delay: 100,
      endVal: '',
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
  },

  created(){
    var token = window.localStorage.getItem("token");
    if (token != undefined && token != ""){
      this.$router.replace("/dashboard");
    }
  },

  methods:{
    ...mapMutations([
      'setToken','setAdminUsername'
    ]),

    onReady: function(instance, CountUp) {
      const that = this;
      instance.update(that.arr(endVal));
    },

    processLogin(){
      this.require_error=[]
      if(this.$data.username==''){
        this.require_error['username']="Email required."
        this.$bvToast.show('error-toast');

      }
      else if(this.$data.password==''){
        this.require_error['password']="Password required."
        this.$bvToast.show('error-toast');
      }
      else{
        axios.post('http://104.155.163.124:3000/api/v1/checkuser',{'email':this.$data.username}).then(response=>{
          console.log(response.data)
          this.setAdminUsername(response.data.username)
          var formData = {'username': this.adminusername, 'password': this.$data.password}
          axios.post('http://104.155.163.124:3000/api/v1/token/obtain',formData)
          .then(response => {
            window.localStorage.setItem("token", response.data.token);
            this.setToken(response.data.token);
            axios.defaults.headers.common['authorization']  = 'JWT ' + response.data.token
            this.$router.replace("/dashboard");
          })
          .catch(error => {
            if(error){
              this.errors['auth'] = "Invalid username/password."
              this.$bvToast.show('error-toast');
            }
            this.errored = true;
          })
        })
        .catch(error => {
          if(error){
            this.errors['auth'] =  "Invalid username/password."
            this.$bvToast.show('error-toast');
          }this.errored = true;

        })
      }
    }

  }
};
</script>

<style lang="scss" scoped>
  @import "../css/loginpage.scss";

</style>
