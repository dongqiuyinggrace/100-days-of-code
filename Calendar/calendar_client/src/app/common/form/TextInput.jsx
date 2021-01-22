import { useField } from 'formik'
import React from 'react'

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label>{label}</label>
            <input className="form-control" {...field} {...props} />
            {meta.touched && meta.error && (
                   <div className="error">{meta.error}</div>
            )}
        </div>
    )
}

export default TextInput
