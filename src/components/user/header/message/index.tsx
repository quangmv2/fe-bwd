import React from 'react';
import styles from "./styles.module.scss";
import { Badge, Dropdown, Avatar } from 'antd'
import { MessageOutlined } from '@ant-design/icons';
import _ from 'lodash'
import './styles.scss'
interface notificationProps {

}

const Message: React.FC<notificationProps> = ({

}) => {
    const message = [
        {
            avatar: 'N',
            name: 'Quỳnh Nga',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore quibusdam ab porro illo alias dolores, quaerat consequatur necessitatibus vero laudantium quae. Adipisci ex laudantium harum voluptatum nesciunt deleniti exercitationem, excepturi quisquam illo amet saepe aut ducimus suscipit ea dolore unde. Ut doloremque ex maiores ducimus natus! Labore, omnis consequatur?',
            time: '3 mins ago'
        },
        {
            avatar: 'Q',
            name: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore quibusdam ab porro illo alias dolores, quaerat consequatur necessitatibus vero laudantium quae. Adipisci ex laudantium harum voluptatum nesciunt deleniti exercitationem, excepturi quisquam illo amet saepe aut ducimus suscipit ea dolore unde. Ut doloremque ex maiores ducimus natus! Labore, omnis consequatur?',
            time: '3 mins ago'
        },
        {
            avatar: 'N',
            name: 'Quỳnh Nga',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore quibusdam ab porro illo alias dolores, quaerat consequatur necessitatibus vero laudantium quae. Adipisci ex laudantium harum voluptatum nesciunt deleniti exercitationem, excepturi quisquam illo amet saepe aut ducimus suscipit ea dolore unde. Ut doloremque ex maiores ducimus natus! Labore, omnis consequatur?',
            time: '3 mins ago'
        },
        {
            avatar: 'Q',
            name: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore quibusdam ab porro illo alias dolores, quaerat consequatur necessitatibus vero laudantium quae. Adipisci ex laudantium harum voluptatum nesciunt deleniti exercitationem, excepturi quisquam illo amet saepe aut ducimus suscipit ea dolore unde. Ut doloremque ex maiores ducimus natus! Labore, omnis consequatur?',
            time: '3 mins ago'
        },
        {
            avatar: 'N',
            name: 'Quỳnh Nga',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore quibusdam ab porro illo alias dolores, quaerat consequatur necessitatibus vero laudantium quae. Adipisci ex laudantium harum voluptatum nesciunt deleniti exercitationem, excepturi quisquam illo amet saepe aut ducimus suscipit ea dolore unde. Ut doloremque ex maiores ducimus natus! Labore, omnis consequatur?',
            time: '3 mins ago'
        },
        {
            avatar: 'Q',
            name: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore quibusdam ab porro illo alias dolores, quaerat consequatur necessitatibus vero laudantium quae. Adipisci ex laudantium harum voluptatum nesciunt deleniti exercitationem, excepturi quisquam illo amet saepe aut ducimus suscipit ea dolore unde. Ut doloremque ex maiores ducimus natus! Labore, omnis consequatur?',
            time: '3 mins ago'
        },
        {
            avatar: 'N',
            name: 'Quỳnh Nga',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore quibusdam ab porro illo alias dolores, quaerat consequatur necessitatibus vero laudantium quae. Adipisci ex laudantium harum voluptatum nesciunt deleniti exercitationem, excepturi quisquam illo amet saepe aut ducimus suscipit ea dolore unde. Ut doloremque ex maiores ducimus natus! Labore, omnis consequatur?',
            time: '3 mins ago'
        },
        {
            avatar: 'Q',
            name: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore quibusdam ab porro illo alias dolores, quaerat consequatur necessitatibus vero laudantium quae. Adipisci ex laudantium harum voluptatum nesciunt deleniti exercitationem, excepturi quisquam illo amet saepe aut ducimus suscipit ea dolore unde. Ut doloremque ex maiores ducimus natus! Labore, omnis consequatur?',
            time: '3 mins ago'
        },
        {
            avatar: 'N',
            name: 'Quỳnh Nga',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore quibusdam ab porro illo alias dolores, quaerat consequatur necessitatibus vero laudantium quae. Adipisci ex laudantium harum voluptatum nesciunt deleniti exercitationem, excepturi quisquam illo amet saepe aut ducimus suscipit ea dolore unde. Ut doloremque ex maiores ducimus natus! Labore, omnis consequatur?',
            time: '3 mins ago'
        },
        {
            avatar: 'Q',
            name: 'Quang',
            message: 'helo',
            time: '3 mins ago'
        },

    ]
    const renderMessageItems = () => {
        return _.map(message, ({ message, avatar, time, name }) => {
            return (
                <div className='d-flex align-items-start message-items py-1 px-1 hover-pointer'>
                    <div>
                        <Avatar shape='square' size={40}>{avatar}</Avatar>
                    </div>
                    <div className={styles.messageContent}>
                        <div className={styles.messageName}>
                            <p className='m-0'>{name}</p>
                        </div>
                        <div className={`${styles.messageWrap} d-flex align-items-center`}>
                        <p className={`m-0 ${styles.message} `}>{message}</p>
                        <span>- {time}</span>
                        </div>
                    </div>
                </div>
            )
        })

    }
    const renderMessage = () => {
        return (
            <div className={` ${styles.wrap} p-3 bg-white shadow-css border-radius-12`}>
                <p className={styles.title}>Message</p>
                {renderMessageItems()}
            </div>
        )
    }
    return (
        <div>
            <Dropdown overlay={renderMessage} placement="bottomRight" className='hover-pointer notification-wrap-header'>
                <Badge count={5}>
                    <MessageOutlined />
                </Badge>
            </Dropdown>
        </div>


    );
}

export default Message;