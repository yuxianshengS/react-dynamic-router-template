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
        <p>哎呀～ 找不到页面啦</p>
      </div>
    </div>
  );
}
