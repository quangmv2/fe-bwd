import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import AppNoAuth from "./appNoAuth";
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { routersNotAuth } from '@routers';
import AppAuth from './appAuth';
import { useAuth } from '@store';
import { ACCESS_TOKEN } from '@constants';
import { LoadingLazyComponent } from '@components';
import { Snackbar } from '@material-ui/core'
import { DisconnectOutlined } from '@ant-design/icons';
import { useOnlineStatus } from '@utils';
import { LayoutNotAuth } from 'src/components/layout';


const NotFound = lazy(() => import("../404"));
const Home = lazy(() => import("../landing-page"));

const Components = {}

routersNotAuth.forEach(route => {
  Components[route.component] = lazy(() => import(`@pages/${route.component}`))
})
interface AppProps {

}

const AppRouters: React.FC<AppProps> = (props) => {

  const { isAuth, setIsAuth } = useAuth()
  const [loging, setLoging] = useState<boolean>(true);
  const internet = useOnlineStatus()

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
                key="/admin page"
                render={routeProps => {
                  if (isAuth)
                    return <AppAuth {...props} {...routeProps} />
                  return <Redirect to="/login" />
                }}
              />
              <Route path="/" exact={true} render={() => <Suspense fallback="Loading" >
                <LayoutNotAuth>
                  <Home />
                </LayoutNotAuth>
              </Suspense>} />
              <AppNoAuth {...props} />
              <Route render={() =>
                <Suspense fallback="Loading" >
                  <NotFound />
                </Suspense>} 
              />
            </Switch>
          </Router>
      }
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={!internet.online}
        message={
          <div>
            <DisconnectOutlined /> &nbsp; Mất kết nối internet.
                </div>
        }
      />
    </React.Fragment>
  );
}

export default AppRouters;
