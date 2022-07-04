import React from "react";
import styles from "./Card.module.css";

export default function Card(props: React.PropsWithChildren) {
  return <div className={styles.Card}>{props.children}</div>;
}
