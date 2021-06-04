import React, { CSSProperties } from 'react';
import { Dropdown, Avatar, Input, Badge } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import ScrollToBottom from 'react-scroll-to-bottom'
import { css } from '@emotion/css'
import styles from './styles.module.scss'
import _ from 'lodash'
import { RiMoreFill } from 'react-icons/ri';
import './styles.scss'

interface contactProps {
  style?: CSSProperties
}

const ListContact: React.FC<contactProps> = ({

}) => {
  const CONTACT_CSS = css({
    height: 'calc(100vh - 320px)',
    width: '100%'
  });
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


  const renderContact = () => {
    return _.map(contact, ({ name, newMessage }, index) => {
      return (
        <div className={`mt-3 ${styles.contactItemWrap} contact-item-wrap d-flex align-items-center justify-content-between`}
          key={`contact ${index}`}
        >
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
      <section className={` mt-3 ${styles.friendListWrap} friend-list-wrap`}>
        <div className=' px-4 d-flex justify-content-between align-items-center'>
          <p className='m-0 text-uppercase'>contact</p>
          <Badge count={4} />
        </div>
        <div className='shadow-css bg-white border-radius-12 mt-3 p-3'>

          <div>
            {renderContact()}
          </div>
        </div>
      </section>
    </>
  );
}

export default ListContact;