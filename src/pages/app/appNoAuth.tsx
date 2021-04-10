import React, { lazy } from 'react';
import { Route } from 'react-router-dom'
import { routersNotAuth } from "@routers";
import { LayoutNotAuth } from 'src/components/layout';

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
        </>
    );
}

export default App;