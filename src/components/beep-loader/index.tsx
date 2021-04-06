import React from 'react';
import styles from "./index.module.scss";

interface BeepLoaderProps {

}

const BeepLoader: React.FC<BeepLoaderProps> = () => {
  return (
      <div className={styles.bleepLoader}>
      </div>
  );
}

export {
    BeepLoader};  