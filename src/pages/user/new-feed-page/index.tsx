import React from 'react';
import { css } from '@emotion/css';
import styles from "./styles.module.scss";
import { StorySection, AddPost, Post } from "@components";
import { Col, Row, Avatar, Input, Badge } from 'antd';
import './styles.scss'
import _ from 'lodash'
import { SendOutlined } from '@ant-design/icons'
import ScrollToBottom from 'react-scroll-to-bottom';
import { RiMoreFill } from 'react-icons/ri';

interface NewfeedPageProps {

}

const NewfeedPage: React.FC<NewfeedPageProps> = () => {
  const ROOT_CSS = css({
    height: 320,
    width: '100%'
  });
  const CONTACT_CSS = css({
    height: 'calc(100vh - 320px)',
    width: '100%'
  });
  const message = [
    {
      text: 'Good day, have you prepare a slide desk for me?'
    },
    {
      text: 'Hello, have a nice day'
    },
    {
      text: 'Hello, have a nice day'
    },
    {
      text: 'Hello, have a nice day'
    },
    {
      text: 'Hello, have a nice day'
    }
  ]
  const contact = [
    {
      name: 'Nga',
      newMessage: 3
    },

    {
      name: 'Nga',
      newMessage: 4
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga',
      newMessage: 1
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },

    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },
    {
      name: 'Nga'
    },

  ]
  const renderMessage = () => {
    return _.map(message, ({ text }) => {
      return (
        <div className={` ${styles.textMesWrap}`}>
          <div style={{ maxWidth: 'max-content' }}>
            <p className={` px-3 py-2 m-0 ${styles.textMess}`}>
              {text}
            </p>
          </div>
        </div>

      )
    })

  }
  const renderMyMessage = () => {
    return _.map(message, ({ text }) => {
      return (
        <div className={` ${styles.textMyMessage}`}>
          <div style={{ maxWidth: 'max-content' }}>
            <p className={` px-3 py-2 m-0 ${styles.textMyMess}`}>
              {text}
            </p>
          </div>
        </div>

      )
    })
  }
  const renderContact = () => {
    return _.map(contact, ({ name, newMessage }) => {
      return (
        <div className={`mt-3 ${styles.contactItemWrap} contact-item-wrap d-flex align-items-center justify-content-between`}>
          <div className='d-flex align-items-center'>
            <Avatar shape='square' size={40} className='border-radius-12'>N</Avatar>
            <p className={` ${styles.contactName} m-0`}>{name}</p>
          </div>
          {newMessage ? <Badge count={newMessage} /> : <RiMoreFill className='hover-pointer' />}
        </div>

      )
    })
  }
  return (
    <Row className={`  ${styles.wrap}`}>
      <Col lg={17} md={24} sm={24} xs={24} className='w-100 px-3'>
        <StorySection />
        <AddPost />
        <Post />

      </Col>
      <Col lg={7} md={0} sm={0} xs={0}  >
        <section className={` px-3 quick-chat-wrap ${styles.quickChatwrap}`}>
          <p className='text-uppercase px-4'>quick chat</p>
          <div className={`shadow-css bg-white border-radius-12 shadow-css p-3 `} >
            <ScrollToBottom className={ROOT_CSS}>
              <div className='d-flex align-items-start'>
                <div>
                  <Avatar size={40} shape='square'>N</Avatar>
                </div>
                <div>
                  {renderMessage()}
                </div>
              </div>
              <div className='d-flex align-items-start flex-row-reverse mt-2'>
                <div>
                  <Avatar size={40} shape='square'>N</Avatar>
                </div>
                <div className='d-flex flex-column align-items-end'>
                  {renderMyMessage()}
                </div>
              </div>
            </ScrollToBottom>
            <div>
              <Input bordered={false} placeholder='Type something' prefix={<SendOutlined />} />
            </div>
          </div>

        </section>

        <section className={` px-3 mt-3 ${styles.friendListWrap} friend-list-wrap`}>
          <div className=' px-4 d-flex justify-content-between align-items-center'>
            <p className='m-0 text-uppercase'>contact</p>
            <Badge count={4} />
          </div>
          <div className='shadow-css bg-white border-radius-12 mt-3 p-3'>
            <ScrollToBottom className={CONTACT_CSS}>
              <div>
                {renderContact()}
              </div>
            </ScrollToBottom>
          </div>
        </section>
      </Col>
    </Row>

  );
}

export default NewfeedPage;