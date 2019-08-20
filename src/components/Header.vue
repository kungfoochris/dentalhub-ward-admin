<template>
<div id="app" class="header">
  <b-navbar toggleable="lg" type="light" fixed="top">
    <b-navbar-brand to="/">Dental App</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/dashboard">Dashboard</b-nav-item>
        <!-- <b-nav-item to="/users">Users</b-nav-item> -->
        <!-- <b-nav-item to="/geography">Area</b-nav-item> -->
        <!-- <b-nav-item to="/activity">Activity</b-nav-item> -->
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <!-- <form class="form-inline d-none d-md-block d-lg-block d-xl-block" v-if="this.$route.name == 'users'">
          <div class="input-group mr-4">
            <div class="input-group-prepend">
              <span class="input-group-text" id="search-button"><i class="fas fa-search"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="Search Users" aria-label="Search Users" aria-describedby="search-button">
          </div>
        </form> -->
        <b-nav-item class="settings" to="settings"><span class="d-none d-sm-none d-md-none d-lg-inline"><i class="fas fa-cog"></i></span><span class="icon-label d-sm-inline d-md-inline d-lg-none">Settings</span></b-nav-item>
        <b-nav-item to="/logout"><span class="d-none d-sm-none d-md-none d-lg-inline"><i class="fas fa-sign-out-alt"></i></span><span class="icon-label d-sm-inline d-md-inline d-lg-none">Logout</span></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</div>
</template>

<script>

export default {
  name: "AppHeader",
  components:{

  },

  data() {
    return {
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../css/header';

</style>
