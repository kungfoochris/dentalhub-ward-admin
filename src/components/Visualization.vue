<template>
<div id="app" class="app-content">
  <canvas :id="tag"></canvas>
  <div class="row pr-4">
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
      'visualizations','visualizations1'
    ])
  },
  watch: {
    visualizations: function(old,n){
    if(this.visualizations.locationChart){
          this.createChart(this.tag, this.type);
        }
    },

    visualizations1: function(old,n){
      if(this.visualizations1.locationChart){
        this.createChart1(this.tag, this.type);
      }
    }
  },

  created(){
    this.listVisualization();
    this.listVisualizationChart();
  },
  methods:{
    ...mapActions(['listVisualization','listVisualizationChart']),


    createChart(chartId, chartType) {
      // we read the cleandata here from visualizations in state as shown below
      // and update the arguments in Chart() based on read data.
      //var d = this.state.visualizations.get(this.tag) 
      // var d = this.state.visualizations.get(this.tag) 
      const ctx = document.getElementById('uch');
      // ctx.height = 300;
      const _ = new Chart(ctx, {
        // type: chartData.type,
        type: 'bar',
        data: this.visualizations.locationChart.data,
        options: this.visualizations.locationChart.options,
      });
    },

    createChart1(chartId, chartType) { 
      const ctx = document.getElementById('lch');
      // ctx.height = 300;
      const _ = new Chart(ctx, {
        // type: chartData.type,
        type: 'pie',
        data: this.visualizations1.locationChart.data,
        options: this.visualizations1.locationChart.options,
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
