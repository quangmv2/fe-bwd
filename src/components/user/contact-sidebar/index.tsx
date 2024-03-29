import React, { CSSProperties } from 'react';
import { Dropdown, Avatar, Input, Badge } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import ScrollToBottom from 'react-scroll-to-bottom'
import { css } from '@emotion/css'
import styles from './styles.module.scss'
import _ from 'lodash'
import { RiMoreFill } from 'react-icons/ri';
import './styles.scss'
import ListContact from './list-contact'
import { QuickChat } from './quick-chat';

interface contactProps {
  style?: CSSProperties
}

const ContactSidebar: React.FC<contactProps> = ({

}) => {
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
    return _.map(message, ({ text }, index) => {
      return (
        <div className={` ${styles.textMesWrap}`} key={`msg ${index}`}>
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
    return _.map(message, ({ text }, index) => {
      return (
        <div className={` ${styles.textMyMessage}`} key={`mmsg ${index}`}>
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
    <>
     <QuickChat />
      <ListContact />


    </>


  );
}

export default ContactSidebar;