import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import AppNoAuth from "./appNoAuth";
import React, { lazy, useEffect, useState } from 'react';
import { routersNotAuth } from '@routers';
import AppAuth from './appAuth';
import { useAuth } from '@store';
import { ACCESS_TOKEN } from '@constants';
import LoadingLazyComponent from 'src/components/loading-page';


const Components = {}

routersNotAuth.forEach(route => {
  Components[route.component] = lazy(() => import(`@pages/${route.component}`))
})
interface AppProps {

}

const AppRouters: React.FC<AppProps> = (props) => {

  const { isAuth, setIsAuth } = useAuth()
  const [loging, setLoging] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setLoging(false);
      return
    };
    setIsAuth(true);
    setLoging(false);
  }, [])

  return (
    <React.Fragment>
      {
        loging ? <LoadingLazyComponent /> :
          <Router
            basename={
              process.env.SERVICE ? process.env.SERVICE : "/"
            }
          >
            <Switch>
              <Route
                path="/admin"
                // exact={true}
                key="/admin page"
                render={routeProps => {
                  console.log("admin");
                  if (isAuth)
                    return <AppAuth {...props} {...routeProps} />
                  return <Redirect to="/login" />
                }}
              />
              <AppNoAuth {...props} />
              <Route render={() => <>404</>} />
            </Switch>
          </Router>
      }
    </React.Fragment>
  );
}

export default AppRouters;
