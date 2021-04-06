import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import AppNoAuth from "./appNoAuth";
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { routersNotAuth } from '@routers';
import AppAuth from './appAuth';
import { useAuth } from '@store';
import { ACCESS_TOKEN, appPermisions } from '@constants';
import { LoadingLazyComponent } from '@components';
import { Snackbar } from '@material-ui/core'
import { DisconnectOutlined, WifiOutlined } from '@ant-design/icons';
import { useOnlineStatus } from '@utils';
import { LayoutNotAuth } from 'src/components/layout';
import { indexOf } from "lodash";


const NotFound = lazy(() => import("../404"));
const Home = lazy(() => import("../landing-page"));

const Components = {}

routersNotAuth.forEach(route => {
  Components[route.component] = lazy(() => import(`@pages/${route.component}`))
})
interface AppProps {

}

const AppRouters: React.FC<AppProps> = (props) => {

  const { isAuth, setAuthencation, user } = useAuth()
  const [loging, setLoging] = useState<boolean>(true);
  const internet = useOnlineStatus()

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setLoging(false);
      return
    };
    setAuthencation(true, {
      username: "vanquang312",
      permissions: [
        ...Object.values(appPermisions)
      ],
      fullname: "Mai Văn Quang",
      email: "maiquang1470@gmail.com",
      role: "ADMIN",
    });
    setLoging(false);
  }, [])

  console.log(user);


  return (
    <React.Fragment>
      {
        loging ? <LoadingLazyComponent /> :
          <Router
            basename={
              process.env.APP_NAME ? process.env.APP_NAME : "/"
            }
          >
            <Switch>
              <Route
                path="/admin"
                key="/admin page"
                render={routeProps => {
                  if (isAuth && user && indexOf(user.permissions, appPermisions.ADMIN_PAGE) != -1)
                    return <AppAuth {...props} {...routeProps} />
                  return <Redirect to="/login" />
                }}
              />
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
            </Switch>
          </Router>
      }
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={!internet.online}
        autoHideDuration={2}
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
