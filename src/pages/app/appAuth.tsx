import React, { lazy } from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import { routersAuth } from "@routers";
import { LayoutAuth } from 'src/components/layout';

const Components = {}

routersAuth.forEach(route => {
    Components[route.component] = lazy(() => import(`@pages/${route.component}`))
})
interface AppAuthProps {

}

const AppAuth: React.FC<AppAuthProps> = (props) => {
    const { path } = useRouteMatch()
    return (
        <Switch>
            {
                routersAuth.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={`${path}${route.path}`}
                        render={(routeProps) => {
                            const Component = Components[route.component]
                            return <LayoutAuth>
                                <Component {...props} {...routeProps} route={route} />
                            </LayoutAuth>
                        }}
                    />
                ))

            }
            <Route render={() => <>404</>} />
        </Switch>
    );
}

export default AppAuth;