import React, { lazy, Suspense } from 'react';
// import Landing from "../landing-page";
import { Route } from 'react-router-dom'
import { routersNotAuth } from "@routers";
// import AppAuth from './appAuth';
import { LayoutNotAuth } from 'src/components/layout';
import NotFoundPage from '../404';

const Components = {}

routersNotAuth.forEach(route => {
    Components[route.component] = lazy(() => import(`@pages/${route.component}`))
})
interface AppProps {

}

const App: React.FC<AppProps> = (props) => {
    return (
        <>
            {
                routersNotAuth.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        render={(routeProps) => {
                            const Component = Components[route.component]
                            return <LayoutNotAuth {...route}>
                                <Component {...props} {...routeProps} route={route} />
                            </LayoutNotAuth>
                        }}
                    />
                ))
            }
            {/* <Route path="*" render={() =>
                <Suspense fallback="Loading" >
                  <NotFoundPage />
                </Suspense>} 
              /> */}
        </>
    );
}

export default App;