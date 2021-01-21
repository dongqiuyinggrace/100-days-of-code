import React from 'react'

const TextInput = ({type, name, value, placeholder, onChange}) => {
    return (
        <div className="form-group">
            <input type={type} name={name} value={value} className="form-control" placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default TextInput
