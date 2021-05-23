import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import React, { lazy, useEffect, useState } from 'react';
import { routersNotAuth } from '@routers';
import AppAuth from './appAuth';
import AppUser from './appUser';
import { useAuth } from '@context';
import { ACCESS_TOKEN, appPermisions } from '@constants';
import { Loging } from '@components';
// import { Snackbar } from '@material-ui/core'
import { DisconnectOutlined } from '@ant-design/icons';
import { useOnlineStatus } from '@utils';
import { LayoutNotAuth } from 'src/components/layout';
import { indexOf } from "lodash";
import { ME } from 'src/graphql/query';
import { queryData } from 'src/tools/apollo/func';
import { checkPermission } from '@common';
import Landing from '../landing-page';

const Components = {}

routersNotAuth.forEach(route => {
  Components[route.component] = lazy(() => import(`@pages/${route.component}`))
})
interface AppProps {

}

const AppRouters: React.FC<AppProps> = (props) => {

  const { isAuth, user, dispatchAuth } = useAuth()
  const [loging, setLoging] = useState<boolean>(true);
  const internet = useOnlineStatus()

  useEffect(() => {
    verifyAuth()
  }, [dispatchAuth])

  const verifyAuth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setLoging(false);
      return
    };
    const me = await fetchMe();
    if (!me) {
      setLoging(false);
      return
    }
    dispatchAuth({
      type: "SET_AUTHEN",
      payload: {
        isAuth: true,
        user: me
      }
    })
    setLoging(false);

    return;
    const meLocal: any = {
      _id: "6084f501e817a7502ea9bb93",
      username: "appadmin",
      email: "admin@gmail.com",
      role: {
        _id: "6084f501e817a7502ea9bb90",
        code: "APP_SUPERADMIN",
        description: "Người quản trị hệ thống"
      },
      permissions: [
        "APP_ADMIN_PAGE",
        "APP_USER_VIEW",
        "APP_USER_CREATE",
        "APP_USER_EDIT",
        "APP_USER_DELETE",
        "APP_PERMISSION_VIEW",
        "APP_ROLE_CREATE",
        "APP_ROLE_EDIT",
        "APP_ROLE_VIEW"
      ],
      createdAt: 1619326209272,
      createdBy: null
    }
    if (!meLocal) throw new Error();
    dispatchAuth({
      type: "SET_AUTHEN",
      payload: {
        user: meLocal,
        isAuth: true
      }
    });
  }

  const fetchMe = async () => {
    try {
      const { data, errors } = await queryData(ME);
      if (errors) return null;
      return data.me;
    } catch (error) {
      console.log(error?.graphQLErrors);
    }
  }

  console.log(user);

  return (
    <React.Fragment>
      {
        loging ? <Loging /> :
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
                  if (isAuth && user && checkPermission(user?.permissions || [], appPermisions.ADMIN_PAGE))
                    return <AppAuth {...props} {...routeProps} />
                  localStorage.setItem("PREV_ROUTER", "/admin")
                  return <Redirect to="/login?auth=true" />
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
              <Route
                path="/"
                key="/user page"
                render={routeProps => {
                  if (isAuth && user)
                    return <AppUser {...props} {...routeProps} />
                  return <LayoutNotAuth >
                    <Landing />
                  </LayoutNotAuth>
                }}
              />
              <Route
                path='*'
                render={() => 404}
              />

            </Switch>
          </Router>
      }
      {/* <Snackbar
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
      /> */}
    </React.Fragment>
  );
}

export default AppRouters;
