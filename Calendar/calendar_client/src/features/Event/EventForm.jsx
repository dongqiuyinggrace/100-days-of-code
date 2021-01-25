import React from 'react';
import TextInput from './../../app/common/form/TextInput';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import EventFormHead from './EventFormHead';

const EventForm = () => {
  const initialValues = {
    eventName: '',
    venue: '',
    start: '',
    end: '',
    description: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    eventName: Yup.string()
      .min(2, 'too short!')
      .max(50, 'too long!')
      .required('Required!'),
    venue: Yup.string()
      .min(2, 'too short!')
      .max(50, 'too long!')
      .required('Required!'),
    start: Yup.string().required('Required!'),
    end: Yup.string().required('Required!'),
    description: Yup.string(),
  });

  return (
    <div className='container event-form'>
      <EventFormHead />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form className="form">
            <h4>Detailed Information</h4>
            <TextInput type='text' name='eventName' placeholder='Event Name' />
            <TextInput type='text' name='venue' placeholder='Venue' />
            <TextInput type='text' name='start' placeholder='Start Time' />
            <TextInput type='text' name='end' placeholder='End Time' />
            <TextInput
              type='text'
              name='description'
              placeholder='Description'
            />
            <div className='form-group'>
              <input
                type='submit'
                disabled={!isValid || !dirty || isSubmitting}
                className='form-control btn btn-primary'
                value='Save'
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EventForm;
