import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { MessageList, MessageWrap, MessageUserInfo } from "@components";
import { Drawer } from 'antd';
import './styles.scss'
import _ from 'lodash'
import { Layout, Menu } from 'antd';
import {
  InfoCircleOutlined,
  InfoOutlined,
  MoreOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;




interface MessagePageProps {

}

const MessagePage: React.FC<MessagePageProps> = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Layout className={`message-wrap bg-white ${styles.wrap}`}>
       <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <MessageUserInfo />
      </Drawer>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0

        }}
        className={` ${styles.messgaePageSider}`}
      >
        <div style={{ paddingTop: '80px' }}>
          <MessageUserInfo />
        </div>
      </Sider>
      <Layout className={`message-wrap-layout ${styles.messageWrap} `} >
        <div className={`d-flex align-items-center justify-content-between ${styles.titleWrap} pt-4 pb-lg-5 pb-3 pb-md-3 pb-sm-3  px-5`}>
          <div>
            <h2 className='m-0'>Conversations</h2>
            <p className='m-0 text-uppercase'>24 active conversation detect</p>
          </div>
          <div className='d-flex align-items-center'>
            <div>
          <SearchOutlined className={styles.searchIcon}/>
          </div>
          <div className={` d-lg-none ${styles.moreIconWrap}`}>
          <InfoCircleOutlined onClick={showDrawer} className={styles.moreIcon}/>
          </div>
          </div>
        </div>
        <Content className={` d-flex ${styles.messageContent}`}>
          <div className='px-lg-3'>
            <MessageList />
          </div>
          <div className='w-100'>
            <MessageWrap />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MessagePage;