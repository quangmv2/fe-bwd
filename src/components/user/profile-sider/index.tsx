import React, { memo } from 'react'
import styles from './styles.module.scss'
import { Col, Divider, Row } from 'antd'
import {woman1} from '@assets'



interface ProfileSiderProps {

}

const ProfileSider: React.FC<ProfileSiderProps> = memo(() => {

    return (
        <div className={styles.wrap}>
            <section className={` bg-white shadow-css border-radius-12 ${styles.intro}`}>
                <div className={`p-3 ${styles.container}`} >
                    <p className={`m-0 ${styles.label}`}>Intro</p>
                    <p className={`m-0 pt-1 ${styles.content}`}>Professional photographer, ocean modal</p>
                </div>
                <div className={`p-3 ${styles.container}`}>
                    <p className={`m-0 ${styles.label}`}>Work</p>
                    <p className={`m-0 pt-1 ${styles.content}`}>VKU</p>
                </div>
                <div className={`p-3 ${styles.container}`}>
                    <p className={`m-0 ${styles.label}`}>Places</p>
                    <p className={`m-0 pt-1 ${styles.content}`}>Based on VietNam</p>
                    <p className={`m-0 pt-1 ${styles.content}`}>Made in VietNam</p>
                </div>
                <div className='p-3'>
                    <p className={`m-0 ${styles.content}`}>145 followers</p>
                </div>
            </section>
            <section className={`p-3 mt-4 bg-white shadow-css border-radius-12 ${styles.photos}`}>
                <p className='m-0'>Photo</p>
                <Row >
                    <Col span={12} className={styles.imageWrap}><img className='w-100 h-100 ' src={woman1}/></Col>
                    <Col span={12} className={styles.imageWrap}><img className='w-100 h-100' src={woman1}/></Col>
                    <Col span={12} className={styles.imageWrap}><img className='w-100 h-100 ' src={woman1}/></Col>
                    <Col span={12}className={styles.imageWrap}><img className='w-100 h-100 ' src={woman1}/></Col>
                </Row>
            </section>
            <section className={`p-3 mt-4 bg-white shadow-css border-radius-12 ${styles.photos}`}>
                <p className='m-0'>Friends</p>
                <Row >
                    <Col span={12} className={styles.imageWrap}><img className='w-100 h-100 border-radius-12' src={woman1}/></Col>
                    <Col span={12} className={styles.imageWrap}><img className='w-100 h-100 border-radius-12' src={woman1}/></Col>
                    <Col span={12} className={styles.imageWrap}><img className='w-100 h-100 border-radius-12' src={woman1}/></Col>
                    <Col span={12}className={styles.imageWrap}><img className='w-100 h-100 border-radius-12' src={woman1}/></Col>
                </Row>
            </section>
        </div>

    )
})

export { ProfileSider }