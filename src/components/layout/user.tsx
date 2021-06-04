import { Layout, Menu } from 'antd';
import React, { Suspense, useState } from 'react';
import styles from './styles.module.scss'

// import { menuUserRouters } from '@routers';
import { SiderComponent } from '@components';

import './user-layout.scss'
import { HeaderComponent } from '@components'
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation } from '@components'
import { LoadingLazyComponent } from '../loading-page';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface UserPageProps {
    sidebar?: boolean,
    noHeader?: boolean,
    noBottomNav?: boolean
}
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});
const UserPage: React.FC<UserPageProps> = ({
    children,
    sidebar,
    noHeader,
    noBottomNav
}) => {

    const classes = useStyles();

    const [toggleCollapsed, setToggleCollapsed] = useState<boolean>(false);

    return (
        <Layout style={{ maxHeight: "100vh" }} className={`user-layout-wrap ${noBottomNav ? null : styles.wrap}`}>
          <Layout>
          {sidebar ? (   <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,

                    }}
                    className="user-layout-background"
                    collapsed={toggleCollapsed}>
                    <div style={{ paddingTop: '80px' }}>
                        <SiderComponent />

                        {/* <div>
                  
                    </div> */}
                    </div>
                </Sider>) : <></>}
                <Layout >
             {noHeader ?  <></>:  <Header
                        style={{
                            boxShadow: '0 2px 8px #f0f1f2',
                            zIndex: 100,
                            position: 'fixed', width: '100%', top: 0, padding: 0
                        }}
                        className="site-layout-background" >
                        <HeaderComponent />
                    </Header> }
                    {/* <Header style={{zIndex: 100}}>
               
            </Header> */}
                    <Content
                        className={`user-content site-layout-background ${sidebar ? 'user-content-margin-left' : ''} ${noHeader ? '' : 'user-content-padding-top'}`}
                    >
                        <Suspense fallback={<LoadingLazyComponent />} >
                            {
                                children
                            }
                        </Suspense>
                      {noBottomNav ? <></> : <BottomNavigation />}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export {
    UserPage
}