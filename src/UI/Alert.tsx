import React from "react";
import { useDispatch } from "react-redux";
import { alertActions } from "../store/alert";
import styles from "./Alert.module.css";

export enum AlertType {
  info = "info",
  warning = "warning",
  danger = "danger",
}

interface AlertProps {
  title: string;
  type: AlertType;
  children: React.ReactNode;
}

export default function Alert(props: AlertProps) {
  const dispatch = useDispatch();
  const { title, type, children } = props;

  const closeBtnHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(
      alertActions.setAlert({
        title: "",
        body: "",
        type: AlertType.info,
        show: false,
      })
    );
  };

  return (
    <div className={[styles.Alert, styles[type]].join(" ")}>
      <header className={styles.alertTitle}>{title}</header>
      <div className={styles.alertBody}>{children}</div>
      <button className={styles.closeBtn} onClick={closeBtnHandler}>
        &times;
      </button>
    </div>
  );
}
