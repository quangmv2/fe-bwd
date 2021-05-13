import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { Layout, Menu, Button, Badge, Avatar, Skeleton } from 'antd';
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { menuRouters } from '@routers';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import logo from "@assets/icons/logo.png";
import { useAuth } from '@context';
import { ACCESS_TOKEN, TAB_ADMIN_MODE } from '@constants';
import styles from "./auth.module.scss";
import { uniq, inRange, indexOf } from "lodash";
import { LoadingLazyComponent } from '../loading-page';
import { mutateData } from 'src/tools/apollo/func';
import { LOGOUT } from 'src/graphql/mutation';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const getCodeSubLink = (path: string) => {
    for (const menu of menuRouters) {
        if (menu["childs"]) {
            for (const subMenu of menu.childs) {
                if (subMenu.dest === path) return menu.dest;
            }
        }
        else if (menu.dest === path) return menu.dest
    }
}

interface LayoutAuthProps {

}

const LayoutAuth: React.FC<LayoutAuthProps> = ({
    children
}) => {

    const [toggleCollapsed, setToggleCollapsed] = useState<boolean>(false);
    const { path } = useRouteMatch();
    const { dispatchAuth, user } = useAuth();
    const history = useHistory();

    useEffect(() => {
        document.title = "ADMIN";
        // if (!localStorage.getItem(TAB_ADMIN_MODE)) setToggleCollapsed(true);
    }, [])

    const logout = useCallback(async () => {
        try {
            const { data, errors } = await mutateData(LOGOUT);
            if (errors || !data?.logout) {
                return;
            }
        } catch (error) {

        }
        localStorage.removeItem(ACCESS_TOKEN);
        dispatchAuth({
            type: "SET_AUTHEN",
            payload: {
                isAuth: false
            }
        })
        history.replace("/");
    }, [history, dispatchAuth])

    const toggle = () => {
        setToggleCollapsed(c => {
            if (c) localStorage.removeItem(TAB_ADMIN_MODE);
            else localStorage.setItem(TAB_ADMIN_MODE, JSON.stringify(!toggleCollapsed));
            return !c;
        })
    }

    return (
        <Layout style={{ maxHeight: "100vh" }}>
            <Header className="header" style={{ height: "64px" }}>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo-hopez" />
                    </Link>
                </div>
            </Header>
            <Layout>
                <Sider
                    width={250} style={{ height: "calc(100vh - 64px)", maxHeight: "calc(100vh - 64px)" }}
                    className="site-layout-background"
                    collapsed={toggleCollapsed}>
                    <div className={styles.userContainer} style={!toggleCollapsed ? {} : { justifyContent: 'center' }}>
                        <div className={styles.userAvatar} style={!toggleCollapsed ? {} : { display: 'none' }}>
                            <span>
                                <Badge dot>
                                    <Avatar shape="square" icon={<UserOutlined />} />
                                </Badge>
                            </span>
                            <p>{user.username}</p>
                        </div>
                        <Button type="primary" onClick={toggle}>
                            {React.createElement(toggleCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                        </Button>
                    </div>
                    <Menu
                        defaultSelectedKeys={[`menu ${path}`]}
                        defaultOpenKeys={[`submenu ${getCodeSubLink(path)}`]}
                        mode="inline"
                        theme="dark"
                    >
                        {
                            menuRouters.map(mR => {

                                if (mR.permissions.length > 0 && (!user || !inRange(uniq([...user.permissions, ...mR.permissions]).length,
                                    user.permissions.length,
                                    user.permissions.length + mR.permissions.length))) return "";
                                if (mR["childs"] && mR.childs.length > 0) return (
                                    <SubMenu title={mR.title} key={`submenu ${mR.dest}`}>
                                        {
                                            mR.childs.map(chi => {
                                                if (!user || indexOf(user.permissions, chi.permission) === -1) return "";
                                                return (
                                                    <Menu.Item key={`menu ${chi.dest}`}>
                                                        <Link to={chi.dest}>{chi.title}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                                return (
                                    <Menu.Item key={`menu ${mR.dest}`} title={<Link to={mR.dest}>{mR.title}</Link>} >
                                        <Link to={mR.dest}>{mR.title}</Link>
                                    </Menu.Item>
                                )
                            })
                        }
                        <Menu.Item key="logout menu" onClick={logout}>
                            Đăng xuất
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content
                        className={`site-layout-background ${styles['admin-layout']}`}
                        style={{
                            margin: 0,
                            minHeight: 280,
                            maxHeight: 'calc(100vh - 64px)',
                            overflow: "auto"
                        }}
                    >
                        <Suspense fallback={<Skeleton active />} >
                            {
                                children
                            }
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export {
    LayoutAuth
};