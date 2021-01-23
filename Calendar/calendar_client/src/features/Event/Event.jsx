import React from 'react'
import EventForm from './EventForm'
import EventSidebar from './EventSidebar'

const Event = () => {
    return (
        <div className="event">
            <EventSidebar />
            <EventForm />
        </div>
    )
}

export default Event;
