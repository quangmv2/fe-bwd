import React, { CSSProperties } from 'react';
import styles from "./styles.module.scss";
import logo from '@assets/icons/hopez-logo.png'
import { Badge, Dropdown, Avatar } from 'antd'
import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import './styles.scss'
import _ from 'lodash'


interface notificationProps {

}

const Notification: React.FC<notificationProps> = ({

}) => {
    const noti = [ 
        {
                avatar: 'N',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati.',
                time: '2 hours ago'
        },
        {
            avatar: 'N',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati.',
            time: '2 hours ago'
    },
    {
        avatar: 'N',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati.',
        time: '2 hours ago'
},
{
    avatar: 'N',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati.',
    time: '2 hours ago'
},
{
    avatar: 'N',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati.',
    time: '2 hours ago'
},
{
    avatar: 'N',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati.',
    time: '2 hours ago'
},
{
    avatar: 'N',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati.',
    time: '2 hours ago'
},
{
    avatar: 'N',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati.',
    time: '2 hours ago'
},
{
    avatar: 'N',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati.',
    time: '2 hours ago'
},
{
    avatar: 'N',
    content:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ullam ea odit nam quia cum eos minima enim ipsum reiciendis cupiditate, tenetur veritatis facilis nobis et laborum expedita aut mollitia voluptas corrupti provident laudantium quisquam, assumenda explicabo. Repudiandae sequi quis, velit in incidunt blanditiis laudantium ratione perferendis cupiditate, aliquam qui.   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, obcaecati.',
    time: '2 hours ago'
},

    ]
    const renderNotiItem = () => {
        return _.map(noti, ({ content, avatar, time }) => {
            return (
                <div className='d-flex align-items-start noti-items py-1 px-1 hover-pointer'>
                   <div>
                    <Avatar shape='square' size={40}>{avatar}</Avatar>
                    </div>
                    <div className={styles.notiContent}>
                        <div className={styles.notiText}>
                        <p className='m-0'>{content}</p> 
                        </div> 
                        <span>{time}</span>
                    </div>
                </div>
            )
        })

    }
    const menu = () => {
        return (
           <div className={`${styles.wrap} bg-white border-radius-12 p-3 shadow-css`}>
               <p className={styles.title}>Notification</p>
               {renderNotiItem()}
           </div>
        )
    }
    return (
        <div>
        <Dropdown overlay={menu} placement="bottomRight" className='hover-pointer notification-wrap-header'>
            <Badge count={5}>
                <BellOutlined />
            </Badge>
        </Dropdown>
        </div>


    );
}

export default Notification;