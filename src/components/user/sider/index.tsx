import React from 'react';
import styles from "./styles.module.scss";
import './sider.scss'
import { ButtonComponent } from '@components'
import { Avatar, Badge, Menu } from 'antd';
import { CloseOutlined, HomeOutlined, MailOutlined } from '@ant-design/icons';

interface SiderComponentProps {

}

const SiderComponent: React.FC<SiderComponentProps> = () => {

    // const { visible: visibleHook } = useHeader();
    // const pages = [
    //     {
    //         link: "try-on",
    //         title: "Try on"
    //     },
    //     {
    //         link: "webinar",
    //         title: "Webinar"
    //     },
    //     {
    //         link: "register",
    //         title: "Register"
    //     },
    //     {
    //         link: "login",
    //         title: "Login"
    //     },
    //     {
    //         link: "admin",
    //         title: "Admin"
    //     },
    // ]

    return (
        <div className={` user-sider-wrap ${styles.container}`}>
            {/* user name */}
            <section className='py-4 px-3'>
                <div className={` ${styles.userNameWrap}  shadow-css d-flex align-items-center bg-white p-4`}>
                    <Avatar shape="square" size={40} className='border-radius-12'>N</Avatar>
                    <div className='px-3'>
                        <p className={`m-0 ${styles.name}`}>Quỳnh Nga</p>
                        <p className={`m-0 text-muted ${styles.username}`}>@qnne</p>
                    </div>
                </div>
            </section>
            {/* SIDER-MENU */}
            <section className='px-3'>
                
                <Menu className='border-radius-12 py-4 shadow-css'>
                    <Menu.Item key="1" className='h-100' >
                    <div className='h-100 py-1 d-flex align-items-center menu-content'>
                    <HomeOutlined />
                    <span>Home</span>
                    </div>
                     </Menu.Item>
                     <Menu.Item key="2" className='h-100' >
                    <div className='h-100 py-1 d-flex align-items-center menu-content'>
                    <HomeOutlined />
                    <span>Home</span>
                    </div>
                     </Menu.Item>
                     <Menu.Item key="3" className='h-100' >
                    <div className='h-100 py-1 d-flex align-items-center menu-content'>
                    <HomeOutlined />
                    <span>Home</span>
                    </div>
                     </Menu.Item>
                     <Menu.Item key="4" className='h-100' >
                    <div className='h-100 py-1 d-flex align-items-center menu-content'>
                    <HomeOutlined />
                    <span>Home</span>
                    </div>
                     </Menu.Item>
                     <Menu.Item key="5" className='h-100' >
                    <div className='h-100 py-1 d-flex align-items-center menu-content'>
                    <HomeOutlined />
                    <span>Home</span>
                    </div>
                     </Menu.Item>
                     <Menu.Item key="6" className='h-100' >
                    <div className='h-100 py-1 d-flex align-items-center menu-content'>
                    <HomeOutlined />
                    <span>Home</span>
                    </div>
                     </Menu.Item>


                </Menu>
            </section>
            {/* INVITATION */}
            <section className={` ${styles.friendRequestWrap} friend-request-wrap  py-4 px-3`}>
            <div className='px-4 d-flex align-items-center justify-content-between'>
                <p className={`m-0 text-uppercase ${styles.friendRequestTitle}`}>friend requests</p>
                <Badge count={4} />
            </div>
            <div className='py-3'>
                <div className={` ${styles.friendRequestContainer} friend-request-container border-radius-12 shadow-css bg-white p-4`}>
                    <div className='d-flex align-items-center'>
                        <div>
            <Avatar shape="square" size={40} className='border-radius-12 mr-2'>Q</Avatar>
            </div>
            <p className='m-0'><span>MVQuang </span>wants to add you to friends</p>
            </div>
            <div className='d-flex align-items-center pt-3'>
                <div className='button-wrap pr-1'>
           <ButtonComponent children='Accept' />
           </div>
           <div>
           <CloseOutlined className='flex-grow-1'/>
           </div>
            
            </div>
            </div>
            </div>
            
            </section>
        </div>
    );
}

export default SiderComponent;