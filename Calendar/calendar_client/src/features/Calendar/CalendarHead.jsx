import React from 'react'

const CalendarHead = ({year, month}) => {
    return (
        <div className="calendar_head">
            <button><i className="fas fa-arrow-up"></i></button>
            <button><i className="fas fa-arrow-down"></i></button>
            <span className="month">{month}</span>
            <span className="year">{year}</span>
        </div>
    )
}

export default CalendarHead
