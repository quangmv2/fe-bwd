import { Avatar, Modal } from 'antd';
import React, { useState } from 'react';
import { RiMoreFill } from 'react-icons/ri';
import styles from "./styles.module.scss";
import './styles.scss'
import { woman1 } from '@assets'
import { LeftCircleFilled, LikeOutlined, MessageOutlined, RightCircleFilled, ShareAltOutlined } from '@ant-design/icons'
import _ from 'lodash'
import { Carousel } from 'antd';
import { PostComment, ShowMore } from "@components";
import { useHistory } from 'react-router-dom'
import ViewPost from '../view-post';

interface PostProps {

}

const PostComponent: React.FC<PostProps> = ({

}) => {
    const history = useHistory()
    const onViewPost = postId => {
        history.push(`/post/${postId}}`)
    }
    const menu = () => {
        return (
            <div>heo</div>
        )
    }
    const imageList = [
        {
            dataUrl: 'http://via.placeholder.com/400x400/',

        },
        {
            dataUrl: 'http://via.placeholder.com/500x700/',

        },
        {
            dataUrl: woman1
        },
        {
            dataUrl: woman1
        },
        {
            dataUrl: woman1
        },
        {
            dataUrl: woman1
        },
        {
            dataUrl: woman1
        },
        {
            dataUrl: woman1
        },
        {
            dataUrl: woman1
        },

        {
            dataUrl: woman1
        },
    ]
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const SampleNextArrow = props => {
        const { className, style, onClick } = props
        return (
            <div
                className={`${styles.arrow} ${styles.nextArrow} hover-pointer arrow-icon`}
                onClick={onClick}

            >
                <RightCircleFilled />
            </div>
        )
    }

    const SamplePrevArrow = props => {
        const { className, style, onClick } = props
        return (
            <div
                className={`${styles.prevArrow} arrow-icon hover-pointer ${styles.arrow}`}
                style={{ position: 'absolute', zIndex: 2, top: '48%' }}
                onClick={onClick}
            >
                <LeftCircleFilled />
            </div>
        )
    }

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    const renderImage = () => {
        return _.map(imageList, ({ dataUrl }) => {
            return (
                <div className='border-radius-12' onClick={() => onViewPost(1)}>
                    <img className='w-100 border-radius-12' style={{ height: '600px', objectFit: 'cover' }} src={dataUrl} />
                </div>
            )
        })

    }

    return (
        <div className={` post-wrap ${styles.wrap} `}>
            <div className='bg-white border-radius-12 p-3 shadow-css'>
                <div className='align-items-center d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <Avatar shape='square' className='border-radius-12' size={40}>N</Avatar>
                        <div className='px-3'>
                            <p className={` ${styles.name} m-0`}>Quynh Nga</p>
                            <p className='m-0 text-muted'>12 minutes ago</p>
                        </div>
                    </div>
                    <ShowMore menu={menu}/>

                </div>
                <div className={`pt-3 ${styles.content}`}>
                    <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsam qui doloribus? Deserunt doloribus voluptate veritatis provident voluptates voluptas, in nesciunt soluta iure pariatur alias laborum cum, corporis consectetur ad dignissimos officia incidunt. Maiores, dolorem nemo delectus animi blanditiis incidunt doloremque, asperiores ut exercitationem ex sit illo esse sed tempore.</p>
                    <Carousel arrows {...settings} className='w-100 border-radius-12'>
                        {renderImage()}
                    </Carousel>
                </div>
                <div className={`d-flex align-items-baseline justify-content-between mt-3 ${styles.reactSection}`}>
                    <div className='d-flex align-items-end'>
                        <div className='hover-pointer d-flex align-items-end'>
                            <div className={`d-flex justify-content-center align-items-center rounded-circle ${styles.likeIconContainer}`}>
                                <LikeOutlined style={{ fontSize: '17px', color: 'white' }} />
                            </div>
                            <span className='text-capitalize m-0'>2.8K like</span>
                        </div>
                        <div className=' hover-pointer d-flex align-items-end mx-3'>
                            <MessageOutlined style={{ fontSize: '22px' }} />
                            <span className='text-capitalize m-0'>22 comments</span>
                        </div>
                    </div>
                    <div className='hover-pointer d-flex align-items-center'>
                        <ShareAltOutlined style={{ fontSize: '24px' }} />
                        <span className=''>Share</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PostComponent;