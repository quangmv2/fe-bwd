import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { woman1 } from "@assets"
import _ from "lodash";
import { Avatar, Modal } from 'antd'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './story-section.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { PlusOutlined } from '@ant-design/icons';
import StoryView from './story-view'

interface storySectionProps {

}

const StorySection: React.FC<storySectionProps> = ({


}) => {
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
    const story = [
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },
        {
            name: 'aaaaa',
            avatar: "N",
            image: ''
        },


    ]
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };
    const stories = [
        ''
    ]

    // const events = {
    //     onDragged: function(event) {...},
    //     onChanged: function(event) {...}
    // };
    const Story = () => {
        return _.map(story, ({ name, avatar }, index) => {
            return (
                <SwiperSlide
                    onClick={showModal}
                    className={`${styles.storyContainer} hover-pointer border-radius-12 `} style={{ backgroundImage: `url(${woman1})` }} >
                    {/* <img className='w-100 h-100 border-radius-12 position-relative' src={woman1} /> */}
                    <div className='d-block  '>
                        <div className={`border-radius-12 position-absolute ${styles.avatarContainer}`} style={{ minWidth: '42px' }}>
                            <Avatar shape='square' size={32} className='border-radius-12'>N</Avatar>
                        </div>
                        <div className='position-absolute bottom-0 w-100'>
                            <p className=' text-white text-center text-capitalize '>{name}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })

    }
    return (
        <div className={` ${styles.wrap} story-wrap`}>
          
            <Modal  visible={isModalVisible} wrapClassName='story-view-modal' footer={null} onCancel={handleCancel}>
                <StoryView
                    stories={stories}
                />
            </Modal>
          
            <Swiper
                breakpoints={{
                    1024: {
                        width: 1024,
                        slidesPerView: 8,
                    },
                    991: {
                        width: 991,
                        slidesPerView: 8,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 8,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 6,
                    },
                    480: {
                        width: 768,
                        slidesPerView: 6,
                    },
                }}

                className={`story-container  ${styles.container}`} spaceBetween={10} freeMode={true} pagination={{
                    "clickable": true
                }} >
                <SwiperSlide className={`${styles.storyContainer} hover-pointer border-radius-12`}
                    style={{ backgroundImage: `url(${woman1})` }}
                >
                    <div className='card-body d-block  w-100 position-absolute bottom-0 text-center justify-content-center d-flex flex-column align-items-center'>
                        <div className={` border-radius-12 ${styles.addIconWrap}`}>
                            <div className={`d-flex justify-content-center align-items-center icon-wrap bg-white border-radius-12 ${styles.iconWrap}`}>
                                <PlusOutlined />
                            </div>
                        </div>
                        <p className='text-white mt-2 mb-0'>Add Story</p>
                    </div>
                </SwiperSlide>
                {Story()}
            </Swiper>
        </div>


    );
}

export default StorySection;