import React, { memo, useEffect } from 'react';
import styles from "./styles.module.scss";
import { Skeleton } from 'antd'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

interface LoadingLazyComponentProps {
}

const LoadingLazyComponent: React.FC<LoadingLazyComponentProps> = memo((props) => {
    useEffect(() => {
        NProgress.start();
        return () => NProgress.done();
    }, []);

    console.log(props);
    

    return (
        <div className={styles.loading}>
            <Skeleton active />
        </div>
    );
})

export {
    LoadingLazyComponent
};