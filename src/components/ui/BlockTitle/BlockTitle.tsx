import { ComponentType } from "react";

import styles from "./BlockTitle.module.scss";

interface BlockTitleProps {
  title: string;
  classNames?: string;
}

export const BlockTitle: ComponentType<BlockTitleProps> = ({ title }) => {
  return <p className={styles.title}>{title}</p>;
};
