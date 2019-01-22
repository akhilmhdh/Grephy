import React from 'react';

export default ({input,label,meta: {error,touched}}) =>{
    return(
        <div className="input-field">
            <label>{label}</label>
            <input {...input}></input>
            <div>
            {touched && error}
            </div>
        </div>
    )
};