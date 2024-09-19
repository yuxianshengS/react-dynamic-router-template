import React, { useState, useEffect, useRef } from "react";
import { Tabs, Card, Radio, DatePicker } from "antd";
import * as echarts from "echarts";
import {
  LineOption,
  PieOption,
  RosePieOption,
  CandlestickOption,
} from "../EchartsOption";
import styles from "./index.module.less";
export default function UserAnalysisPage() {
  const EchartLineRef = useRef(null);
  const EchartPieRef = useRef(null);
  const EchartRosePieRef = useRef(null);
  const EchartCandlestickRef = useRef(null);

  const Tables = (
    <>
      <div className="flex">
        <div className="flex-2">
          <Card className="mr-20 module_card">
            <div className="flex-vcenter flex-between">
              <div className="module_card_title">
                新安装用户数及安装活跃转化率
              </div>
              <Radio.Group size="small" defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">本月</Radio.Button>
                <Radio.Button value="b">本周</Radio.Button>
                <Radio.Button value="c">今日</Radio.Button>
                <Radio.Button value="d">昨日</Radio.Button>
              </Radio.Group>
            </div>

            <div ref={EchartLineRef} style={{ height: 280 }}></div>
          </Card>
        </div>

        <div className="flex-1">
          <Card className="module_card">
            <div className="flex-vcenter flex-between">
              <div className="module_card_title">用户价位占比</div>
            </div>
            <div ref={EchartPieRef} style={{ height: 280 }}></div>
          </Card>
        </div>
      </div>
      <div className="flex mt-20">
        <div className="flex-1">
          <Card className="module_card mr-20">
            <div className="flex-vcenter flex-between">
              <div className="module_card_title">用户住宿关注点</div>
            </div>
            <div ref={EchartRosePieRef} style={{ height: 280 }}></div>
          </Card>
        </div>

        <div className="flex-2">
          <Card className="module_card">
            <div className="flex-vcenter flex-between">
              <div className="module_card_title">新增访客趋势</div>
              <DatePicker />
            </div>

            <div ref={EchartCandlestickRef} style={{ height: 280 }}></div>
          </Card>
        </div>
      </div>
    </>
  );
  const items = [{ key: "1", label: "用户分析", children: Tables }];

  useEffect(() => {
    init();
  }, []);

  function init() {
    const myChart1 = echarts.init(EchartLineRef.current);
    myChart1.setOption(LineOption());

    const myChart2 = echarts.init(EchartPieRef.current);
    myChart2.setOption(PieOption());

    const myChart3 = echarts.init(EchartRosePieRef.current);
    myChart3.setOption(RosePieOption());

    const myChart4 = echarts.init(EchartCandlestickRef.current);
    myChart4.setOption(CandlestickOption());
  }

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Tabs
      className={styles.root}
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      indicator={{ size: (origin) => origin - 60, height: 5, align: "center" }}
    />
  );
}
