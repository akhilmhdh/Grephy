import React from 'react'
import formInput from './formInput';
import { Field,reduxForm } from 'redux-form';

const emailSettings=()=>{
    return(
        <div>
        <form onSubmit={this.props.handleSubmit(value=>this.props.limitUpdate(value))}>
        <Field label="upperLimit" type="text" name="upper" component={formInput}/>
        <Field label="lowerLimit" type="text" name="lower" component={formInput}/>
        <Field label="Email Acc" type="text" name="email" component={formInput}/>
        <button>Set</button>
        </form>
        </div>
    );
}