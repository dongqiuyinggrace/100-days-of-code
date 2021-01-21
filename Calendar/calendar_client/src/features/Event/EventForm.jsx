import React from 'react'
import TextInput from './../../app/common/form/TextInput';
import {Formik} from 'formik';

const EventForm = () => {
    const initialValues = {
        eventName: "",
        venue: "",
        start: "",
        end: "",
        description: ""
    }

    const handleSubmit= (e, values) => {
        console.log(values);
    }

    return (
        <Formik 
            initialValues={initialValues}
            onsubmit={handleSubmit}
        >
        {({values, handleSubmit, handleChange, isSubmitting}) => (
            <form onsubmit={handleSubmit}>
                <h3>Detailed Information</h3>
                <TextInput type="text" name="eventName" value={values.eventName} placeholder="Event Name" onChange={handleChange} />
                <TextInput type="text" name="venue" value={values.venue} placeholder="Venue" onChange={handleChange} />
                <TextInput type="text" name="start" value={values.start} placeholder="Start Time" onChange={handleChange}/>
                <TextInput type="text" name="end" value={values.end} placeholder="End Time" onChange={handleChange}/>
                <TextInput type="text" name="description" value={values.description} placeholder="Description" onChange={handleChange}/>
                <div className="form-group">
                    <input type="submit" disabled={isSubmitting} className="form-control" value="Save"/>
                </div>
            </form>
        )}
        </Formik>
        
    )
}

export default EventForm
