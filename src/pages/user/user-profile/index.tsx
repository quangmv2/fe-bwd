import React from 'react'
import { ProfileBanner, Post, ProfileSider, AddPost, ProfileRightSider } from '@components'
import { Layout } from 'antd'
import styles from './styles.module.scss'
import { useParams } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
interface UserProfileProps {

}

const UserProfilePage: React.FC<UserProfileProps> = () => {
    const { id } = useParams<{ id: string }>();
    const myId = 'quynhngane'
    return (
        <>
            <ProfileBanner />
            <Layout className={styles.wrap}>
                <Sider className={`p-3 ${styles.leftSider}`} width={350}>
                    <ProfileSider />
                </Sider>
                <Layout className={styles.layoutContent}>
                    <Sider
                       width={'calc(100% - 350px)'}
                        style={{


                        }}
                        className={` ${styles.rightSider}`}
                    >
                        <Content className='px-3 pt-2'>
                            <div className={styles.profileSider}>
                                <ProfileSider />
                            </div>
                            {id == myId ? <AddPost /> : null}
                            <div className='pt-2'> <Post />
                            </div>
                            <Post />
                            <Post />
                            <Post />

                        </Content>
                    </Sider>
                    <Layout 
                 
                    className={` px-2 ${styles.content} ${styles.layoutContent}`} style={{ width: '350px'}} >

                        <ProfileRightSider isMyProfile={id == myId ? true : false} />
                        {/* <Content className='px-3 pt-2'>
                            <div className={styles.profileSider}>
                        <ProfileSider />
                        </div>
                            {id == myId ? <AddPost /> : null}
                            <div className='pt-2'> <Post />
                            </div>
                            <Post />
                            <Post />
                            <Post />

                        </Content> */}

                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}

export default UserProfilePage;