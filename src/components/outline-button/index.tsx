import React, { CSSProperties } from 'react';
import styles from "./styles.module.scss";

interface buttonProps {
    onPress?: Function,
    type?: "button" | "submit" | "reset",
    style?: CSSProperties,
    className?: string
}

const OutlineButton: React.FC<buttonProps> = ({
    children,
    type,
    style,
    className
}) => {
    return (
        // <div className={styles.container}>
        <button
            className={`btn py-2 w-100 h-100 ${styles.btn} ${className}`}
            type={type}
            style={style}
        >
            <label

            // className={styles.btn-label}
            >{children ? children : "Button"}</label>
        </button>
        // </div>
    );
}

export default OutlineButton;