import React, { Component } from 'react';
import { Avatar, Layout, Dropdown, Carousel } from 'antd';
import { LeftCircleFilled, LikeOutlined, MessageOutlined, RightCircleFilled } from '@ant-design/icons';
import './styles.scss'
import styles from './styles.module.scss'
import _ from 'lodash'
import { woman1 } from '@assets'
import { PostComment } from '@components'
import { RiMoreFill } from 'react-icons/ri'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  Navigation
} from 'swiper/core';
import { IoIosClose } from "react-icons/io"
import { useHistory, useParams } from "react-router-dom";



// install Swiper modules
SwiperCore.use([Navigation]);

const { Header, Content, Footer, Sider } = Layout;


const ViewPost = props => {
  const history = useHistory();
  let postId = useParams();
  console.log('id', postId)
  const elements = [
    {
      src: woman1,
      caption: 'Lorem ipsum dolor sit amet',
      width: 1920,
      height: 'auto'
    },
    {
      src: woman1,
      thumbnail: woman1,
      caption: 'Commodo commodo dolore',
      width: 1024,
      height: 'auto'
    },
    {
      src: woman1,
      thumbnail:
        woman1,
      caption: 'Vimeo video',
      autoplay: false,
      showControls: true
    }
  ]

  const SampleNextArrow = props => {
    const { className, style, onClick } = props
    return (
      <div
        style={{ position: 'absolute', zIndex: 2, top: '48%' }}
        className={`${styles.arrow} ${styles.nextArrow} hover-pointer arrow-icon`}
        onClick={onClick}

      >
        <RightCircleFilled />
      </div>
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
  const renderImage = () => {
    return _.map(imageList, ({ dataUrl }) => {
      return (
        <SwiperSlide className={`${styles.swiperSlide} `}>
          <img className='w-100 h-100' src={dataUrl} />
        </SwiperSlide>
      )
    })

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



  return (
    <div className='view-post-wrap'>
      <Layout className={` ${styles.wrap}`}>
        <Sider
          style={{
            background: 'white',
            overflow: 'auto',
            position: 'fixed',
            right: 0,
          }}
        >
          <PostComment />
        </Sider>
        <Layout className={styles.layoutContent} >
          <Content>
            <IoIosClose onClick={() => history.goBack()} className={`${styles.closeIcon} position-absolute text-white hover-pointer`} style={{}} />
            <Swiper navigation={true} className="mySwiper">
              {renderImage()}
            </Swiper>
            <div className='d-md-none'>
            <PostComment />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default ViewPost;