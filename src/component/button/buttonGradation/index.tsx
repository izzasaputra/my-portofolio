import React from 'react'
import styles from "./style.module.scss"


export interface ButtonType {
  onClick: ()=>void;
  height: number;
  width: number;
  title: string;
}

export default function ButtonGradation({onClick, height, width, title  }:ButtonType) {
  return (
    <a className={styles.bn31} onClick={onClick} style={{height:height, width:width}}><span className={styles.bn31span}>{title}</span></a>
  )
}
