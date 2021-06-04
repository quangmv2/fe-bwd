import React, { useState } from 'react';
import _ from 'lodash'
import styles from './styles.module.scss'
import {Avatar} from 'antd'
import './styles.scss'
import { useParams, useHistory } from 'react-router-dom'

interface MessageListProps {
    className?: any
}

const MessageList: React.FC<MessageListProps> = ({
    className,

}) => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const message = [
        {  
            avatar: 'N',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores impedit sed, consequatur non ipsum natus earum? Alias, minima fugiat?',
            name: 'Quỳnh Nga',
            seen: true,
        },
        {
            avatar: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores impedit sed, consequatur non ipsum natus earum? Alias, minima fugiat?',
            name: 'Quang',
            seen: false,
        },
        {
           
            avatar: 'N',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores impedit sed, consequatur non ipsum natus earum? Alias, minima fugiat?',
            name: 'Quỳnh Nga',
            seen: true,
        },
        {
           
            avatar: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores impedit sed, consequatur non ipsum natus earum? Alias, minima fugiat?',
            name: 'Quang',
            seen: true,
        },
        {
         
            avatar: 'N',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores impedit sed, consequatur non ipsum natus earum? Alias, minima fugiat?',
            name: 'Quỳnh Nga',
            seen: true,
        },
        {
           
            avatar: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores impedit sed, consequatur non ipsum natus earum? Alias, minima fugiat?',
            name: 'Quang',
            seen: true,
        },
        {
           
            avatar: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores impedit sed, consequatur non ipsum natus earum? Alias, minima fugiat?',
            name: 'Quang',
            seen: true,
        },
        {
           
            avatar: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores impedit sed, consequatur non ipsum natus earum? Alias, minima fugiat?',
            name: 'Quang',
            seen: true,
        },
        {
           
            avatar: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores impedit sed, consequatur non ipsum natus earum? Alias, minima fugiat?',
            name: 'Quang',
            seen: true,
        },
        {
           
            avatar: 'Quang',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores impedit sed, consequatur non ipsum natus earum? Alias, minima fugiat?',
            name: 'Quang',
            seen: true,
        },

    ]
    const renderMessageItem = () => {
        return _.map(message, ({ avatar, name, message, seen }, key) => {
            return (
                <div onClick={() => history.push(`/message/${key}`)} key={key} className={`hover-pointer ${styles.messageItem} d-flex align-items-center`}>
                    <div style={{ width: '10%' }} className={` ${styles.messageDot} d-flex align-items-center justify-content-center`}>
                        {seen ? null :
                            <div style={{ width: '8px', height: '8px', backgroundColor: '#2E63DA' }} className='rounded-circle'></div>}
                    </div>
                    <div className={` d-flex align-items-center  ${styles.messageContent} py-3 ${id == key.toString() ? styles.messageContentBackground : null}`} style={{ width: '100%', paddingLeft: '1rem' }}>
                        <div>
                            <Avatar size={40} shape='square'>{avatar}</Avatar>
                        </div>
                        <div className={`px-3 ${styles.messageTitle}`}>
                            <p className={`m-0  ${styles.name}`}>{name}</p>
                            <div className={styles.message}>
                                <p className={`m-0 `}>{message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    }
  return (
   <div className={`message-list-wrap ${styles.wrap} pt-4`}>
       <div className={styles.messageWrap}>
       {renderMessageItem()}
       </div>
   </div>
  

  );
}

export default MessageList;