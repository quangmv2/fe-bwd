import React, { useState } from 'react';
import styles from "./styles.module.scss";
import logo from '@assets/icons/logo.png'
import { Input, Drawer } from 'antd'
import { MenuUnfoldOutlined, SearchOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Notification from './notification'
import Message from './message'
import Avatar from './avatar'
import './styles.scss'
import SiderComponent from '../sider';
import { Link } from 'react-router-dom';


interface headerProps {

}

const HeaderComponent: React.FC<headerProps> = ({

}) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className={` ${styles.wrap} px-4 header-wrap d-flex align-items-center justify-content-between`}>
            <Drawer
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <SiderComponent />
            </Drawer>
      
                <img style={{ width: '120px', height: '120px'}} className='mt-3 mx-5' src={logo} />
                {/* <p className='m-0'>hearMe</p> */}
      
            <div className={` ${styles.headerLeftWrap} d-flex align-items-baseline justify-content-between `}>
                <div className='d-none d-lg-block d-xl-block d-xxl-block'>
                    <Input

                        placeholder="Search"
                        prefix={<SearchOutlined className="site-form-item-icon" />}
                        bordered={false}
                    />
                </div>
                <div>
                    <Notification />
                </div>
                <div>
                    <Message />
                </div>
                <div className='hover-pointer d-lg-none d-xl-none d-xxl-none'>
                    <SearchOutlined />
                </div>
                <div className='d-none d-lg-block d-xl-block d-xxl-block'>
                    <Avatar />
                </div>
                <div className='hover-pointer d-lg-none d-xl-none d-xxl-none' onClick={showDrawer}>
                    {
                        visible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;