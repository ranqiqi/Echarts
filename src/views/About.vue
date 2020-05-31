<template>
  <div>
    <div id="line" style="width: 700px;height:400px;"></div>
  </div>
</template>

<script>
export default {
  
  methods: {
    SetLineEchart() {
      let myChart = this.$echarts.init(document.getElementById("line"));

      var option = {
        title: {
          text: "气温変化",
          subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最高", "最低"]
        },
        toolbox: {
          show: true,
          orient: "horizontal",
          //布局方式.默认水平布局，可为:'horizontal'   'vertical'
          left: "right",
          //left的値可以是像20这祥的具体像素値.可以是像'20%' 这祥相対于容器宽高的百分比.也可以是'left', 'center','right'
          top: "top",
          //top的値可以是像20区祥的具体像素値.可以是像'20%' 込祥相対于容器高寛的百分比.也可以是'top', 'middle', ' bottom'
          //x: 'right',
          // 水平安放位置.默认全图右对齐.可为:'center'  'left'  'right' 或   {number} (x坐标， 単位px)
          //y: 'top',
          // 垂直安放位置，默认全图顶端.可为:'top'  'bottom'  'center ' 或  {number} (y坐标，单位px)
          backgroundColor: "rgba(0,0,0,0)", // 工具箱背景颜色
          borderColor: "#ccc", // 工具箱边框颜色
          borderwlmyth: 0, // 工具箱辺框线宽，単位px， 默人为0 (无边框)
          padding: 5, // 工具箱内迹距 単位px  默认各方向内边距5.
          showTitle: true,
          feature: {
            mark: {
              show: true,
              title: {
                mark: "辅助线-开关",
                markUndo: "辅助线- 刪除",
                markClear: " 辅助线-清空"
              },
              lineStyle: {
                width: 1,
                color: "#le90ff",
                type: "dashed"
              }
            },
            dataZoom: {
              show: true,
              title: {
                dataZoom: "区域缩放"
              }
            },
            dataView: {
              show: true,
              title: "数据视图",
              readOnly: true,
              lang: ["数据视图", "关闭", "刷新"],
              optionToContent: function(opt) {
                console.log(opt);
                var axisData = opt.xAxis[0].data;
                var series = opt.series;
                var table =
                  '<table style="width: 190%; text- align:center"><tbody><tr>' +
                  "<td>时间</td> " +
                  "<td>" +
                  series[0].name +
                  "</td> " +
                  "<td>" +
                  series[1].name +
                  "</td>" +
                  "</tr>";
                for (var i = 0, l = axisData.length; i < l; i++) {
                  table +=
                    "<tr> " +
                    "<td>" +
                    axisData[i] +
                    "</td>" +
                    "<td>" +
                    series[0].data[i] +
                    "</td>" +
                    "<td>" +
                    series[1].data[i] +
                    "</td>" +
                    "</tr>";
                }
                table += "</tbody></table>";
                return table;
              }
            },
            magicType: {
              show: true,
              title: {
                line: "动态类型切换-折线图",
                bar: "动态类型切换-堆积",
                stack: "动态类型切换-堆积",
                tiled: "动态类型切换-平铺"
              },
              type: ["line", "bar", "stack", "tiTed"]
            },
            restore: {
              show: true,
              title: "还原"
            },
            saveAsImage: {
              show: true,
              title: "保存为图片",
              type: "jpg",
              lang: ["点击本地保存"]
            }
          }
        },
        dataZoom: {
          //数据区 域缩放控件
          show: true, //是否 显示数据区域缩放,
          realtime: true, //缩放变化是否实时显示
          start: 20, //数据缩放， 选择开始比例，默认为0 (%)
          end: 80 //数据缩放， 选择结束比例，默认为100 (%)
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false, //类目起始和结束兩端空白策略，见下图默认为 true留型. false则项头
            data: (function() {
              var list = [];
              for (var i = 1; i <= 30; i++) {
                list.push("2013-03-" + i);
              }
              return list;
            })()
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "最高",
            type: "line",
            data: (function() {
              var list = [];
              for (var i = 1; i <= 30; i++) {
                list.push(Math.round(Math.random() * 30));
              }
              return list;
            })()
          },
          {
            name: "最低",
            type: "line",
            data: (function() {
              var list = [];
              for (var i = 1; i <= 30; i++) {
                list.push(Math.round(Math.random() * 10));
              }
              return list;
            })()
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.SetLineEchart();
  }
};
</script>

<style scoped>
</style>