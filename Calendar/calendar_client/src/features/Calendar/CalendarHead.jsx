import React from 'react'

const CalendarHead = ({year, month}) => {
    return (
        <div className="calendar_head">
            <button></button>
            <span className="month">{month}</span>
            <span className="year">{year}</span>
        </div>
    )
}

export default CalendarHead
