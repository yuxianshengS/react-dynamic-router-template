import React, { useEffect, useState, useRef } from "react";
import { Card, Radio, Progress, Button, Table, List } from "antd";
import VirtualList from "rc-virtual-list";
import * as echarts from "echarts";
import "echarts-liquidfill";
import styles from "./index.module.less";

export default function HomePage() {
  const EchartRef = useRef([]);
  const EchartLineRef = useRef(null);
  const EchartCircleRef = useRef(null);
  const EchartRadarRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const pageviewsList = [
    { value: 440, title: "今日访问量", data: [2, 5, 4, 9, 4, 5, 7] },
    { value: 440, title: "昨日访问量", data: [2, 5, 4, 9, 4, 5, 7] },
    { value: 440, title: "本周访问量", data: [2, 5, 4, 9, 4, 5, 7] },
    { value: 440, title: "本月访问量", data: [2, 5, 4, 9, 4, 5, 7] },
  ];

  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "名宿名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "城市",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "价格",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "时间",
      dataIndex: "address",
      key: "address",
    },
  ];

  const listData = [
    { name: "asa" },
    { name: "asa" },
    { name: "asa" },
    { name: "asa" },
    { name: "asa" },
    { name: "asa" },
    { name: "asa" },
    { name: "asa" },
    { name: "asa" },
  ];

  useEffect(() => {
    getEcharts();
  }, []);

  function getEcharts() {
    const option = {
      barCategoryGap: 0,
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      xAxis: {
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        data: ["A", "B", "C", "D", "E", "F", "G"],
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false },
      },
      series: [
        {
          name: "Example",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20, 30],
        },
      ],
    };
    EchartRef.current.forEach((item) => {
      const myChart = echarts.init(item);
      myChart.setOption(option);
    });

    const option2 = {
      color: ["#FB8028", "#2E06D1"],
      barCategoryGap: 0,
      grid: {
        top: 20,
        left: 40,
        right: 100,
        bottom: 20,
      },
      legend: {
        show: true,
        orient: "vertical",
        top: 10,
        right: 10,
        data: ["流出量", "流入量"],
      },
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          crossStyle: "cross",
        },
        formatter: (data) => {
          let dom = "";
          data.forEach((item) => {
            dom += `<div>
              <span>${item.seriesName}:</span>
              <span style="color:${item.color}">${item.data}</span>
            </div>`;
          });
          return dom;
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
        data: [
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
        ],
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
          name: "流出量",
          data: [3, 12, 30, 35, 38, 40, 48, 70, 29, 40],
          type: "line",
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 3,
            // 设置阴影效果
            shadowBlur: 3,
            shadowColor: "rgba(0, 0, 0, 0.5)",
            shadowOffsetX: 10,
            shadowOffsetY: 5,
          },
        },

        {
          name: "流入量",
          data: [0, 45, 11, 26, 28, 27, 33, 14, 29, 56],
          type: "line",
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 3,
            // 设置阴影效果
            shadowBlur: 3,
            shadowColor: "rgba(0, 0, 0, 0.5)",
            shadowOffsetX: 10,
            shadowOffsetY: 5,
          },
        },
      ],
    };
    const myChart2 = echarts.init(EchartLineRef.current);
    myChart2.setOption(option2);

    const option3 = {
      title: {
        top: 20,
        text: "网站空间：",
        textStyle: {
          fontWeight: 500,
          fontSize: 16,
        },
      },
      series: [
        {
          type: "liquidFill",
          radius: "60%",
          color: ["#F89D2A"],
          center: ["50%", "60%"],
          data: [0.5, 0.5, 0.5, 0.5],
          amplitude: 15,
          // waveAnimation: false,
          // animationDuration: 0,
          // animationDurationUpdate: 0,
          animationEasing: "cubicOut", //当波浪从底部开始上升时，初始动画的简化方法。
          itemStyle: {
            opacity: 0.8, // 波浪的透明度
            shadowBlur: 10, // 波浪的阴影范围
          },
          outline: {
            show: true, // 显示轮廓
            borderDistance: 0, // 轮廓的边距，设置为 0 表示没有额外的边距
            itemStyle: {
              borderWidth: 4, // 边框的粗细
              borderColor: "#FC8424", // 边框的颜色
            },
          },
          backgroundStyle: {
            borderWidth: 2, //内边框
            borderColor: "#F9C739", // 边框的颜色
            color: "#fff",
          },
          label: {
            textStyle: {
              fontSize: 20, // 字体大小
              color: "#000",
            },
            position: ["50%", "20%"],
          },
        },
      ],
    };
    const myChart3 = echarts.init(EchartCircleRef.current);
    myChart3.setOption(option3);

    const option4 = {
      color: ["#F4C734", "#945AAD"],
      legend: {
        show: true,
        orient: "vertical",
        bottom: 0,
        right: 10,
        data: ["4月", "5月"],
      },
      title: {
        top: 20,
        text: "网站空间：",
        textStyle: {
          fontWeight: 500,
          fontSize: 16,
        },
      },
      symbol: "none",
      radar: {
        axisName: {
          color: "#000",
        },
        axisLabel: {
          show: true,
          formatter: function (value, index) {
            return value;
          },
          color: "#333",
        },
        indicator: [
          { name: "口碑", max: 6500 },
          { name: "热度", max: 16000 },
          { name: "销量", max: 30000 },
          { name: "日活", max: 38000 },
          { name: "推广", max: 52000 },
        ],
      },
      series: [
        {
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "4月",
              areaStyle: {},
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "5月",
              areaStyle: {},
            },
          ],
        },
      ],
    };
    const myChart4 = echarts.init(EchartRadarRef.current);
    myChart4.setOption(option4);
  }

  return (
    <div className={styles.root}>
      <div className="home_left_module">
        <div className="flex">
          {pageviewsList.map((item, index) => (
            <Card
              key={item.title}
              className="module_card"
              style={{
                marginRight: 20,
                width: "25%",
              }}
              loading={loading}
            >
              <div className="flex-vcenter">
                <div className="mr-5">
                  <div className="mb-16">{item.value}</div>
                  <div>{item.title}</div>
                </div>
                <div
                  ref={(el) => (EchartRef.current[index] = el)}
                  style={{ width: 120, height: 55 }}
                ></div>
              </div>
            </Card>
          ))}
        </div>

        <Card
          className="module_card"
          style={{
            marginTop: 20,
            marginRight: 20,
          }}
          loading={loading}
        >
          <div className="flex-vcenter flex-between">
            <div className="module_card_title">访问时长统计</div>
            <Radio.Group size="small" defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">本月</Radio.Button>
              <Radio.Button value="b">本周</Radio.Button>
              <Radio.Button value="c">今日</Radio.Button>
              <Radio.Button value="d">昨日</Radio.Button>
            </Radio.Group>
          </div>

          <div ref={EchartLineRef} style={{ height: 280 }}></div>
        </Card>

        <div className="mt-20 flex">
          <Card className="module_card flex-1 mr-20" loading={loading}>
            <div ref={EchartRadarRef} style={{ height: 280 }}></div>
          </Card>

          <Card
            style={{ flex: 1.5 }}
            className="module_card mr-20"
            loading={loading}
          >
            <div style={{ height: 280 }}>
              <div className="module_card_title">房东新入住</div>
              <Table
                pagination={false}
                dataSource={dataSource}
                columns={columns}
                scroll={{ y: 200 }}
              />
            </div>
          </Card>
        </div>
      </div>
      <div className="flex-1">
        <Card className="module_card h-476" loading={loading}>
          <div className="module_card_title">运营情况</div>
          <div className="pl-10">
            <div className="module_card_desc">网站运营时长：722天</div>
            <Progress
              status="normal"
              percent={68}
              format={(percent) => `2020`}
              strokeColor={{ 0: "#FC8424", 100: "#F9C739" }}
            />

            <div className="mt-10 flex-vcenter flex-between">
              <div className="module_card_domain">
                https://zh-hans.react.dev/
              </div>
              <Button size="small" className="module_card_btn">
                续费
              </Button>
            </div>

            <div
              ref={EchartCircleRef}
              style={{ width: "100%", height: 250 }}
            ></div>

            <div className="flex-vhcenter">
              <div className="mr-20 module_card_domain">52.1/1000m</div>
              <div className="module_card_text">扩充空间容量</div>
            </div>

            <div className="module_card_desc">今日浏览量：6080</div>
          </div>
        </Card>

        <Card className="mt-20 module_card" loading={loading}>
          <div style={{ height: 280 }}>
            <div className="module_card_title">通知/公告</div>
            <List>
              <VirtualList
                data={listData}
                height={250}
                itemHeight={20}
                itemKey="email"
              >
                {(item) => (
                  <List.Item key={item.email}>
                    <div>Content</div>
                  </List.Item>
                )}
              </VirtualList>
            </List>
          </div>
        </Card>
      </div>
    </div>
  );
}
