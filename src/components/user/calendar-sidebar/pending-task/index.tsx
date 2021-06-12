import React, { memo } from 'react'
import styles from './styles.module.scss'
import { Tag } from 'antd'
import OutlineButton from 'src/components/outline-button'
import { RightOutlined } from '@ant-design/icons'

interface PendingTaskProps {

}

const PendingTask: React.FC<PendingTaskProps> = memo(() => {

    return (
      <div className='bg-white shadow-css border-radius-12 '>
         <div className='pt-4 d-flex justify-content-between'>
             <div>
             <div className={styles.nameWrap}>
                 <p className='m-0'>pending task</p>
                 <h5 className='m-0'>Quỳnh Nga</h5>
             </div>
             <p className={`m-0 py-1 ${styles.time}`}>Wednesday: 9:00</p>
             </div>
             <div className={styles.tag}>
             <Tag color="green">Returning patient</Tag>
             </div>
         </div>
         <div className={`py-4 ${styles.buttonWrap} d-flex align-items-center justify-content-between`}>
             <div className={`${styles.button} d-flex align-items-center justify-content-center`}>
             <p className='m-0 py-2 px-3'>Write a preciption</p>
             </div>
             <div className='px-3'>
             <RightOutlined className={styles.icon}/>
             </div>
         </div>
      </div>

    )
})

export { PendingTask }