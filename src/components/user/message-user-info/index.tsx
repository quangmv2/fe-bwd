import React from 'react';
import styles from './styles.module.scss'
import { Avatar, Divider, Steps } from 'antd'
import { BellOutlined, HeartFilled, MoreOutlined } from '@ant-design/icons'
import './styles.scss'

const { Step } = Steps;
interface MessageUserInfoProps {
    
}

const MessageUserInfo: React.FC<MessageUserInfoProps> = ({

}) => {
    

    return (
      <div className={styles.wrap}>
          <div className={`${styles.avatarWrap} d-flex flex-column align-items-center justify-content-center `}>
          <Avatar size={100} shape='square' className={styles.avatar}>N</Avatar>
          <p className={`m-0 ${styles.name}`}>Quỳnh Nga</p>
          <p className={`m-0 `}>11 folowers</p>
          </div>
          <div className='px-4'>
                <Divider className={styles.divider}/>
          </div>
          <div className='d-flex justify-content-between px-4 py-4'>
            <div className={`${styles.option} bg-white border-radius-12 shadow-css-xl d-flex align-items-center justify-content-center`}>< HeartFilled className={styles.optionIcon}/></div>
            <div className={`${styles.option} bg-white border-radius-12 shadow-css-xl d-flex align-items-center justify-content-center`}><BellOutlined className={styles.optionIcon}/></div>
            <div className={`${styles.option} bg-white border-radius-12 shadow-css-xl d-flex align-items-center justify-content-center`}><MoreOutlined rotate={90} className={styles.optionIcon}/></div>
          </div>
          <div className='px-4'>
                <Divider className={styles.divider}/>
          </div>
          <Steps progressDot className='px-3' current={0} direction="vertical">
      <Step title="Last Message" description="23 - 10 - 2021 " />
      <Step title="Be friends" description="23 - 5 - 2021" />
    </Steps>
      </div>
    );
}

export default MessageUserInfo;