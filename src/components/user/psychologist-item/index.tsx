import React, { useState } from 'react';
import './styles.scss'
import styles from "./styles.module.scss"
import { woman1 } from '@assets'
import { Input, Rate } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import _ from 'lodash'

interface PsychologistItemProps {

}

const PsychologistItem: React.FC<PsychologistItemProps> = () => {
    const doctor = [
        {
            key: 1,
            name: 'Alllo',
            star: 3
        },

        {
            key: 2,
            name: 'Thái Thị QUỳnh Nga',
            star: 3
        },
        {
            key: 3,
            name: 'Quỳnh Nga',
            star: 3
        },
        {
            key: 4,
            name: 'MvQuang',
            star: 3
        },
        {
            key: 5,
            name: 'Quynh Nga',
            star: 3
        },

    ]
    const [ doctorChoose, setDoctorChoose] = useState<number>(1);
    const renderDoctor = () => {
        return _.map(doctor, ({ name, star, key }) => {
            return (
                <div key={key}>
                    <div onClick={() => {setDoctorChoose(key)}} className={`d-flex bg-white border-radius-12 mb-5 ${key == doctorChoose ? `shadow-css-xl ${styles.doctorPicked}`: null}`} style={{ height: '120px' }}>
                       <div className='h-100'>
                        <img src={woman1} className='h-100 '  />
                        </div>
                        <div className='py-3 px-3 '>
                            <Rate disabled defaultValue={star} />
                            <div className='pt-2'>
                                <p className={`m-0 ${styles.name} text-capitalize`}>{name}</p>
                                <p className={`m-0 text-muted ${styles.lastVisited}`}>Last visited - 1 month ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    }
    return (
        <div className={`psychologist-item-wrap ${styles.wrap} `}>
            <p className={`${styles.title} text-capitalize`}>psychologist</p>
            <div >
                <Input bordered={false} className='bg-white border-radius-12 overflow-hidden shadow-css' prefix={<SearchOutlined />} />
            </div>
            <div className='px-4'>
                {renderDoctor()}
            </div></div>
    );
}

export default PsychologistItem;