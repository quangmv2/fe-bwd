import React, { memo } from 'react'
import styles from './styles.module.scss'
import { Steps, Dropdown, Menu, Checkbox, Card, Typography, Affix } from 'antd'
import { MessageOutlined, UserOutlined, PhoneOutlined, BellTwoTone, BellOutlined } from '@ant-design/icons'
import { woman1 } from '@assets'
import { OutlineButton, QuickChat } from '@components'
import { FaUserCheck, FaUserTimes } from "react-icons/fa"
import _ from 'lodash'
import './styles.scss'


const { Step } = Steps;
const { Text } = Typography;

interface ProfileRightSiderProps {
    isMyProfile: boolean
}

const ProfileRightSider: React.FC<ProfileRightSiderProps> = memo((
    { isMyProfile }
) => {
    const friendMenu = () => {
        return (
            <Menu className={styles.friendMenu}>
                <Menu.Item className='d-flex align-items-center py-2 justify-content-center'>
                    <FaUserTimes className={styles.icon} />
                    <p className='m-0'>Huỷ kết bạn</p>
                </Menu.Item>
                <Menu.Item className='d-flex align-items-center py-2 justify-content-center'>
                    <PhoneOutlined className={styles.icon} style={{ fontSize: '18px' }} />
                    <p className='m-0'>Gọi thoại</p>
                </Menu.Item>
            </Menu>
        )
    }
    const friendStatus = () => {
        return (
            <div className='bg-white border-radius-12 shadow-css p-3'>
                <Steps direction="vertical">
                    <Step status="finish" title="Latest Message" description="This is a description." icon={<MessageOutlined />} />
                    <Step status="finish" title="First Message" description="This is a description." icon={<MessageOutlined />} />
                    <Step status="finish" title="Be friends" description="This is a description." icon={<UserOutlined />} />
                    {/* <Step status="process" title="Pay" icon={<LoadingOutlined />} /> */}
                </Steps>
                <Dropdown overlay={friendMenu} placement="bottomCenter">
                    <div>
                        <OutlineButton className='d-flex align-items-center justify-content-center'>
                            <FaUserCheck className={styles.friendIcon} />
                            <p className='m-0 px-2'>Bạn bè</p>
                        </OutlineButton>
                    </div>
                </Dropdown>
            </div>
        )
    }
    const renderMedication = () => {
        return _.map(mediaOption, ({ label, note, isChecked }) => {
            return (
                <Card className={` ${isChecked ? styles.cardChecked : null } w-100 medi-card border-radius-12 my-2`}>
                    <Checkbox value={label} checked={isChecked} style={{width: '90%'}}>
                        <div className={styles.text}>
                        <Text delete={isChecked ? true : false}><p className='m-0'>{label}</p></Text>
                        <Text delete={isChecked ? true : false} className={styles.mediNote}>{note}</Text>
                        </div>
                    </Checkbox>
                    <div style={{ width: '10%'}} className='d-flex align-items-center justify-content-center'>
                  {isChecked ? <BellOutlined className={styles.bellOutline}/> :  <BellTwoTone />}
                  </div>
                </Card>

            )
        })
    }

    const mediaOption = [
        {
            label: '1x Cilatopram(20mg)',
            note: 'Take with food in the morning',
            isChecked: true
        },
        {
            label: '2x Lisinnopril(10mg)',
            note: 'Take twice daily with water',
            isChecked: false
        },
        {
            label: '1x loratadine(10mgs)',
            note: 'Taken once per day',
            isChecked: false
        }
    ]
    const mediManage = () => {

        return (
            <section className={styles.mediManage}>
                <p className={`text-uppercase ${styles.title} px-4 `}>Daily Med takens</p>
                <Affix offsetTop={90} onChange={affixed => console.log(affixed)}>
                <div className='bg-white border-radius-12 p-3 shadow-css'>
                    <p className={styles.todayTitle}>Today: <span>{mediaOption.length} medications</span></p>
                    {renderMedication()}
                </div>
  </Affix>,
               
            </section>
        )


    }
    return (
        <div className={styles.wrap}>
            {isMyProfile ? <div className='pt-3'>{mediManage()}</div> : <>  <QuickChat />
                {friendStatus()}
            </>}
        </div>

    )
})

export { ProfileRightSider }