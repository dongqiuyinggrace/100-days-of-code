import React from 'react'
import EventForm from '../Event/EventForm'

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
            <div className="container">
                <EventForm />
            </div>

        </div>
    )
}

export default CalendarSidebar
