import { ComponentType } from "react";
import cx from "classnames";

import styles from "./BlockTitle.module.scss";

interface BlockTitleProps {
  title: string;
  classNames?: string;
}

export const BlockTitle: ComponentType<BlockTitleProps> = ({
  title,
  classNames,
}) => {
  return (
    <div className={cx(styles.content, classNames)}>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
