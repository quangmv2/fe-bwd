import React, { memo } from 'react'
import styles from './styles.module.scss'

interface ApproveEventProps {

}

const ApproveEvent: React.FC<ApproveEventProps> = memo(() => {

    return (
      <div className='bg-white shadow-css border-radius-12 d-flex justify-content-between'>
          <div className='py-4'>
          <div className={`${styles.nameWrap}`}>
              <h5 className={`m-0 ${styles.name}`}>Lucas Schimdt</h5>
              <p className='m-0'>Consultation</p>
          </div>
          <p className={`m-0 pt-3 ${styles.time}`}>Tomorrow: 9:00 - 10:00</p>
          </div>
          <div>
              <div className={`h-50 d-flex align-items-center justify-content-center ${styles.button}`}>
                 <p className='m-0'>Approve</p> 
              </div>
              <div className={`h-50 d-flex align-items-center justify-content-center ${styles.button}`}>
                 <p className='m-0'>Reschedule</p> 
              </div>
          </div>
      </div>

    )
})

export { ApproveEvent }