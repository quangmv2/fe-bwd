import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss"
import { woman1 } from '@assets'
import { Swiper, SwiperSlide } from "swiper/react"
import _ from 'lodash'
import { ArrowUpOutlined, ArrowDownOutlined, ArrowLeftOutlined, LeftCircleOutlined, LeftCircleFilled } from '@ant-design/icons'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
  Navigation
} from 'swiper/core';
import './styles.scss'
import { ButtonComponent } from '@components'
import OutlineButton from 'src/components/outline-button';

SwiperCore.use([Navigation]);

interface PsychologistOverviewProps {

}

const PsychologistOverview: React.FC<PsychologistOverviewProps> = () => {
const week  = [
  {value: 'monday'},
  {value: 'tuesday'},
  {value: 'wednesday'},
  {value: 'thursday'},
  {value: 'friday'},
  {value: 'saturday'},
  {value: 'sunday'},
]
const time = [
  {
    value: '3:20',
    period: 'AM'
  },
  {
    value: '4:20',
    period: 'PM'
  },
  {
    value: '3:20',
    period: 'AM'
  },
  {
    value: '4:20',
    period: 'PM'
  },
  {
    value: '3:20',
    period: 'AM'
  },
  {
    value: '4:20',
    period: 'PM'
  },
  {
    value: '3:20',
    period: 'AM'
  },
  {
    value: '4:20',
    period: 'PM'
  },
]
const [ dayPick, setDayPick ] = useState('');
const [dayPicked, setDayPicked ] = useState(false);
const [ timePick, setTimePick ] = useState('');

console.log('text', Navigation)
const pickDay = value => {
  setDayPick(value)
  setTimeout(() => {
    setDayPicked(true)
  }, 800);
}
  const renderWeek = () => {
    return _.map(week, ({ value }) => {
      return (
        <SwiperSlide className='d-flex align-items-center justify-content-center'>
          <div onClick={() => {pickDay(value)}} className={` d-flex align-items-center justify-content-center text-uppercase ${styles.swiperContent} ${(value == dayPick ? 'day-pick' : '')}`} >
            <p className='m-0'>
            {value}
            </p>
            </div>
        </SwiperSlide>
      )
    })
  }
  const renderTime = () => {
    return _.map(time, ({ value, period }) => {
      return (
        <SwiperSlide className='d-flex align-items-center justify-content-center'>
          <div onClick={() => {setDayPick(value)}} className={` d-flex align-items-center justify-content-center text-uppercase ${styles.swiperContent} ${(value == dayPick ? 'day-pick' : '')}`} >
            <div className='m-0 d-flex align-items-start'>
              <span className={styles.time}>  {value}</span><span className={`pt-1 ${styles.period}`}>{period}</span>
            </div>
            </div>
        </SwiperSlide>
      )
    })
  }

  
  return (
    <div className={` px-3 psychologist-overview ${styles.wrap}`}>
      <div className='d-flex justìy-content-center' >
       <div className='d-flex'> 
        <div style={{ height: '352px'}}>
      <img src={woman1} className='border-radius-12 h-100' />
      </div>
      <div className=' mx-3' style={{ height: '352px'}}>
        <div style={{ height: '15%'}} className='d-flex align-items-center justify-content-center' >
          <div className='d-flex align-items-center justify-content-center py-2 bg-white w-100 ' style={{ borderRadius: '5px'}}><ArrowUpOutlined /></div>
        </div>
        <div style={{ height: '70%'}} className='position-relative'>
        {dayPicked ?   <ArrowLeftOutlined  onClick={() => { setDayPicked(false)}} className={styles.backIcon}/> : null}
      <Swiper 
      direction={'vertical'} pagination={{
        "clickable": true
      }}

      style={{ height: '100%', width: '110px'
    }}
        slidesPerView={4} 
        spaceBetween={2}>
          <div className='my-5'>
      {dayPicked ? renderTime() : renderWeek()}
         </div>
      </Swiper>
      </div>
      <div style={{height: '15%'}} className='d-flex align-items-center justify-content-center' > <div className='d-flex align-items-center justify-content-center py-2 bg-white w-100 ' style={{ borderRadius: '5px'}}><ArrowDownOutlined /></div></div>
      </div>
      </div>
      </div>
      <div className={`${styles.infoWrap} pt-4`}>
        <h3 >Lorem, ipsum dolor.</h3>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae possimus nesciunt. Dolore consequuntur neque hic, aperiam quis corporis quaerat assumenda harum nostrum cum ipsum odit unde rerum sed, sapiente, molestiae ut atque incidunt illo asperiores quo. Rem, culpa reprehenderit?</p>
      </div>
      <div className='d-flex pt-4'>
        <div  className={styles.viewDetailButton}>
          <OutlineButton>View detail</OutlineButton>
        </div>
        <div className={styles.makeAnAppointment}>
          <ButtonComponent>Make an appointment</ButtonComponent>
        </div>
      </div>
    </div>
  );
}

export default PsychologistOverview;