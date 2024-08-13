import { FrownOutlined } from "@ant-design/icons";

export default function NotFound() {
  return (
    <div
      className="flex-vhcenter"
      style={{
        height: "100%",
        textAlign: "center",
        background: "#e6f4ff",
        color: "red",
      }}
    >
      <div>
        <FrownOutlined style={{ fontSize: 46 }} />
        <p>缺少index.jsx文件声明，请先行创建文件</p>
      </div>
    </div>
  );
}
