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
        title: {
          text: "推广效果",
          // 位置
          x: "center"
        },
        // 冒泡提示框
        tooltip: {
          // 是否有
          show: true,
          // 触发类型 在移至内容上时显示
          trigger: "item",
          // 显示格式  a（系列名称）  b（数据项名称）  c（数值）  d（饼图：百分比 | 雷达图：指标名称）
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 图例
        legend: {
          // 布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'
          orient: "vertical",
          // 位置 水平  最左边
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        // 工具箱
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            // 可视数据
            dataView: {
              show: true,
              readOnly: true
            },

            restore: {
              show: true
            },
            // 下载
            saveAsImage: {
              show: true
            }
          }
        },
        // 是否可拖动
        calculable: true,
        // 系列
        series: [
          {
            name: "访问来源",
            type: "pie",
            // 半径   内半径  外半径    仅仅为"70%"时只有一个圆环
            radius: ["31%", "70%"],
            // center : ["50%","60%"]
            // 圆心坐标，支持绝对值(px)
            avoidLabelOverlap: false,
            // 标记
            label: {
              show: false,
              //   位置在中心
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                textStyle: {
                  fontSize: "14",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 335,
                name: "直接访问"
              },
              {
                value: 310,
                name: "邮件营销"
              },
              {
                value: 234,
                name: "联盟广告"
              },
              {
                value: 135,
                name: "视频广告"
              },
              {
                value: 1548,
                name: "搜索引擎"
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