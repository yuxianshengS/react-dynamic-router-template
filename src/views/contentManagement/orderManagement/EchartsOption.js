import { borderRadius } from "polished";

export function LineOption() {
  return {
    barCategoryGap: 0,
    grid: {
      top: 20,
      left: 40,
      right: 10,
      bottom: 20,
    },
    tooltip: {
      show: true,
      trigger: "axis",
      formatter: (data) => {
        const obj = data[1];
        return `
            <div>
                 <div>${obj.name}完成</div>
                 <div>${obj.value}单</div>
             </div>
        `;
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: "#E0E6F1",
        },
      },
      axisLabel: {
        color: "#6C6C6C",
      },
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        lineStyle: {
          color: "#6C6C6C",
        },
      },
    },
    series: [
      {
        name: "流出量2",
        data: [3, 200, 20, 300, 1100, 40, 713, 70, 29, 40],
        type: "line",
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 0,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0, // 渐变起点 x 坐标
            y: 0, // 渐变起点 y 坐标
            x2: 0, // 渐变终点 x 坐标
            y2: 1, // 渐变终点 y 坐标（从上到下）
            colorStops: [
              { offset: 0, color: "#C9C7FF" }, // 渐变的起始颜色
              { offset: 0.1, color: "#C9C7FF" }, // 渐变的起始颜色
              { offset: 0.2, color: "#C9C7FF" }, // 渐变的起始颜色
              { offset: 0.3, color: "#C9C7FF" }, // 渐变的起始颜色
              { offset: 0.4, color: "#C9C7FF" }, // 渐变的起始颜色
              { offset: 0.5, color: "#C9C7FF" }, // 渐变的起始颜色
              { offset: 0.6, color: "#C9C7FF" }, // 渐变的起始颜色
              { offset: 1, color: "#FFF" }, // 渐变的结束颜色
            ],
            globalCoord: false,
          },
        },
        symbol: "none",
        // emphasis:{},
        z: 0, // 设置图形的层级
      },
      {
        name: "流出量",
        data: [3, 100, 20, 300, 1000, 40, 613, 70, 29, 40],
        type: "line",
        smooth: true,
        showSymbol: false,
        symbol: "circle", // 标点形状，可以是 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbolSize: 8, // 标点大小
        itemStyle: {
          color: "#2001B1", // 标点颜色
          borderColor: "#FFF", // 标点边框颜色（用于实心标点的边框）
          borderWidth: 1, // 标点边框宽度（用于实心标点的边框）
        },
        lineStyle: {
          color: "#fff",
          width: 1,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0, // 渐变起点 x 坐标
            y: 0, // 渐变起点 y 坐标
            x2: 0, // 渐变终点 x 坐标
            y2: 1, // 渐变终点 y 坐标（从上到下）
            colorStops: [
              { offset: 0, color: "#2001B1" }, // 渐变的起始颜色
              { offset: 0.1, color: "#2001B1" }, // 渐变的起始颜色
              { offset: 0.2, color: "#2001B1" }, // 渐变的起始颜色
              { offset: 0.3, color: "#2001B1" }, // 渐变的起始颜色
              { offset: 0.4, color: "#2001B1" }, // 渐变的起始颜色
              { offset: 0.5, color: "#2001B1" }, // 渐变的起始颜色
              { offset: 0.6, color: "#2001B1" }, // 渐变的起始颜色
              { offset: 1, color: "#fff" }, // 渐变的结束颜色
            ],
            globalCoord: true,
          },
        },
        z: 1, // 设置图形的层级
      },
    ],
    axisPointer: {
      type: "shadow",
      lineStyle: {
        color: "#fff",
        width: 1, // 悬浮时坐标线的宽度
        type: "dashed", // 悬浮时坐标线的样式
        shadowColor: "#000",
        shadowBlur: 4,
        opacity: 1,
      },
    },
  };
}

