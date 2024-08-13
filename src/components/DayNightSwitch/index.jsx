import React, { useState, useEffect } from "react";
import styles from "./index.module.less";
import { useDispatch, useSelector } from "react-redux";
import { updateThemeType } from "@/store/modules/themeStore";

export default function DayNightSwitch(props) {
  const dispatch = useDispatch();
  const [status, setStatue] = useState(props.status);

  useEffect(() => {
    setStatue(props.status);
  }, [props.status]);

  function handleSwitch() {
    setStatue(!status);
    dispatch(updateThemeType(status ? "dark" : "light"));
  }

  return (
    <div className={styles.root}>
      <div
        className={`switch ${status ? "" : "active"}`}
        onClick={handleSwitch}
      ></div>
      {/* active */}
    </div>
  );
}
