import React, { CSSProperties, memo } from 'react';
import styles from "./styles.module.scss";

interface buttonProps {
    onPress?: Function,
    type?: "button" | "submit" | "reset",
    style?: CSSProperties,
    className?: string
}

const button: React.FC<buttonProps> = memo(({
    children,
    type,
    style,
    className,
    onPress
}) => {
    return (
        // <div className={styles.container}>
            <button
                className={`${styles.btn} ${className}`}
                type={type}
                style={style}
                onClick={() => onPress&&onPress()}
            >
                <label 
                    // className={styles.btn-label}
                >{children ? children : "Button"}</label>
            </button>
        // </div>
    );
})

export default button;