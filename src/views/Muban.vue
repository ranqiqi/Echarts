<template>
  <div>
    <div id="pie" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.SetPieEchart();
  },
  methods: {
    SetPieEchart() {
      let myChart = this.$echarts.init(document.getElementById("pie"));
      var option = {
        
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
</style>