import { Avatar, Dropdown, Button } from 'antd';
import React, { CSSProperties } from 'react';
import { RiMoreFill } from 'react-icons/ri';
import styles from "./styles.module.scss";
import './styles.scss'
import { woman1 } from '@assets'
import { CommentOutlined, LikeOutlined, MessageOutlined, ShareAltOutlined } from '@ant-design/icons';
interface PostProps {

}

const PostComponent: React.FC<PostProps> = ({

}) => {
    const menu = () => {
        return (
            <div>heo</div>
        )
    }
    return (
        <div className={` post-wrap ${styles.wrap}`}>
            <div className='bg-white border-radius-12 p-3 shadow-css'>
                <div className='align-items-center d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <Avatar shape='square' className='border-radius-12' size={40}>N</Avatar>
                        <div className='px-3'>
                            <p className={` ${styles.name} m-0`}>Quynh Nga</p>
                            <p className='m-0 text-muted'>12 minutes ago</p>
                        </div>
                    </div>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <div className={` ${styles.moreContainer} hover-pointer px-1`}>
                            <RiMoreFill style={{ fontSize: '23px', color: '#a2aebd' }} />
                        </div>
                    </Dropdown>

                </div>
                <div className={`pt-3 ${styles.content}`}>
                    <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsam qui doloribus? Deserunt doloribus voluptate veritatis provident voluptates voluptas, in nesciunt soluta iure pariatur alias laborum cum, corporis consectetur ad dignissimos officia incidunt. Maiores, dolorem nemo delectus animi blanditiis incidunt doloremque, asperiores ut exercitationem ex sit illo esse sed tempore.</p>
                    <div className={` border-radius-12 ${styles.imageContainer}`}>
                        <img className='w-100 border-radius-12' src={woman1}/>
                    </div>
                </div>
                <div className={`d-flex align-items-baseline justify-content-between mt-3 ${styles.reactSection}`}>
                <div className='d-flex align-items-end'>
                    <div className='hover-pointer d-flex align-items-end'>
                        <div className={`d-flex justify-content-center align-items-center rounded-circle ${styles.likeIconContainer}`}>
                            <LikeOutlined style={{fontSize: '17px', color: 'white'}}/>
                        </div>
                        <span className='text-capitalize m-0'>2.8K like</span>
                    </div>
                    <div className=' hover-pointer d-flex align-items-end mx-3'>
                            <MessageOutlined  style={{fontSize: '22px'}}/>
                        <span className='text-capitalize m-0'>22 comments</span>
                    </div>
                </div>
                <div className='hover-pointer d-flex align-items-center'>
                    <ShareAltOutlined style={{fontSize: '24px'}}/>
                    <span className=''>Share</span>
                </div>
                </div>
            </div>
        </div>
    );
}

export default PostComponent;