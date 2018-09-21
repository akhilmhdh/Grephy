import React from 'react';

export default ({input,label,meta:{touched,error}}) =>{
    return(
        <div>
            <label>{label}</label>
            <textarea rows="5" cols="50" {...input}></textarea>
            {touched && error}
        </div>
        )
};