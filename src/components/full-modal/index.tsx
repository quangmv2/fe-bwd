import React, { useState } from 'react';
import _ from "lodash";
import { Avatar, Modal } from 'antd'

import './styles.scss'






interface fullModalProps {
    children,
    isModalVisible,
    handleCancel
}

const FullModal: React.FC<fullModalProps> = ({
    children,
    isModalVisible,
    handleCancel

}) => {

    return (
        <div className='full-modal-wrap'>
            <Modal visible={isModalVisible} footer={null} onCancel={handleCancel}>
                {children}
            </Modal>
        </div>


    );
}

export default FullModal;