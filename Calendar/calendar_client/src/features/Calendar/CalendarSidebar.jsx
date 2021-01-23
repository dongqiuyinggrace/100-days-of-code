import React from 'react';
import { Link } from 'react-router-dom';

const CalendarSidebar = () => {
    return (
        <div className="calendar-sidebar">
            <ul>
                <li className="brand">Calendar</li>
                <li><button className="btn toggle"><i className="fas fa-bars"></i></button></li>
                <li>
                    <Link className="btn add-event text-light" to="/event" >
                        <i className="fas fa-plus"></i>
                        <span>New Event</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default CalendarSidebar
