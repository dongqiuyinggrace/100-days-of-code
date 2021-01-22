import React from 'react'
import TextInput from './../../app/common/form/TextInput';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';

const EventForm = () => {
    const initialValues = {
        eventName: "",
        venue: "",
        start: "",
        end: "",
        description: ""
    }

    const handleSubmit = (values) => {
        console.log(values);
    }

    const validationSchema = Yup.object().shape({
        eventName: Yup.string()
                .min(2, 'too short!')
                .max(50, 'too long!')
                .required('Required!'),
        venue: Yup.string()
                .min(2, 'too short!')
                .max(50, 'too long!')
                .required('Required!'),
        start: Yup.string()
                .required('Required!'),
        end: Yup.string()
                .required('Required!'),
        description: Yup.string()
    })

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
        {({values, errors, touched, handleSubmit, handleChange, isSubmitting}) => (
            <Form>
                <h4>Detailed Information</h4>
                <TextInput type="text" name="eventName" placeholder="Event Name" />
                <TextInput type="text" name="venue" placeholder="Venue" />
                <TextInput type="text" name="start" placeholder="Start Time" />
                <TextInput type="text" name="end" placeholder="End Time" />
                <TextInput type="text" name="description" placeholder="Description" />
                <div className="form-group">
                    <input type="submit" disabled={isSubmitting} className="form-control" value="Save"/>
                </div>
            </Form>
        )}
        </Formik>
        
    )
}

export default EventForm
