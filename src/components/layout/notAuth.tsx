import React, { Suspense, useEffect } from 'react';
import { HeaderComponent } from '../header';
import { LoadingLazyComponent } from '../loading-page';

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
            <Suspense fallback={<LoadingLazyComponent />}>
                {children}
            </Suspense>
        </div>
    );
}

export {
    LayoutNotAuth
};