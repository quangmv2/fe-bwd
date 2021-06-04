import React, { useState } from 'react';
import './styles.scss'
import styles from "./styles.module.scss"
import { woman1 } from '@assets'
import { Dropdown, Row, Menu, Col, Rate, DatePicker, Modal } from 'antd'
import { DownOutlined, AppstoreTwoTone, MessageTwoTone, PushpinTwoTone } from '@ant-design/icons'
import _ from 'lodash'
import { ButtonComponent } from '@components';
import Avatar from 'antd/lib/avatar/avatar';
import BookSuccess from '../book-success-modal';

interface PsychologistItemProps {

}

const PsychologistItem: React.FC<PsychologistItemProps> = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    const doctor = [
        {
            key: 1,
            name: 'Dr Norma Muphy',
            star: 3,
            position: 'clinical psychologist',
            username: 'DClinPsy',
            intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum, eum atque, ut excepturi nihil ullam veritatis, earum nulla ducimus ratione distinctio ipsum! Commodi nihil odit consequuntur in, earum, ea laboriosam numquam quis voluptates nesciunt voluptas! Aut in voluptatibus, quia rem nam fuga eveniet delectus totam asperiores labore ipsa ipsum!',
            offer: ['CBT', 'EMDR', 'CBT'],
            specialties: ['Eating Disoder', 'Abuse', 'PTSD', 'more'],
            time: ['12:00', '13:00', '14:00'],
            type: 'Video Call',
        },

        {
            key: 2,
            name: 'Thái Thị Quỳnh Nga',
            star: 3,
            position: 'psychoperapist',
            username: 'PGDIp',
            intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia corrupti doloribus dolor tenetur, consequatur ratione dolorum quis ea et.',
            offer: ['CBT', 'EMDR', 'ACT', 'More'],
            specialties: ['Eating Disoder', 'Abuse', 'PTSD', 'more'],
            time: ['6:00', '2:00', '16:00'],
            type: 'In Person'
        },
        {
            key: 3,
            name: 'Mr Olive Beiley',
            star: 3,
            position: 'psychoperapist',
            username: 'DClinPsy',
            intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia corrupti doloribus dolor tenetur, consequatur ratione dolorum quis ea et.',
            offer: ['CBT', 'EMDR', 'CBT', 'More'],
            specialties: ['Eating Disoder', 'Abuse', 'PTSD', 'more'],
            time: ['8:00', '17:00', '18:00'],
            type: 'In Person'
        },
        {
            key: 4,
            name: 'MvQuang',
            star: 3,
            position: 'clinical psychologist',
            username: 'PGDIp',
            intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, aspernatur!',
            offer: ['CBT', 'EMDR', 'ACT', 'More'],
            specialties: ['Eating Disoder', 'Abuse', 'PTSD', 'more'],
            time: ['15:00', '13:30', '14:50'],
            type: 'Video Call'
        },
        {
            key: 5,
            name: 'Quynh Nga',
            star: 3,
            position: 'clinical psychologist',
            username: 'PGDIp',
            intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum, eum atque, ut excepturi nihil ullam veritatis, earum nulla ducimus ratione distinctio ipsum! Commodi nihil odit consequuntur in, earum, ea laboriosam numquam quis voluptates nesciunt voluptas! Aut in voluptatibus, quia rem nam fuga eveniet delectus totam asperiores labore ipsa ipsum!',
            specialties: ['Eating Disoder', 'Abuse', 'PTSD', 'more'],
            offer: ['CBT', 'EMDR', 'ACT', 'More'],
            time: ['12:00', '13:00', '14:00'],
            type: 'In Person'
        },
    ]
    const [timePick, setTimePick] = useState('');
    const renderDoctor = () => {
        return _.map(doctor, ({ name, star, key, position, username, intro, offer, specialties, time, type }) => {
            return (
                <Row key={key} className='bg-white border-radius-12 p-4 shadow-css mt-4'>
                    <Col span={4} className='d-flex flex-column align-items-center'>
                        <Avatar size={120}>N</Avatar>
                        <div className={`option-wrap d-flex align-items-center justify-content-between pt-3 w-100 px-3`}>
                            <AppstoreTwoTone />
                            <MessageTwoTone />
                            <PushpinTwoTone />
                        </div>

                        <Rate value={star} className='mt-3' />
                    </Col>
                    <Col span={14} className={styles.content}>
                        <p className={`m-0 ${styles.name}`}>{name}</p>
                        <p className={`text-capitalize m-0 py-1  ${styles.position}`}>{position}-{username}</p>

                        <div className={` pt-2 ${styles.intro}`}>
                            <p className='m-0'>{intro}</p>
                        </div>


                        <div className={`pt-3 ${styles.therapiesOffered}`}>
                            <p className='m-0'>
                                Therapies Offered
                            </p>
                            <div className='d-flex align-items-center py-3'>
                                {offer.map(offerItem => {
                                    return (
                                        <div className={`mx-1 ${styles.tagItem} shadow-css py-2 px-3`}>
                                            {offerItem}
                                        </div>
                                    )

                                })}
                            </div>
                        </div>
                        <div className={styles.special}>
                            <p>
                                Top Specialties
                            </p>
                            <div className='d-flex align-items-center'>
                                {specialties.map(specialtiesItem => {
                                    return (
                                        <div className={`mx-1 ${styles.tagItem} shadow-css py-2 px-3`}>
                                            {specialtiesItem}
                                        </div>
                                    )

                                })}
                            </div>
                        </div>
                    </Col>
                    <Col span={6} className={`p-3 time-picker-wrap ${styles.timePicker}`}>
                        <DatePicker format="MMM DD" className='w-100' bordered={false} />
                        <p className={`${styles.type}`}>{type} 50 mins</p>
                        <div className=''>
                            {time.map(timeItem => {
                                return (
                                    <div onClick={() => setTimePick(timeItem)} className={`hover-pointer py-2 my-2 w-100 d-flex align-items-center justify-content-center ${styles.timeWrap} ${timePick == timeItem ? styles.timePick : null}`}>
                                        {timeItem}
                                    </div>
                                )
                            })}
                        </div>
                        <ButtonComponent onPress={showModal} loading={1} className='mt-3'>Book</ButtonComponent>
                    </Col>
                </Row>
            )
        })

    }
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="https://www.aliyun.com">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );
    return (
        
        <div className={`psychologist-item-wrap ${styles.wrap}`}>
           <Modal
        wrapClassName='success-booking-modal' 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        width={1000}>
        <BookSuccess  />
      </Modal>
            <p className={`${styles.title} text-capitalize`}>Our Therapists</p>
            <div className='d-flex align-items-center justify-content-between px-3'>
                <Dropdown overlay={menu} trigger={['click']}>
                    <p className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        sort <DownOutlined />
                    </p>
                </Dropdown>
                <div className='d-flex align-items-center justify-content-center'>
                    <p className={`${styles.needHelp} m-0`}>Need more help?</p>
                    <button className={`btn py-2  ${styles.guideMatchingButton}`}>Guide Matching</button>
                </div>
            </div>
            <div className='px-2 '>
                {renderDoctor()}
            </div></div>
    );
}

export default PsychologistItem;