import { Skeleton } from 'antd';
import React, { Suspense, useEffect } from 'react';
import { HeaderComponent } from '../header';

interface LayoutNotAuthProps {
    noHeader?: boolean,
    route?: any
}

const LayoutNotAuth: React.FC<LayoutNotAuthProps> = ({
    children,
    noHeader
}) => {

    useEffect(() => {
        // document.title = "Landing page";
    }, [])

    return (

        <div>
            <HeaderComponent visible={ noHeader ? false : true }/>
            <Suspense fallback={<Skeleton active />}>
                {children}
            </Suspense>
        </div>
    );
}

export {
    LayoutNotAuth
};