export function GaugeOption() {
  const values = 70;
  return {
    series: [
      {
        type: "gauge",
        // radius: 150,
        z: 1,
        center: ["50%", "70%"],
        startAngle: 170,
        endAngle: 10,
        splitNumber: 70,
        splitLine: {
          show: true,
          length: 20,
          distance: -20,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        detail: {
          show: true,
          offsetCenter: [0, 60],
          fontSize: 14,
          formatter: (val) => {
            return [`平均{a|${val}}分钟/单`].join("");
          },
          rich: {
            a: {
              fontSize: 20,
              color: "rgba(84, 108, 198, 0.65)",
            },
            b: {
              fontSize: 24,
              color: "rgba(84, 108, 198, 0.65)",
            },
          },
        },
        axisLine: {
          show: true,
          roundCap: false,
          lineStyle: {
            width: 20,
            color: [
              [
                values / 100,
                {
                  x: 0,
                  y: 0,
                  x1: 1,
                  y1: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(0, 255, 255, 0.6)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0, 0, 255, .6)",
                    },
                  ],
                },
              ],
              [1, "rgba(0,0,0,0.15)"],
            ],
          },
        },
        axisTick: { show: false },
        axisLabel: { show: false },
        pointer: {
          length: "100%",
          width: 3,
        },

        data: [
          {
            value: values,
          },
        ],
      },
    ],
  };
}

export function PieOption() {
  let dashedPic =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC";
  let color = ["#552FFE", "#FB8227", "#F8C937", "#0E9A10"];
  let chartData = [
    {
      name: "App订单占比",
      value: 1231,
      unit: "元",
    },
    {
      name: "小程序订单占比",
      value: 500,
      unit: "元",
    },
    {
      name: "PC端订单占比",
      value: 400,
      unit: "元",
    },
    {
      name: "其他订单占比",
      value: 230,
      unit: "元",
    },
  ];
  let sum = 0;
  let pieSeries = [],
    lineYAxis = [];

  // 数据处理
  chartData.forEach((v, i) => {
    sum = sum + v.value;
  });

  // 图表option整理
  chartData.forEach((v, i) => {
    pieSeries.push({
      type: "pie",
      clockWise: false,
      hoverAnimation: false,
      radius: [65 - i * 15 + "%", 57 - i * 15 + "%"],
      center: ["30%", "50%"],
      label: { show: false },
      data: [
        {
          value: v.value,
          name: v.name,
        },
        {
          value: sum - v.value,
          name: "",
          itemStyle: {
            color: "rgba(0,0,0,0)",
          },
        },
      ],
    });
    pieSeries.push({
      name: "",
      type: "pie",
      silent: true,
      z: 1,
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [65 - i * 15 + "%", 57 - i * 15 + "%"],
      center: ["30%", "50%"],
      label: {
        show: false,
      },
      data: [
        {
          value: 7.5,
          itemStyle: {
            color: "#E3F0FF",
          },
        },
        {
          value: 2.5,
          name: "",
          itemStyle: {
            color: "rgba(0,0,0,0)",
          },
        },
      ],
    });
    v.percent = ((v.value / sum) * 100).toFixed(1) + "%";
    lineYAxis.push({
      value: i,
      textStyle: {
        rich: {
          circle: {
            color: color[i],
            padding: [0, 5],
          },
        },
      },
    });
  });

  return {
    backgroundColor: "#fff",
    color: color,
    grid: {
      top: "15%",
      bottom: "54%",
      left: "30%",
      containLabel: false,
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 20,
          formatter: function (params) {
            let item = chartData[params];
            console.log(item);
            return `{line|}{circle|●}{name|${item.name}} {circle|${item.percent}}`;
          },
          interval: 0,
          inside: true,
          rich: {
            line: {
              width: 170,
              height: 10,
              backgroundColor: {
                image: dashedPic,
              },
            },
            name: {
              color: "#333",
            },
          },
          show: true,
        },
        data: lineYAxis,
      },
    ],
    xAxis: [
      {
        show: false,
      },
    ],
    series: pieSeries,
  };
}
