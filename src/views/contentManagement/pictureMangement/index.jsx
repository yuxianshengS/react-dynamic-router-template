import React, { useState, useEffect } from "react";
import {
  Tabs,
  Card,
  Row,
  Button,
  Form,
  Input,
  Checkbox,
  Pagination,
} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import styles from "./index.module.less";

export default function HousingManagementPage() {
  const list = [
    {
      children: [
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          desc: "龙海风情小镇，地中海、龙海风情小镇，地中海",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          desc: "2",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          desc: "3",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          desc: "4",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          desc: "5",
        },
      ],
    },
    {
      children: [
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          desc: "6",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          desc: "7",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          desc: "8",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          desc: "9",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          desc: "10",
        },
      ],
    },
  ];
  const [checkItem, setCheckItem] = useState([]);

  const Tables = (
    <Card
      className="module_card"
      cover={
        <Form>
          <div className="pt-20 plr-20 flex">
            <div className="flex-1">
              <Button className="mr-10" type="primary">
                批量隐藏
              </Button>
              <Button className="mr-10" type="primary">
                批量显示
              </Button>
              <Button className="mr-10" type="primary">
                批量删除
              </Button>
            </div>
            <div className="flex">
              <Form.Item colon={false} name="gender" label="">
                <Input
                  className="custom_input w-300 mr-20"
                  placeholder="搜内容"
                  prefix={<i className="iconfont icon-search"></i>}
                />
              </Form.Item>
              <Button className="ml-10" type="primary">
                添加房源
              </Button>
            </div>
          </div>
        </Form>
      }
    >
      <Checkbox.Group
        className="block"
        style={{ width: "100%" }}
        onChange={onCheckboxChange}
      >
        {list.map((item, index) => (
          <Row key={index} className="flex-between" gutter={16}>
            {item.children.map((items, i) => (
              <Card
                key={i}
                className={`custom_Card_goods  mb-20 `}
                style={
                  checkItem.includes(items.desc)
                    ? { boxShadow: "0 0 6px 2px var(--PrimaryColor)" }
                    : {}
                }
                bordered={false}
                cover={<img width={200} height={200} alt="example" src={items.img} />}
              >
                <Checkbox
                  className="custom_check"
                  value={items.desc}
                ></Checkbox>
                <Card.Meta title={items.desc} />
                <div className="mt-10 flex-between">
                  <div className="ellipsis">2024-05-15 255kb</div>
                  <EllipsisOutlined
                    key="ellipsis"
                    style={{ fontSize: 24, cursor: "pointer" }}
                  />
                </div>
              </Card>
            ))}
          </Row>
        ))}
      </Checkbox.Group>

      <div className="flex-flex-end">
        <Pagination showQuickJumper defaultCurrent={2} total={500} />
      </div>
    </Card>
  );

  const items = [
    { key: "1", label: "图片管理", children: Tables },
    { key: "2", label: "视频管理", children: "Content of Tab Pane 2" },
  ];

  function onCheckboxChange(e) {
    setCheckItem(e);
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
