import React, { useState, useEffect, useRef } from "react";
import { Tabs, Card, Radio, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import * as echarts from "echarts";
import { LineOption, GaugeOption, PieOption } from "./EchartsOption";

export default function HousingManagementPage() {
  const EchartLineRef = useRef(null);
  const EchartGaugeRef = useRef(null);
  const EchartPieRef = useRef(null);

  const list = [
    {
      title: "今日订单数",
      num: "2350",
      icon: "icon-upper-right-arrow",
      color: "var(--PrimaryColor)",
      rate: "26.84%",
      icon2: "icon-order-success",
    },
    {
      title: "待入住订单",
      num: "853",
      icon: "icon-upper-right-arrow",
      color: "#FD8028",
      rate: "8.44%",
      icon2: "icon-application-record",
    },
    {
      title: "待付款订单",
      num: "124",
      icon: "icon-lower-right-arrow",
      color: "#148D15",
      rate: "0.86%",
      icon2: "icon-order-rejected",
    },
  ];

  const Tables = (
    <>
      <div className="flex">
        <div className="flex-1 mr-20">
          <Card className="mt-20 module_card">
            <div className="flex-vcenter flex-between">
              <div className="module_card_title">完成订单统计</div>
              <Radio.Group size="small" defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">本月</Radio.Button>
                <Radio.Button value="b">本周</Radio.Button>
                <Radio.Button value="c">今日</Radio.Button>
                <Radio.Button value="d">昨日</Radio.Button>
              </Radio.Group>
            </div>

            <div ref={EchartLineRef} style={{ height: 280 }}></div>
          </Card>

          <div className="flex">
            <div className="flex-1">
              <Card className="mt-20 mr-20 module_card">
                <div className="flex-vcenter flex-between">
                  <div className="module_card_title">订单状态统计</div>
                </div>

                <div className="flex mt-100 mb-100">
                  <div className="flex-1 border text-center">
                    <div>退款订单量</div>
                    <div>
                      <span className="module_card_num">1398</span>
                      <span>单</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <div>退款订单量</div>
                    <div>
                      <span
                        className="module_card_num"
                        style={{ color: "#E68A3B" }}
                      >
                        15
                      </span>
                      <span>单</span>
                    </div>
                  </div>
                </div>

                <Button type="primary" block>
                  查看订单详情
                </Button>
              </Card>
            </div>
            <div className="flex-1">
              <Card className="mt-20 module_card">
                <div className="flex-vcenter">
                  <div className="module_card_title">异常订单处理耗时</div>
                </div>

                <div
                  ref={EchartGaugeRef}
                  style={{ width: "100%", height: 280 }}
                ></div>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex">
            {list.map((item, index) => (
              <div
                key={index}
                className={`flex-1 ${index !== list.length - 1 ? "mr-20" : ""}`}
              >
                <Card className="mt-20 module_card">
                  <div className="flex-vcenter">
                    <div className="module_card_title_som">{item.title}</div>
                  </div>
                  <div className="module_card_som_num">{item.num}</div>
                  <div className="flex-vcenter">
                    <div
                      className={`custom_icon iconfont ${item.icon}`}
                      style={{ background: item.color }}
                    ></div>
                    <div
                      className="module_card_som_num_number"
                      style={{ color: item.color }}
                    >
                      {item.rate}
                    </div>
                  </div>

                  <div className="flex-vhcenter mt-30">
                    <div
                      className={`custom_icon_main iconfont ${item.icon2}`}
                      style={{
                        background: `linear-gradient(to right, ${item.color}, #fff)`,
                      }}
                    ></div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <Card className="mt-20 module_card">
            <div className="flex-vcenter">
              <div className="module_card_title">订单来源</div>
            </div>

            <div
              ref={EchartPieRef}
              style={{ width: "100%", height: 410 }}
            ></div>
          </Card>
        </div>
      </div>
    </>
  );
  const items = [
    { key: "1", label: "订单总览", children: Tables },
    { key: "2", label: "订单列表", children: "Content of Tab Pane 2" },
  ];

  useEffect(() => {
    init();
  }, []);

  function init() {
    const myChart1 = echarts.init(EchartLineRef.current);
    myChart1.setOption(LineOption());

    const myChart2 = echarts.init(EchartGaugeRef.current);
    myChart2.setOption(GaugeOption());

    const myChart3 = echarts.init(EchartPieRef.current);
    myChart3.setOption(PieOption());
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
