import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import styles from "./index.module.less";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateModeStatus } from "@/store/modules/useStore";

export default function ModeSwitch() {
  const $router = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.useStore.modeStatus);

  function handleMode(value) {
    dispatch(updateModeStatus(!status));
  }

  useEffect(() => {
    if (status) $router("/home");
    else $router("/page1");
  }, [status]);

  return (
    <Switch
      value={status}
      className={styles.root}
      checkedChildren="垂直"
      unCheckedChildren="水平"
      defaultChecked
      onChange={handleMode}
    />
  );
}
