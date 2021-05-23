

import React, { useState } from 'react';
import { Drawer } from 'antd'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { UserOutlined, HomeOutlined, ContactsOutlined } from "@ant-design/icons";
import { BiHealth } from "react-icons/bi"
import ListContact from '../contact-sidebar/list-contact'

// import './styles.scss'

interface bottomNavProps {
  
}

const BottomNav: React.FC<bottomNavProps> = ({

}) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const [value, setValue] = React.useState(0);
    return (
        <>
         <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
               
            >
                <div className='p-2'>
                <ListContact />
                </div>
            </Drawer>
        <BottomNavigation

        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        className={`d-lg-none position-fixed bottom-0 w-100`}
        >
        <BottomNavigationAction label="Recents" value="recents" icon={<HomeOutlined />} />
        <BottomNavigationAction 
       onClick={showDrawer}
        label="Contact" icon={<ContactsOutlined />} />
        <BottomNavigationAction label="Psychological" icon={<BiHealth />} />
        <BottomNavigationAction label="User" icon={<UserOutlined />} />
        <BottomNavigationAction label="User" icon={<UserOutlined />} />
        </BottomNavigation>
        </>


    );
}

export default BottomNav;