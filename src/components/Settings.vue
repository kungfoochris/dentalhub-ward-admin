<template>
<div id="app">

  <app-header></app-header>
  <div class="contents">
    <div class="row">
      <div class="col-12">
        <h1>Settings</h1>
        <p>
           Settings for Dental Hub Ward Admin
        </p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <b-form class="card shadow">
          <h3 class="pb-3">Change Password</h3>
          <b-form-input type="password" class="mb-3" v-model="old_password" placeholder="Old Password"></b-form-input>
          <b-form-input type="password" class="mb-3" v-model="new_password" placeholder="New Password"></b-form-input>
          <b-form-input type="password" class="mb-3" v-model="confirm_password" placeholder="Confirm Password"></b-form-input>

          <b-button variant="custom" @click="changePassword">Change Password</b-button>
        </b-form>
      </div>
    </div>

    <b-toast id="error-toast" variant="warning" solid append-toast toaster="b-toaster-bottom-full">
      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
        <strong class="mr-auto">Error!!!</strong>
      </div>
      <div v-if="message">
        <p v-if="message.length>0">{{message}}</p>
      </div>
      <div v-if="errors.old_password">
        <p>{{ errors.old_password }}</p>
      </div>
      <div v-if="errors.new_password">
        <p>{{ errors.new_password }}</p>
      </div>
      <div v-if="errors.confirm_password">
        <p>{{ errors.confirm_password }}</p>
      </div>

      <div v-if="errors.password_error">
        <p>{{ errors.password_error }}</p>
      </div>
      <div v-if="errors.password_length">
        <p>{{ errors.password_length }}</p>
      </div>
    </b-toast>

    <b-toast id="success-toast" variant="custom-success" solid append-toast toaster="b-toaster-bottom-full">
      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
        <strong class="mr-auto">Password Changed</strong>
      </div>
        Your password is successfully changed.
    </b-toast>
  </div>
</div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
import AppHeader from './Header.vue'


// const axios = require('axios');
export default {
  name: "Settings",
  components:{
    // "AuthenticationForm": AuthenticationForm
    'app-header': AppHeader
  },
  computed: {
    ...mapState(['token','message','successmessage','errormessage'])
  },

  created(){
    // var token = window.localStorage.getItem("token");
    // if (token != undefined && token != ""){
    //   this.$router.replace("/app");
    // }
  },

  data() {
    return {
      old_password: '',
      new_password: '',
      confirm_password:'',
      password_error:'',
      password_length:'',
      errors:[],
    }
  },

  methods:{
    ...mapActions([ ]),
    changePassword(){
      this.errors=[]
      if(this.old_password==''){
        this.errors['old_password']="Old Password required."
        this.$bvToast.show('error-toast');
      }else if(this.new_password == ''){
        this.errors['new_password']="New Password required."
        this.$bvToast.show('error-toast');
      }else if (this.new_password.length<8){
        this.errors['password_length']="Password must be at least 8 Character length."
        this.$bvToast.show('error-toast');
      }else if(this.confirm_password == ''){
        this.errors['confirm_password'] = "Confirm Password required."
        this.$bvToast.show('error-toast');
      }else if(this.new_password!=this.confirm_password){
        this.errors['password_error'] = "Password do not match."
        this.$bvToast.show('error-toast');
      }
      else(
        this.$store.dispatch("changePassword", {
          'old_password': this.old_password,
          'new_password':this.new_password ,
          'confirm_password':this.confirm_password,
        }).then(() => {
          if(this.successmessage=='success'){
            this.$bvToast.show('success-toast');
            this.old_password = '';
            this.new_password = '';
            this.confirm_password = '';
          }else if(this.errormessage=='errormessage'){
            this.$bvToast.show('error-toast');

          }
        })
        )
    },

  }
};
</script>

<style lang="scss" scoped>
  @import "../css/settings.scss";

</style>
