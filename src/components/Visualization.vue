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
  props:["tag"],
  components:{
  },
  mounted: function(){
    // write a condition to check visualization has been set in state
    //  no need to pass cleanData

  },
  computed: {
    ...mapState([
      'genderchart','wardsettingsgraph','wardtreatmentsgraph','warduserlinegraph'
    ])
  },
  watch: {
    wardtreatmentsgraph: function(){
    if(this.wardtreatmentsgraph.locationChart){
          this.createTreatmentChart();
        }
    },

    wardsettingsgraph: function(){
      if(this.wardsettingsgraph.locationChart){
        this.createWardSettingGraph();
      }
    },

    genderchart: function(){
      if(this.genderchart.locationChart){
        this.createGenderChart();
      }
    },

    warduserlinegraph: function(){
      if(this.warduserlinegraph.locationChart){
        this.createWardUserLineChart();
      }
    }
  },

  created(){
    this.listGenderChart();
    this.listWardSettingGraphs();
    this.listWardTreatmentGraphs();
    this.listWardUserLineGraphs();
    // this.listVisualizationChart();
    // this.listTreatmentBarVisualization();
    // this.listLoginVisualization();
  },
  methods:{
    ...mapActions(['listGenderChart','listWardSettingGraphs','listWardTreatmentGraphs','listWardUserLineGraphs']),

    createGenderChart() {
      const ctx = document.getElementById('genderbargraph');
      // ctx.height = 300;
      const _ = new Chart(ctx, {
        // type: chartData.type,
        type: 'bar',
        data: this.genderchart.locationChart.data,
        options: this.genderchart.locationChart.options,
      });
    },

    createWardSettingGraph() {
      const ctx = document.getElementById('lch');
      // ctx.height = 300;
      const _ = new Chart(ctx, {
        // type: chartData.type,
        type: 'pie',
        data: this.wardsettingsgraph.locationChart.data,
        options: this.wardsettingsgraph.locationChart.options,
      });
    },

    createTreatmentChart() {
      const ctx = document.getElementById('treatmentbargraph');
      // ctx.height = 300;
      const _ = new Chart(ctx, {
        // type: chartData.type,
        type: 'bar',
        data: this.wardtreatmentsgraph.locationChart.data,
        options: this.wardtreatmentsgraph.locationChart.options,
      });
    },

    createWardUserLineChart() {
      const ctx = document.getElementById('uch');
      // ctx.height = 300;
      const _ = new Chart(ctx, {
        // type: chartData.type,
        type: 'line',
        data: this.warduserlinegraph.locationChart.data,
        options: this.warduserlinegraph.locationChart.options,
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
