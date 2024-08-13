import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import styles from "./index.module.less";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function ModeSwitch() {
  const $router = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState(true);
  function handleMode(value) {
    setStatus(value);
    if (value) $router("/page1");
    else $router("/home");
  }

  useEffect(() => {
    if (location.pathname === "/home") setStatus(false);
    else setStatus(true);
  }, [location.pathname]);

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
