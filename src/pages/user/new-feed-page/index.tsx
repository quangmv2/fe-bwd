import React from 'react';
import styles from "./styles.module.scss";
import { StorySection, AddPost, Post, ContactSidebar } from "@components";
import { Col, Row, Avatar, Input, Badge } from 'antd';

import './styles.scss'
import _ from 'lodash'
import { Swiper, SwiperSlide } from "swiper/react";
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;



interface NewfeedPageProps {

}

const NewfeedPage: React.FC<NewfeedPageProps> = () => {

  return (
   
    <Layout className='newfeed-page-wrap'>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0
        
      }}
      className='newfeed-sider'
    >
      <div style={{ paddingTop: '80px'}}>
   <ContactSidebar />
   </div>
    </Sider>
    <Layout className="site-layout" style={{ marginRight: '320px', maxWidth: '100%' }} >
      <Content  className='px-3 pt-4'>
      <StorySection />
      <AddPost />
       <Post />
      </Content>

    </Layout>
  </Layout>

  );
}

export default NewfeedPage;