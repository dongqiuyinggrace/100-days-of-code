import React from 'react'

const CalendarSidebar = () => {
    return (
        <div className="calendar-sidebar">
            <ul>
                <li className="brand">Calendar</li>
                <li><button className="toggle"><i className="fas fa-bars"></i></button></li>
                <li>
                    <button className="add-event">
                        <i className="fas fa-plus"></i>
                        <span>New Event</span>
                    </button>
                    
                </li>
            </ul>
        </div>
    )
}

export default CalendarSidebar
