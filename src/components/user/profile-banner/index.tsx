import React, { memo, useState } from 'react'
import { profileBG } from '@assets'
import styles from './styles.module.scss'
import { ProfileInfo } from './profile-info';
import { Avatar } from 'antd'

interface ProfileBannerProps {

}

const ProfileBanner: React.FC<ProfileBannerProps> = memo(() => {
    const [active, setActive] = useState('post');
    const handleMenu = type => {
        if (type === 'post') {
            setActive(type);
        }
        if (type === 'followers') {
            setActive(type);
        }
        if (type === 'following') {
            setActive(type);
        }
    };
    return (
        <>
            <section className={styles.wrap} style={{ backgroundImage: `url(${profileBG})` }}>
                <div className={styles.container}>
                    <ProfileInfo />
                </div>
            </section>
            <div className={styles.navigation}>
                <div className={styles.navigationContainer}>
                    <ul className={`d-flex align-items-center justify-content-center ${styles.menu}`}>
                        <li
                            className={active == 'post' ? styles.active : ''}
                            onClick={() => handleMenu('post')}
                        >
                            <strong>4</strong> Posts
             </li>
                        <li
                            className={active == 'followers' ? styles.active : ''}
                            onClick={() => handleMenu('followers')}
                        >
                            <strong>3</strong> Followers
             </li>
                        <li
                            className={active == 'following' ? styles.active : ''}
                            onClick={() => handleMenu('following')}
                        >
                            <strong>2</strong> Following
             </li>
                    </ul>
                </div>
            </div>

        </>

    )
})

export { ProfileBanner }