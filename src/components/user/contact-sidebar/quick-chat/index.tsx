import React, { CSSProperties, memo } from 'react';
import { Dropdown, Avatar, Input, Badge } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import ScrollToBottom from 'react-scroll-to-bottom'
import { css } from '@emotion/css'
import styles from './styles.module.scss'
import _ from 'lodash'
import { RiMoreFill } from 'react-icons/ri';
import './styles.scss'


interface quickChatProps {
  style?: CSSProperties
}
const QuickChat: React.FC<quickChatProps> = memo(() => {



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

  return (
    <>
      <section className={` py-4 quick-chat-wrap ${styles.wrap}`}>
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
 


    </>


  );
  })

export {
    QuickChat
} 