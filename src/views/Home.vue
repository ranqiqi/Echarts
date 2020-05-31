<template>
  <div class="home">
    <!-- 定义的容器 -->
    <div id="myChart" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "Home",
  mounted() {
    this.SetEchart();
  },
  methods: {
    SetEchart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      var option = {
        // 标题
        title: {
          // 主标题
          text: "某地区蒸发量和降水量",
          // 副标题
          subtext: "纯属虚构"
        },
        // 气泡提示
        tooltip: {
          // axis 指的是在轴上显示   item 指的是鼠标在内容上显示（默认）
          trigger: "axis"
        },
        // 图例
        legend: {
          data: ["蒸发量", "降水量"]
        },
        // 右上角的工具
        toolbox: {
          // 是否显示工具箱 true显示 false不显示
          show: true,
          // 提供哪些工具
          feature: {
            // 数据视图
            dataView: {
              // 是否显示
              show: true,
              // 是否只读 false可修改  true只读
              readOnly: false
            },
            // 切换样式
            magicType: {
              // 显示柱状图 图标和折线图 图标
              show: true,
              // 定义切换类型 line折线图 bar柱状图
              type: ["line", "bar"]
            },
            // 相当于刷新 还原
            restore: { show: true },
            // 下载图标 点击下载成图片
            saveAsImage: { show: true }
          }
        },
        // 是否实现拖拽重新计算
        calculable: true,
        // X坐标轴
        xAxis: [
          {
            // 类别
            type: "category",
            // 定义数据
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        // Y坐标轴
        yAxis: [
          {
            type: "value"
            // 定义data 就是自己设置的，不定义就是自动设置
          }
        ],
        // 序列
        series: [
          {
            // 与上面图例里的要一致
            name: "蒸发量",
            // 显示类型
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ],
            // 标注  的数据数组。每个数组项是一个对象
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            // 标线
            markLine: {
              data: [
                // 支持 'average', 'min', 'max'
                { type: "average", name: "平均值" }
              ]
            }
          },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ],
            markPoint: {
              data: [
                { name: "年最高", value: 182.2, xAxis: 7, yAxis: 183 },
                { name: "年最低", value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
