import { Layout, Menu } from 'antd';
import React, { Suspense, useState } from 'react';

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

}
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});
const UserPage: React.FC<UserPageProps> = ({
    children
}) => {

    const classes = useStyles();
   
    const [toggleCollapsed, setToggleCollapsed] = useState<boolean>(false);
    return (
        <Layout style={{ maxHeight: "100vh" }} className='user-layout-wrap'>
           
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={{ 
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                      
                    }}
                    // className="site-layout-background"
                    collapsed={toggleCollapsed}>
                        <div style={{ paddingTop: '80px'}}>
                        <SiderComponent />

                        {/* <div>
                  
                    </div> */}
                    </div>
                </Sider>
                <Layout >
                <Header 
                style={{
                    zIndex: 100,
                    position: 'fixed',width: '100%', top: 0, padding: 0}}
                className="site-layout-background" >
                      <HeaderComponent />
                </Header> 
                     {/* <Header style={{zIndex: 100}}>
               
            </Header> */}
                    <Content
                        className="site-layout-background"
                        style={{
                            background: '#f7fafb',
                            marginLeft: '285px',
                            paddingTop: 'calc(80px + 1.5rem)',
                            overflow: 'initial'
                            
                        }}
                    >    

                        <Suspense fallback={<LoadingLazyComponent />} >
                            {
                                children
                            }
                        </Suspense>
                       <BottomNavigation />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export {
    UserPage
}