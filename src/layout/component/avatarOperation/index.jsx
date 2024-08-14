import { useAuth } from "@/router/AuthProvider";
import { Avatar, Dropdown } from "antd";

export default function AvatarOperation() {
  const { logout } = useAuth();

  const dropdown = [
    {
      key: "2",
      label: <div onClick={logout}>退出</div>,
    },
  ];

  return (
    <Dropdown menu={{ items: dropdown }} placement="bottomLeft" arrow>
      <Avatar style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}>
        admin
      </Avatar>
    </Dropdown>
  );
}
