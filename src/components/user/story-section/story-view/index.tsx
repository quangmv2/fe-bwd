import React, { Component } from 'react';
import { Divider, Layout, Menu } from 'antd';
import { LeftCircleFilled, LeftOutlined, RightCircleFilled, RightOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Stories from 'react-insta-stories';
import './styles.scss'
import styles from './styles.module.scss'
import _ from 'lodash'
import Avatar from 'antd/lib/avatar/avatar';
const { Header, Content, Footer, Sider } = Layout;


const StoryView = props => {
  const listStory = [
    {
      avatar: 'N',
      name: 'Quynh Nga',
      username: 'quynhnga'
    },
    {
      avatar: 'Q',
      name: 'Mai Văn Quang',
      username: 'quang312'
    },
    {
      avatar: 'N',
      name: 'Quynh Nga',
      username: 'quynhnga'
    },
    {
      avatar: 'Q',
      name: 'Mai Văn Quang',
      username: 'quang312'
    },
    {
      avatar: 'N',
      name: 'Quynh Nga',
      username: 'quynhnga'
    },
    {
      avatar: 'Q',
      name: 'Mai Văn Quang',
      username: 'quang312'
    },
    {
      avatar: 'N',
      name: 'Quynh Nga',
      username: 'quynhnga'
    },
    {
      avatar: 'Q',
      name: 'Mai Văn Quang',
      username: 'quang312'
    },
    {
      avatar: 'N',
      name: 'Quynh Nga',
      username: 'quynhnga'
    },
    {
      avatar: 'Q',
      name: 'Mai Văn Quang',
      username: 'quang312'
    },
    {
      avatar: 'N',
      name: 'Quynh Nga',
      username: 'quynhnga'
    },
    {
      avatar: 'Q',
      name: 'Mai Văn Quang',
      username: 'quang312'
    },
    {
      avatar: 'N',
      name: 'Quynh Nga',
      username: 'quynhnga'
    },
    {
      avatar: 'Q',
      name: 'Mai Văn Quang',
      username: 'quang312'
    },
    {
      avatar: 'N',
      name: 'Quynh Nga',
      username: 'quynhnga'
    },
    {
      avatar: 'Q',
      name: 'Mai Văn Quang',
      username: 'quang312'
    },
    {
      avatar: 'N',
      name: 'Quynh Nga',
      username: 'quynhnga'
    },
    {
      avatar: 'Q',
      name: 'Mai Văn Quang',
      username: 'quang312'
    },
    {
      avatar: 'N',
      name: 'Quynh Nga',
      username: 'quynhnga'
    },
    {
      avatar: 'Q',
      name: 'Mai Văn Quang',
      username: 'quang312'
    },
  ]

  const renderListStory = () => {
    return _.map(listStory, ({ name, avatar, username }) => {
      return (
        <div className='py-2 hover-pointer d-flex align-items-center'>
          <Avatar size={40} shape='square'>{avatar}</Avatar>
          <div className='px-3'>
            <p className={`m-0 ${styles.listName}`}>{name}</p>
            <p className='m-0 text-muted'>@{username}</p>
          </div>
        </div>
      )
    })

  }

  return (
    <Layout className='story-view-container' style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"

      >
        <div className={styles.title}>
          <h3 className='pt-4 pb-3 mx-4'>Featured Stories</h3>
        </div>
        <div className={`${styles.renderListStory}`}>
          <div className='px-4'>
            {renderListStory()}
          </div>
        </div>

      </Sider>
      <Layout >
        <div className='h-100 d-flex align-items-center justify-content-center'>
         <div className='d-flex align-items-center'>
           <LeftCircleFilled className='hover-pointer'/>
          <div className={` mx-3 ${styles.storiesWrap}`}>
            <Stories
              isPaused={true}
              stories={props.stories}
              defaultInterval={1500}
              width={378}
              height={672}
              storyStyles={{ borderRadius: '12px' }}
            />
          </div>
          <RightCircleFilled className='hover-pointer'/>
          </div>
        </div>
      </Layout>
    </Layout>

  );
};
export default StoryView;