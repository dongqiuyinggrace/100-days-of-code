import React from 'react'
import CalendarBoard from './CalendarBoard'
import CalendarSidebar from './CalendarSidebar'

const Calendar = () => {
    return (
        <div className="calendar">
            <CalendarSidebar />
            <CalendarBoard />
        </div>
    )
}

export default Calendar
