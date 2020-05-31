<template>
  <div>
    <div id="radar" style="width: 700px;height:600px;"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.SetRadarEchart();
  },
  methods: {
    SetRadarEchart() {
      let myChart = this.$echarts.init(document.getElementById("radar"));
      var option = {
        // 标题
        title: {
          text: "基础雷达图"
        },
        // 冒泡提示框
        tooltip: {},
        // 图例
        legend: {
          data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"],
          x:"right",
          orient: "vertical",
        },
        // 极坐标 只用于雷达图
        radar: {
          // shape: 'circle',
          // 表示的项的名字的样式
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          // 类目项
          indicator: [
            // 定义类目项的名称，及最大值表示  还可以定义最小值min 颜色 color
            { name: "销售（sales）", max: 6500 },
            { name: "管理（Administration）", max: 16000 },
            { name: "信息技术（Information Techology）", max: 30000 },
            { name: "客服（Customer Support）", max: 38000 },
            { name: "研发（Development）", max: 52000 },
            { name: "市场（Marketing）", max: 25000 }
          ]
        },
        // 系列
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // 区域填充
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "预算分配（Allocated Budget）"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "实际开销（Actual Spending）"
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
</style>