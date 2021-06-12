import React, { memo } from 'react'
import { ApproveEvent } from './approve-event'
import { PendingTask } from './pending-task'
import { UpcomingTask } from './upcoming-task'

interface CalendarSiderProps {

}

const CalendarSider: React.FC<CalendarSiderProps> = memo(() => {

    return (
        <div className='p-3' >
            <div>
            <div className='py-3'>
      <ApproveEvent />
      </div>
      <div className='py-3'>
          <PendingTask />
      </div>
      <div className='py-3'>
          <UpcomingTask />
      </div>
      </div>
      </div>

    )
})

export { CalendarSider }