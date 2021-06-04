import React, { CSSProperties, memo, useState } from 'react';
import styles from "./styles.module.scss";
import { Button } from 'antd'

interface buttonProps {
    onPress?: Function,
    type?: "button" | "submit" | "reset",
    style?: CSSProperties,
    className?: string,
    icon?: any,
    disabled?: boolean,
    loading?: number
}

const button: React.FC<buttonProps> = memo(({
    children,
    type,
    style,
    className,
    onPress,
    icon,
    disabled,
    loading
}) => {
    const [loadings, setLoadings] = useState([])
    const enterLoading = index => {
        const newLoadings = [...loadings];
        newLoadings[index] = true;
        setLoadings(newLoadings)
        setTimeout(() => {
            const newLoadings = [...loadings];
            newLoadings[index] = false;
            setLoadings(newLoadings)
            onPress()
        }, 6000);
    };
    return (
        // <div className={styles.container}>
        <Button
        loading={loadings[loading]}
            disabled={disabled}
            className={`w-100  text-white border-radius-12 btn ${styles.btn} ${className}`}
            // type={type}
            style={style}
            onClick={() => {loading == null ? onPress() : enterLoading(loading) }}
        >
            {children}
        </Button>
        // </div>
        // <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
        //   Click me!
        // </Button>
    );
})

export default button;