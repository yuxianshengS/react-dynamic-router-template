import React from "react";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import styles from "./main.module.less";

import { useDispatch, useSelector } from "react-redux";
import { updateCollapsed } from "@/store/modules/collapsedStore";
import { DayNightSwitch, ModeSwitch } from "@/components";
import { AvatarOperation } from "../../component";

function HeaderPage() {
  const dispatch = useDispatch();
  const { themeType } = useSelector((state) => state.theme);
  const collapsed = useSelector((state) => state.collapsed.value);

  return (
    <div className={styles.root}>
      <Button
        className="header_btn"
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => dispatch(updateCollapsed(!collapsed))}
      />

      <div className="h-all flex-center">
        <ModeSwitch />
        <DayNightSwitch status={themeType === "light" ? true : false} />
        <AvatarOperation />
      </div>
    </div>
  );
}

export default HeaderPage;
