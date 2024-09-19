import { Avatar, Input } from "antd";
import styles from "./index.module.less";
import { useAuth } from "@/router/AuthProvider";

export default function HeaderComponent() {
  const { logout } = useAuth();

  function handleQuit() {
    logout();
  }

  return (
    <>
      <div className={styles.root}>
        <div className="flex-vcenter">
          <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>
            U
          </Avatar>
          <span className="ml-10" style={{ color: "#fff" }}>
            欢迎来到后台管理系统
          </span>
        </div>

        <div className="flex-vcenter">
          <Input
            className="custom_input w-300 mr-20"
            placeholder="搜内容"
            prefix={<i className="iconfont icon-search"></i>}
          />

          <i
            className="custom-icon iconfont icon-remind fs-34"
            style={{ color: "#fff" }}
          />
          <i
            className="custom-icon mlr-10 iconfont icon-help fs-34"
            style={{ color: "#fff" }}
          />
          <i
            className="custom-icon iconfont icon-shut-down fs-34"
            style={{ color: "#fff" }}
            onClick={handleQuit}
          />
        </div>
      </div>
    </>
  );
}
