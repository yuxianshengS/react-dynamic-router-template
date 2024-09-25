import React, { useState, useEffect } from "react";
import { Tabs, Card, Table, Button, Form, Select, Space, Image } from "antd";
import styles from "./index.module.less";
import { CommAnnulus } from "@/components";

export default function HousingManagementPage() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let list = [];
    for (let i = 0; i < 1000; i++) {
      list.push({
        key: i,
        name: "asa",
        age: Math.random(),
        address: "呵呵",
      });
    }
    setTableData(list);
  }, []);

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: () => (
        <Image
          width={40}
          height={40}
          style={{ borderRadius: 10 }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      ),
    },
    {
      title: "内容标题",
      dataIndex: "age",
      key: "1",
    },
    {
      title: "所属分类",
      dataIndex: "address",
      key: "2",
    },
    {
      title: "发布日期",
      dataIndex: "address",
      key: "3",
    },
    {
      title: "浏览量",
      dataIndex: "address",
      key: "4",
    },
    {
      title: "状态",
      dataIndex: "name",
      key: "5",
    },
    {
      width: 130,
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a>
          <a>Delete</a> */}
          <Button type="link">编辑</Button>
          <Button danger type="link">
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === "Disabled User", // Column configuration not to be checked
    //   name: record.name,
    // }),
  };

  const components = {
    header: {
      cell: (props) => <th {...props} style={{ backgroundColor: "#7D64D1" }} />,
    },
  };
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
              <Form.Item colon={false} name="gender" label="时间筛选">
                <Select className="w-200" placeholder="请选择时间" allowClear>
                  <Select.Option value="male">近七天</Select.Option>
                  <Select.Option value="female">近一个月</Select.Option>
                  <Select.Option value="other">近一年</Select.Option>
                </Select>
              </Form.Item>
              <Button className="ml-10" type="primary">
                添加房源
              </Button>
            </div>
          </div>
        </Form>
      }
    >
      <Table
        dataSource={tableData}
        columns={columns}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        components={components}
        pagination={{ showSizeChanger: true, showQuickJumper: true }}
      />
    </Card>
  );

  const TablesTow = <CommAnnulus />;

  const items = [
    { key: "1", label: "全部房源", children: Tables },
    { key: "2", label: "房源分类", children: TablesTow },
  ];

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
