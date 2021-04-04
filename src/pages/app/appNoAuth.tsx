import React, { lazy } from 'react';
// import Landing from "../landing-page";
import { Route } from 'react-router-dom'
import { routersNotAuth } from "@routers";
// import AppAuth from './appAuth';
import { LayoutNotAuth } from 'src/components/layout';

const Components = {}

routersNotAuth.forEach(route => {
    Components[route.component] = lazy(() => import(`@pages/${route.component}`))
})
interface AppProps {

}

const App: React.FC<AppProps> = (props) => {
    return (
        <React.Fragment>
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
            <Route render={() => <>404</>} />
        </React.Fragment>
    );
}

export default App;