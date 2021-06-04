import { Dropdown } from 'antd';
import React from 'react';
import { RiMoreFill } from 'react-icons/ri';
import styles from "./styles.module.scss";
import './styles.scss'
import _ from 'lodash'





interface ShowMoreProps {
    menu: any
}

const ShowMoreComponent: React.FC<ShowMoreProps> = ({
    menu
}) => {
    return (
        <Dropdown overlay={menu} placement="bottomRight">
        <div className={` ${styles.moreContainer} hover-pointer px-1`}>
            <RiMoreFill style={{ fontSize: '23px', color: '#a2aebd' }} />
        </div>
    </Dropdown>
    );
}

export default ShowMoreComponent;