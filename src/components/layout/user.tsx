import { Layout, Menu, Badge, Avatar, Button, Row, Col } from 'antd';
import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined, HomeOutlined, ContactsOutlined } from "@ant-design/icons";
// import { menuUserRouters } from '@routers';
import { SiderComponent } from '@components';
import { BiHealth } from "react-icons/bi";
import './user-layout.scss'
import { HeaderComponent } from '@components'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
    const [value, setValue] = React.useState(0);
    const [toggleCollapsed, setToggleCollapsed] = useState<boolean>(false);
    return (
        <Layout style={{ maxHeight: "100vh" }} className='user-layout-wrap'>
            <Header >
                <HeaderComponent />
            </Header>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={{ height: "calc(100vh - 64px)", maxHeight: "calc(100vh - 64px)" }}
                    // className="site-layout-background"
                    collapsed={toggleCollapsed}>
                    <SiderComponent />
                </Sider>
                <Layout >
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content
                        className="site-layout-background"
                        style={{
                            background: '#f7fafb',
                            margin: 0,
                            paddingTop: '1.5rem',
                            minHeight: 280,
                            maxHeight: 'calc(100vh - 64px)',
                            overflow: "auto"
                        }}
                    >
                        <Suspense fallback={<LoadingLazyComponent />} >
                            {
                                children
                            }
                        </Suspense>
                        <BottomNavigation

                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            className={`d-lg-none position-absolute bottom-0 ${classes.root}`}
                        >
                            <BottomNavigationAction label="Recents" value="recents" icon={<HomeOutlined />} />
                            <BottomNavigationAction label="Contact" icon={<ContactsOutlined />} />
                            <BottomNavigationAction label="Psychological" icon={<BiHealth />} />
                            <BottomNavigationAction label="User" icon={<UserOutlined />} />
                            <BottomNavigationAction label="User" icon={<UserOutlined />} />
                        </BottomNavigation>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export {
    UserPage
}