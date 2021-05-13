import React, { CSSProperties } from 'react';
import { Badge, Dropdown, Avatar } from 'antd'

import './styles.scss'

interface avatarProps {

}

const AvatarComponent: React.FC<avatarProps> = ({

}) => {
    const menu = () => {
        return (
            <></>
        )
    }
    return (
        <div className='header-avatar-wrap'>
        <Dropdown overlay={menu} placement="bottomRight" className='hover-pointer notification-wrap-header'>
           <Avatar size={40} shape='square'>N</Avatar>
        </Dropdown>
        </div>


    );
}

export default AvatarComponent;