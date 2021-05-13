import React from 'react';
import styles from "./styles.module.scss";

interface LogingProps {

}

const Loging: React.FC<LogingProps> = () => {
    return (
        <div className={styles.container}>
            <h1>Logingggg....</h1>
        </div>
  )
}

export {
    Loging
};