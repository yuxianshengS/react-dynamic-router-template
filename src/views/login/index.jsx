import { Navigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Layout, theme } from "antd";

import { useAuth } from "@/router/AuthProvider";
import styles from "./index.module.less";
import packageName from "/package.json";
export default function LoginPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { isAuthenticated, login } = useAuth();
  const [form] = Form.useForm();
  const formLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };
  if (isAuthenticated) return <Navigate to="/" replace />;

  async function saveForm() {
    let values = await form.validateFields();
    login();
  }

  return (
    <Layout
      className={`flex-vhcenter ${styles.root}`}
      style={{ background: colorBgContainer }}
    >
      <Form
        form={form}
        className="login_form"
        {...formLayout}
        initialValues={{ remember: false }}
      >
        <div className="login_log mb-20">{packageName.name}</div>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          colon={false}
          className=""
          label=" "
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <div className="flex-vhcenter mt-80">
          <Button className="mr-10" htmlType="submit">
            注册
          </Button>
          <Button type="primary" htmlType="submit" onClick={saveForm}>
            登录
          </Button>
        </div>
      </Form>
    </Layout>
  );
}
