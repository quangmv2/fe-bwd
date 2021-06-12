import React, { useState } from 'react'
import { Layout } from 'antd'
import './styles.scss'
import styles from './styles.module.scss'
import { useParams } from "react-router-dom";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { ShowMore, CalendarSider, Schedule, ContactSidebar } from "@components";

const { Header, Content, Footer, Sider } = Layout;
interface ScheduleProps {

}

const SchedulePage: React.FC<ScheduleProps> = () => {
  const CalendarToolbar = ({ onView, label, views }) => {
    const [viewName, setViewName] = useState('week');
    const setView = (view: string, onView:any) => {
      setViewName(view);
      onView(view);
      console.log('h',viewName)
    }
    return (
      <div className={`${styles.toolbarWrap} px-4 d-flex align-items-center justify-content-between`}>
        <div>
          <p className={`${styles.label} m-0`}>
            {label}
          </p>
          <div className={`${styles.calendar} d-flex align-items-center`}>
          <h3>8 patients today</h3>
          <ShowMore menu='' />
          </div>
          </div>
      <div className='d-flex'>
          {
            views.map(view => {
              return (
                <div 
                onClick={() => setView(view, onView )}
                className={`py-2 ${styles.view}   ${view == 'week' ? styles.weekView : styles.dayView} ${viewName == view ? `shadow-css-xl bg-white` : null}  d-flex justify-content-center text-capitalize`} >
                  <p className='m-0'>{view}</p></div>
              )
            })
          }
        </div>
    </div>

    )
}
  const renderWeekHeader = ({ date, localizer }) => {
    return (
      <p className={`m-0 py-2  ${styles.weekHeader}`}>{localizer.format(date, 'DD')}<span> {localizer.format(date, 'dddd')}</span></p>
    )
  }
  const renderEvent = () => {
    return (
      <div className={`w-100 ${styles.eventWrap}`}>
        <div className='mt-3'>
        <p className={`m-0  ${styles.patientName}`}>
          Allie Davidson
        </p>
        <p className={`m-0 ${styles.note}`}>Skin testing</p>
        </div>
      </div>
    )
  }
  return (
  //   <Layout className={styles.wrap}>
  //   <Sider
  //     style={{
  //       overflow: 'auto',
  //       height: '100vh',
  //       position: 'fixed',
  //      top: 0

  //     }}
  //     className='newfeed-sider'
  //      width={385}
  //   >
  //     <div style={{ paddingTop: '80px' }}>
  //       <CalendarSider />
  //     </div>
  //   </Sider>
  //   <Layout style={{ marginLeft: '385px', maxWidth: '100%' }} >
  //     <Content className='px-3 pt-4'>
  //     <Schedule />
  //     </Content>

  //   </Layout>
  // </Layout>
    <Layout className={`${styles.wrap} `}>
      <Layout>
      <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0
      }}
        // className={styles.siderWrap}
        width={385}
      > <div style={{ paddingTop: '80px' }}><CalendarSider /></div></Sider>
      </Layout>
      <Content style={{ marginLeft: '385px'}}>
        <div className='p-3'>
          <Schedule />
   </div>
      </Content>
      
    </Layout>

  )
  }

export default SchedulePage;