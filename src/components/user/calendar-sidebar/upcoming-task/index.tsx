import React, { memo, useState } from 'react'
import styles from './styles.module.scss'
import { Divider, Modal } from 'antd'
import _ from 'lodash'
import OutlineButton from 'src/components/outline-button'
import { MessageOutlined, AppstoreOutlined, VideoCameraOutlined, VideoCameraTwoTone } from '@ant-design/icons'
import { MedicalHistory } from '@components'

interface UpcomingTaskProps {

}

const UpcomingTask: React.FC<UpcomingTaskProps> = memo(() => {
    const data = [
        {
            name: 'Quỳnh Nga',
            time: '12:20',
            rangeTime: '45mins',
            type: 'video'

        },
        {
            name: 'Mai Quang',
            time: '13:20',
            rangeTime: '45mins',
            type: 'chat'

        },
        {
            name: 'Mai Quang',
            time: '13:20',
            rangeTime: '45mins',
            type: 'inPerson'

        },
    ]
    const setIcon = (type: string) => {
        switch(type) {
            case 'chat':
                return <div className={styles.message}> <MessageOutlined  className={`p-3 text-warning ${styles.messageIcon}`}/>    </div> 
            case 'video':
                return <div className={styles.video}> <VideoCameraOutlined  className={`p-3 text-info ${styles.videoIcon}`}/>    </div> 
            default:
                return <div className={styles.inPerson}> <AppstoreOutlined  className={`p-3  ${styles.inPersonIcon}`}/>    </div> 
        }
    }
    const setColor = (type: string) => {
        switch(type) {
            case 'chat':
                return styles.borderChat
            case 'video':
                return styles.borderVideo
            default:
                return styles.borderInPerson
        }
    }
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
    const renderTask = () => {
        
        return _.map(data, ({ name, time, rangeTime, type }, key) => {
            return (
                <div key={key}>
                    <div className='d-flex justify-content-between'>
                    <div>
                        <div className={`${setColor(type)} ${styles.name}`}>
                            <h5 className='m-0'>{name}</h5>
                        </div>
                        <p className={styles.time}>{time} - {rangeTime}</p>
                        <div className={`d-flex align-items-center text-uppercase ${styles.viewDetail}`}>
                            <p className='m-0 hover-pointer' onClick={showModal}>
                                medical history
                            </p>
                            <p className='m-0'>
                                reports
                </p>
                        </div>
                    </div>
                    <div className={styles.icon}>
                    {setIcon(type)}
                    </div>
                    </div>
                    <div className='px-3'>
                        <Divider dashed={true} />
                    </div>
                </div>
            )
        })
    }
    return (
        <div>
            <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <MedicalHistory />
      </Modal>
            <p className={`${styles.title} text-uppercase m-0`}>upcoming appointments</p>
            <div className='bg-white shadow-css border-radius-12 pt-4 pb-2 mt-2'>
                {renderTask()}
            </div>
        </div>

    )
})

export { UpcomingTask }