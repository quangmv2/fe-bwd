import React, { Component } from 'react';
import { Avatar, Layout, Dropdown, Carousel } from 'antd';
import { LeftCircleFilled, LeftOutlined, LikeOutlined, MessageOutlined, RightCircleFilled, RightOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Stories from 'react-insta-stories';
import './styles.scss'
import styles from './styles.module.scss'
import _ from 'lodash'
import { woman1 } from '@assets'
import { ShowMore } from '@components'
import { RiMoreFill } from 'react-icons/ri'
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from 'simple-react-lightbox'

const { Header, Content, Footer, Sider } = Layout;


const ViewPost = props => {
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
  const comment = [
    {
      avatar: 'N',
      name: 'Nga',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, porro ratione? Id ad praesentium error adipisci fugit ea natus distinctio magnam est molestias voluptatem impedit maxime iste beatae magni dignissimos, ipsam recusandae, facere mollitia voluptate aliquam libero explicabo omnis? Architecto quia perferendis labore voluptatibus nesciunt officiis, magni dicta corrupti nisi!'
    },
    {
      avatar: 'Q',
      name: 'Quang',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, hic!'
    },
    {
      avatar: 'N',
      name: 'Nga',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, porro ratione? Id ad praesentium error adipisci fugit ea natus distinctio magnam est molestias voluptatem impedit maxime iste beatae magni dignissimos, ipsam recusandae, facere mollitia voluptate aliquam libero explicabo omnis? Architecto quia perferendis labore voluptatibus nesciunt officiis, magni dicta corrupti nisi!'
    },
    {
      avatar: 'Q',
      name: 'Quang',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, hic!'
    },
    {
      avatar: 'N',
      name: 'Nga',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, porro ratione? Id ad praesentium error adipisci fugit ea natus distinctio magnam est molestias voluptatem impedit maxime iste beatae magni dignissimos, ipsam recusandae, facere mollitia voluptate aliquam libero explicabo omnis? Architecto quia perferendis labore voluptatibus nesciunt officiis, magni dicta corrupti nisi!'
    },
    {
      avatar: 'Q',
      name: 'Quang',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, hic!'
    },
    {
      avatar: 'N',
      name: 'Nga',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, porro ratione? Id ad praesentium error adipisci fugit ea natus distinctio magnam est molestias voluptatem impedit maxime iste beatae magni dignissimos, ipsam recusandae, facere mollitia voluptate aliquam libero explicabo omnis? Architecto quia perferendis labore voluptatibus nesciunt officiis, magni dicta corrupti nisi!'
    },
    {
      avatar: 'Q',
      name: 'Quang',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, hic!'
    },

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

        <img className='border-radius-12 w-100 h-100' src={dataUrl} />

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

  const renderComment = () => {
    return _.map(comment, ({ name, avatar, content }) => {
      return (

        <div className={`d-flex mt-3 ${styles.commentWrap}`}>
          <div>
            <Avatar size={40} shape='square'>{avatar}</Avatar>
          </div>
          <div className={`${styles.commentContainer} px-3 py-1  border-radius-12`}>
            <div className='d-flex align-items-center justify-content-between'>
              <p className={`m-0 ${styles.name}`}>{name}</p>
              <Dropdown overlay={null} placement="bottomRight">
                <RiMoreFill style={{ fontSize: '23px', color: '#a2aebd' }} />
              </Dropdown>
            </div>
            <p className={`${styles.content} m-0`}>{content}</p>

          </div>
        </div>
      )
    })

  }

  return (
    <div className='view-post-wrap'>
      {/* <Layout className={` ${styles.wrap}`}>
        <Sider
          style={{
            background: 'white',
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            right: 0,
            top: 0

          }}
        >
          <div>
            <div className={`p-3 ${styles.postInfoWrap}`}>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <Avatar shape='square' size={40}>N</Avatar>
                  <div className='px-3'>
                    <p className={`m-0 ${styles.name}`}>Quynh Nga</p>
                    <p className={`${styles.time} text-muted m-0`}>3 min ago</p>
                  </div>
                </div>
                <ShowMore menu='aa' />
              </div>
              <div className={`${styles.reactSection} d-flex align-items-end pt-3`}>
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
            </div>
            <div className={`${styles.renderComment} p-3`}>
              {renderComment()}
            </div>
          </div>
        </Sider>
        <Layout className="site-layout " style={{ marginRight: '320px', maxWidth: '100%', backgroundColor: 'transparent !important' }}  >
          <Carousel arrows {...settings} className='border-radius-12 '  >
          <img className='border-radius-12 w-100 h-100' src={woman1} />
          <img className='border-radius-12 w-100 h-100' src={woman1} />
          </Carousel>


        </Layout>
      </Layout> */}
    </div>
  );
};
export default ViewPost;