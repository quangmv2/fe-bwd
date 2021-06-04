import React, { memo } from 'react'
import { woman1 } from '@assets'
import styles from './styles.module.scss'
import { Avatar } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import { IoLocationOutline, IoImageOutline } from "react-icons/io5";

interface ProfileInfoProps {

}

const ProfileInfo: React.FC<ProfileInfoProps> = memo(() => {

    return (
        <section className={`d-flex align-items-center ${styles.avatarCard}`}>
            <div>
        <Avatar size={170} className={styles.avatar}>
            N
        </Avatar>
        </div>
        <div className={styles.info}>
            <h3 className="name">Nga</h3>
           <p className="username">@quynhnganehe</p>
        </div>
    </section>

    )
})

export { ProfileInfo }