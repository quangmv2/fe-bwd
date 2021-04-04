import React, { useEffect } from 'react';
import styles from "./styles.module.scss";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

interface LoadingLazyComponentProps {
}

const LoadingLazyComponent: React.FC<LoadingLazyComponentProps> = (props) => {
    useEffect(() => {
        NProgress.start();
        return () => NProgress.done();
    }, []);

    console.log(props);
    

    return (
        <div className={styles.loading}>
            <div className={styles.loader}>

            </div>
        </div>
    );
}

export default LoadingLazyComponent;