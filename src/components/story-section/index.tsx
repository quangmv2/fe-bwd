import React, { CSSProperties } from 'react';
import styles from "./styles.module.scss";
import { woman1 } from "@assets"
import _ from "lodash";
import Avatar from 'antd/lib/avatar/avatar'
import OwlCarousel from 'react-owl-carousel'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './story-section.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//  import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';
import { PlusOutlined } from '@ant-design/icons';



interface storySectionProps {

}

const StorySection: React.FC<storySectionProps> = ({


}) => {
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

    // const events = {
    //     onDragged: function(event) {...},
    //     onChanged: function(event) {...}
    // };
    const Story = () => {
        return _.map(story, ({ name, avatar }) => {
            return (
                <SwiperSlide className={`${styles.storyContainer} border-radius-12 `} style={{ backgroundImage: `url(${woman1})` }} >
                    {/* <img className='w-100 h-100 border-radius-12 position-relative' src={woman1} /> */}
                    <div className='d-block  '>
                        <div className={`border-radius-12 position-absolute ${styles.avatarContainer}`}>
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
        <div style={{ maxHeight: '200px' }}>
            {/*        
    <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{
  "clickable": true
}} className="mySwiper">
  {Story()}
  </Swiper> */}

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
            
            className={`story-container ${styles.container} `}  spaceBetween={10} freeMode={true} pagination={{
                "clickable": true
            }} >
                <SwiperSlide className={`${styles.storyContainer} border-radius-12`}
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