import React, { lazy } from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import { routersUser } from "@routers";
import { UserPage } from 'src/components/layout';

const Components = {}

routersUser.forEach(route => {
    Components[route.component] = lazy(() => import(`@pages/${route.component}`))
})
interface AppUserProps {

}

const AppUser: React.FC<AppUserProps> = (props) => {
    const { path } = useRouteMatch()
    console.log(path);
    
    return (
        <Switch>
            {
                routersUser.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={`${route.path}`}
                        render={(routeProps) => {
                            const Component = Components[route.component]
                            return <UserPage {...props} {...route}>
                                <Component {...props} {...routeProps} route={route} />
                            </UserPage>
                        }}
                    />
                ))

            }
            <Route render={() => <>404</>} />
        </Switch>
    );
}

export default AppUser;