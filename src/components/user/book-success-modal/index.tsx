import React, { memo } from 'react';
import { Row, Col } from 'antd'
import { doctorWoman, firework } from "@assets";
import styles from './styles.module.scss'
import { ButtonComponent, OutlineButton } from '@components'


interface bookSuccessProps {
   date: any,
   time: any
}

const BookSuccess: React.FC<bookSuccessProps> = memo(({

}) => {
    return (
        <Row className={styles.wrap}>
            <Col span={13} >
                <div className='d-flex align-items-center justify-content-center position-relative' style={{ backgroundImage: `url(${doctorWoman})`, backgroundSize: 'cover', width: '100%', height: '500px'}} >
                    <div className={`bg-white d-flex align-items-center shadow-css-xl p-3 border-radius-12 mt-5 position-absolute  ${styles.appointmentDetailWrap}`}>
                        <div className={`px-3 ${styles.appoitmentDetail}`}>
                            <p className={`m-0 ${styles.label}`}>Appointment detail</p>
                            <p className={`m-0 ${styles.content}`}>12 Nov, 2021 - 10:00</p>
                        </div>
                        <div className='px-3'>
                        <p className={`m-0 ${styles.label}`}>Service</p>
                        <p className={`m-0 ${styles.content}`}>Lorem, ipsum.</p>
                        </div>
                        <div className=''>
                        <p className={`m-0 ${styles.label}`}>Professional</p>
                            <p className={`m-0 ${styles.content}`}>Dr. Anh Phương</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span={11} className='d-flex  px-4'>
                <section className={styles.mainContent}>
                    <div className={styles.fireWork}>
                        <img src={firework}/>
                    </div>
                    <h2 style={{ zIndex: 550, position: 'relative'}}>Appointment booked successfully!</h2>
                    <p className={`py-2 pr-4 ${styles.textDetail}`}>Your appointment details are shown. You can add the booking to your favorite calendar</p>
                    <div className={`d-flex align-items-center ${styles.buttonWrap}`}>
                    <OutlineButton className={styles.cancelButton} ><p className='m-0'>Cancel booking</p></OutlineButton>
                    <ButtonComponent ><p className='m-0'>View detail</p></ButtonComponent>
                    </div>
                </section>
            </Col>
        </Row>
    );
})

export default BookSuccess;