import React, { useState } from "react";
import { Button, Layout, theme, ColorPicker } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import {
  green,
  cyan,
  blue,
  purple,
  magenta,
  presetPalettes,
} from "@ant-design/colors";

import styles from "./main.module.less";

import { useDispatch, useSelector } from "react-redux";
import { updateCollapsed } from "@/store/modules/collapsedStore";
import { DayNightSwitch, ModeSwitch } from "@/components";

function HeaderPage() {
  const { token } = theme.useToken();
  const dispatch = useDispatch();
  const { themeType } = useSelector((state) => state.theme);
  const collapsed = useSelector((state) => state.collapsed.value);

  // const [primary, setPrimary] = useState(color);
  const genPresets = (presets = presetPalettes) =>
    Object.entries(presets).map(([key, colors]) => ({ label: key, colors }));
  const presets = genPresets({
    极光绿: green,
    明青: cyan,
    拂晓蓝: blue,
    酱紫: purple,
    法式洋红: magenta,
  });

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
      </div>
    </div>
  );
}

export default HeaderPage;
