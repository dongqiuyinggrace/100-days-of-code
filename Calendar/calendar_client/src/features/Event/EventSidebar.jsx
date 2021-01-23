import React from 'react'
import { Link } from 'react-router-dom'

const EventSidebar = () => {
    return (
        <div className="event-sidebar">
            <Link to="/calendar" className="btn"><i className="fas fa-arrow-left"></i></Link>
        </div>
    )
}

export default EventSidebar
