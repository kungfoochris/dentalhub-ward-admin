<template>
<div id="app" class="app-content">
  <canvas :id="tag"></canvas>
  <div class="row pr-4 pt-3">
    <small class="ml-auto"><a href=""><i class="fas fa-file-export mr-1"></i>Export Now</a></small>
  </div>
</div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
export default {
  name: "Visualization",
  props:["cleanData","tag","tagone","type","typeone"],
  components:{
  },
  mounted: function(){
    // write a condition to check visualization has been set in state
    //  no need to pass cleanData
    
  },
  computed: {
    ...mapState([
      'visualizations','visualizations1','treatmentnargraph','loginvisualization'
    ])
  },
  watch: {
    treatmentnargraph: function(old,n){
    if(this.treatmentnargraph.locationChart){
          this.createChart();
        }
    },

    loginvisualization: function(old,n){
      if(this.loginvisualization.locationChart){
        this.createChart1();
      }
    }
  },

  created(){
    this.listVisualization();
    this.listVisualizationChart();
    this.listTreatmentBarVisualization();
    this.listLoginVisualization();
  },
  methods:{
    ...mapActions(['listVisualization','listVisualizationChart','listTreatmentBarVisualization','listLoginVisualization']),


    createChart() {
      // we read the cleandata here from visualizations in state as shown below
      // and update the arguments in Chart() based on read data.
      //var d = this.state.visualizations.get(this.tag) 
      // var d = this.state.visualizations.get(this.tag) 
      const ctx = document.getElementById('uch');
      // ctx.height = 300;
      // ctx.height = 385;
      // ctx.width = 770;
      const _ = new Chart(ctx, {
        // type: chartData.type,
        type: 'bar',
        data: this.treatmentnargraph.locationChart.data,
        options: this.treatmentnargraph.locationChart.options,
      });
    },

    createChart1() { 
      const ctx = document.getElementById('lch');
      // ctx.height = 300;
      const _ = new Chart(ctx, {
        // type: chartData.type,
        type: 'pie',
        data: this.loginvisualization.locationChart.data,
        options: this.loginvisualization.locationChart.options,
      });
    },

    // ExportData(){
    //   this.$store.dispatch("exportData", {})
    // }


  },

  data(){
    return{

    }
  },



};
</script>

<style lang="scss" scoped>
  @import '../css/style.scss';
</style>
