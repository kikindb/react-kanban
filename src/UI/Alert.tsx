import React from "react";
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
  const { title, type, children } = props;
  return (
    <div className={[styles.Alert, styles[type]].join(" ")}>
      <header className={styles.alertTitle}>{title}</header>
      <div className={styles.alertBody}>{children}</div>
    </div>
  );
}
