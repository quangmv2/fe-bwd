import React, { useState, memo } from 'react'
import { Layout } from 'antd'
import './styles.scss'
import styles from './styles.module.scss'
import { useParams } from "react-router-dom";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment, { months } from 'moment';
import { ShowMore } from '@components'
import eventss from './demoEvents'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

interface ScheduleProps {

}

const Schedule: React.FC<ScheduleProps> = memo(() => {
    const CalendarToolbar = ({ onView, label, views, date, onNavigate }) => {
        const goToBack = () => {
            let mDate = date;
            let newDate = new Date(
              mDate.getFullYear(),
              mDate.getMonth() - 1,
              1);
            onNavigate('prev', newDate);
            // this.getCalendarEvents(newDate);
          
          }
          const today = () => {
            onNavigate('today', new Date());
          }
          const goToNext = () => {
            let mDate = date;
            let newDate = new Date(
              mDate.getFullYear(),
              mDate.getMonth() + 1,
              1);
            onNavigate('next', newDate);
            // this.getCalendarEvents(newDate);
          
          }
        const [viewName, setViewName] = useState('week');
        const setView = (view: string, onView: any) => {
            setViewName(view);
            onView(view);
            console.log('h', viewName)
        }
        return (
            <div className={`${styles.toolbarWrap} d-lg-flex align-items-center justify-content-between`}>
                <div>
                    <p className={`${styles.label} m-0`}>
                        {label}
                    </p>
                    <div className={`${styles.calendar} d-flex align-items-center`}>
                        <h3>8 patients today</h3>
                        
                    </div>
                </div>
                <div className={`d-flex align-items-center ${styles.viewWrap} bg-white shadow-css px-1 py-1 hover-pointer`}>
                    {
                        views.map(view => {
                            return (
                                <div
                                    onClick={() => setView(view, onView)}
                                    className={`${viewName == view ? styles.onView : ''} h-100 d-flex justify-content-center align-items-center text-capitalize ${styles.test}`} >
                                    <p className={`${styles.viewText} m-0 text-center`}>{view}</p></div>
                            )
                        })
                    }
                </div>
                <div className={`d-flex align-items-center ${styles.navigationWrap}`}>
                   <div className={`bg-white ${styles.iconWrap} hover-pointer p-1 d-flex align-items-center justify-content-center shadow-css`}>
                    <div className='h-100' onClick={goToBack}>
                    <LeftOutlined className={` px-2  ${styles.icon}`}/>
                    </div>
                   </div>
                   <div className={`${styles.todayWrap} hover-pointer bg-white p-1 shadow-css`}>
                    <div 
                    onClick={today}
                        className={` h-100 d-flex justify-content-center align-items-center text-capitalize ${styles.test}`} >
                        <p className={`${styles.viewText} m-0 text-center`}>Today</p></div>
</div>
                    <div className={`bg-white hover-pointer shadow-css ${styles.iconWrap} p-1 d-flex align-items-center justify-content-center shadow-css`}>
                    <div className='h-100' onClick={goToNext}>
                    <RightOutlined className={` px-2  ${styles.icon}`}/>
                    </div>
                   </div>
                   
                </div>
            </div>

        )
    }
    const renderWeekHeader = ({ date, localizer }) => {
        return (
            <div className={`${styles.weekHeader}`}>
                <p className='m-0'>{localizer.format(date, 'DD')}</p>
                <span className='m-0 text-uppercase'>{localizer.format(date, 'dddd')}</span>
            </div>

            //   <p className={`m-0 py-2 ${styles.weekHeader}`}>{localizer.format(date, 'DD')}<span> {localizer.format(date, 'dddd')}</span></p>
        )
    }
    const renderEvent = (event) => {
        console.log(event.event.type)
    const setBGColor = (type) => {
        switch(type) {
            case 'video call':
                return styles.eventVideoCall;
            case 'chat':
                return styles.eventChat;
            default:
                return styles.eventInperson
        }
    }
        return (
            <div className={`p-2 py-3 ${styles.eventWrap} ${setBGColor(event.event.type)} d-flex justify-content-between flex-column h-100`}  >
                <p className={styles.title}>
{event.title}
                </p>
                <p className={styles.time}>
                    {
                        Localizer.format(event.start, 'hh:mm')
                    } -  {
                        Localizer.format(event.end, 'hh:mm')
                    }
                </p>
            </div>
        )
    }
    const renderMonthHeader =  ({ date, localizer }) => {
        return (
            <span className={`m-0 text-uppercase ${styles.monthHeader}`}>{localizer.format(date, 'dddd')}</span>
        )
    }
    const CustomAgenda = () => {
        return (
            <p>ssss</p>
        )
    }
    return (
        <div className={`p-3 ${styles.wrap}`}>
            <DnDCalendar
            format={"DD-MM-YYYY HH:mm"}
                step={60}
                timeslots={1}
                // views={['day', 'week']}
                //  slotPropGetter={(time) => {
                //   return {
                //     className: 'bg-danger m-1'
                //   }

                //  }}
                components={{
                    agenda: CustomAgenda,
                    week: {
                        header: renderWeekHeader

                    },
                    month: {
                        header: renderMonthHeader
                    },
                    event: renderEvent,
                    toolbar: CalendarToolbar,
                }}

                localizer={Localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={eventss}
            />
        </div>

    )
}
)

export { Schedule }

