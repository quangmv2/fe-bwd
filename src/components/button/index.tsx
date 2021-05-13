import { CloseOutlined } from '@ant-design/icons';
import React, { CSSProperties } from 'react';
import styles from "./styles.module.scss";

interface buttonProps {
    onPress?: Function,
    type?: "button" | "submit" | "reset",
    style?: CSSProperties,
    className?: string,
    icon?: any
}

const button: React.FC<buttonProps> = ({
    children,
    type,
    style,
    className,
    icon
}) => {
    return (
        // <div className={styles.container}>
            <button
                className={`w-100  text-white border-radius-12 btn ${styles.btn} ${className}`}
                type={type}
                style={style}
            >
               {children} 
            </button>
        // </div>
    );
}

export default button;