import React from 'react';
import { Divider, Avatar, Input, Badge } from 'antd'
import { PhoneOutlined, PlusOutlined, PlusSquareOutlined } from '@ant-design/icons'
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';
import { css } from '@emotion/css'
import styles from './styles.module.scss'
import _ from 'lodash'
import './styles.scss'

interface MessageWrapProps {

}

const MessageWrap: React.FC<MessageWrapProps> = ({

}) => {
    const ROOT_CSS = css({
        height: 'calc(100vh - 310px)',
        width: '100%',
        paddingLeft: '2rem',
    });
    const message = [
        {
            myMess: false,
            text: 'Good day, have you prepare a slide desk for me?'
        },
        {
            myMess: true,
            text: 'Hello, have a nice day'
        },
        {
            myMess: false,
            text: 'Good day, have you prepare a slide desk for me?'
        },
        {
            myMess: true,
            text: 'Hello, have a nice day'
        },
        {
            myMess: false,
            text: 'Good day, have you prepare a slide desk for me?'
        },
        {
            myMess: true,
            text: 'Hello, have a nice day'
        },
        {
            myMess: false,
            text: 'Good day, have you prepare a slide desk for me?'
        },
        {
            myMess: true,
            text: 'Hello, have a nice day'
        },
        {
            myMess: true,
            text: 'Hello, have a nice day'
        },
        {
            myMess: true,
            text: 'Hello, have a nice day'
        },
        {
            myMess: true,
            text: 'Hello, have a nice day'
        },
    ]
    const scrollToBottom = useScrollToBottom();
    const [sticky] = useSticky();

    const renderMess = () => {
        return _.map(message, ({ text, myMess }) => {
            return (
                <div className={`d-flex  align-items-start ${myMess ? `flex-row-reverse` : null }`}>
                    {!sticky && <button onClick={scrollToBottom}>Click me to scroll to bottom</button>}
                <div className={`${myMess ? `flex-column align-items-end d-flex  ` : null }`}>
                <div className={` ${styles.textMesWrap} my-2`}>
                    <div style={{ maxWidth: 'max-content' }}>
                        <p className={` px-3 py-2 m-0 ${myMess ? styles.textMyMess : styles.textMess}`}>
                            {text}
                        </p>
                    </div>
                </div>
                </div>
            </div>


            )
        })
    }
    return (
        <>
            <section className={` px-3 message-render-wrap  message-render ${styles.wrap}`}>
                    <ScrollToBottom className={styles.scrollWrap}>
                       {renderMess()} 
                    </ScrollToBottom>
                    <div className='px-5'>
                    <Divider />
                    </div>
                  <div className='d-flex align-items-center '>
                      <div style={{ width: '10%'}} className='d-flex align-items-center justify-content-center'>
                  <div className={` d-flex align-items-center justify-content-center ${styles.plusIcon}`}>
                  <PlusOutlined />
                  </div>
                  </div>
                  <div style={{ width: '80%'}}>
                       <Input placeholder='Start typing your message' bordered={false}/>
                       </div>
                       <div style={{ width: '10%'}} className='d-flex align-items-center justify-content-center'>
                       <PhoneOutlined className={styles.phoneIcon}/>
                       </div>
                  </div>
            </section>
        </>
    );
}

export default MessageWrap;