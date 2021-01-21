import React from 'react'

const EventForm = () => {
    return (
        <form>
            <h1>Detialed Information</h1>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Event Name"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Venue"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Start Time"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="End Time"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Description"/>
            </div>
            <div className="form-group">
                <input type="submit" className="form-control" value="Save"/>
            </div>
        </form>
    )
}

export default EventForm
