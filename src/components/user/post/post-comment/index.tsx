import { Avatar, Dropdown } from 'antd';
import React, { useState } from 'react';
import { RiMoreFill } from 'react-icons/ri';
import styles from "./styles.module.scss";
import './styles.scss'
import { woman1 } from '@assets'
import { LeftCircleFilled, LikeOutlined, MessageOutlined, RightCircleFilled, ShareAltOutlined } from '@ant-design/icons'
import _ from 'lodash'
import { Carousel } from 'antd';
import { FullModal, ShowMore } from "@components";
import { useHistory } from 'react-router-dom'


interface PostCommentProps {

}

const PostComment: React.FC<PostCommentProps> = ({

}) => {
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
        <div className={` bg-white ${styles.wrap}`}>
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

    );
}

export default PostComment;