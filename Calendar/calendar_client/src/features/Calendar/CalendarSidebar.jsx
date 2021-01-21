import React, { useState } from 'react'
import EventForm from '../Event/EventForm'

const CalendarSidebar = () => {
    const [showEventForm, setShowEventForm] = useState(false);

    return (
        <div className="calendar-sidebar">
            <ul>
                <li className="brand">Calendar</li>
                <li><button className="toggle"><i className="fas fa-bars"></i></button></li>
                <li>
                    <button className="add-event" onClick={() => setShowEventForm(true)}>
                        <i className="fas fa-plus"></i>
                        <span>New Event</span>
                    </button>
                </li>
            </ul>
            {showEventForm &&
                <div className="container">
                    <EventForm />
                </div>
            }
        </div>
    )
}

export default CalendarSidebar
