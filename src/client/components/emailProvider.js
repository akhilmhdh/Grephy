import React,{Component} from 'react'
import formInput from './formInput';
import { Field,reduxForm } from 'redux-form';
import { limitUpdate } from './../actions/limitUpdate';
import {connect} from 'react-redux';
import { fetchFieldList } from './../actions/fetchFieldList';

class EmailSettings extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <form onSubmit={this.props.handleSubmit((value)=>this.props.limitUpdate(value,this.props.token,this.props.name,()=>{
                this.props.update()}))}>
            <Field label="upperLimit" type="text" name="upper" component={formInput}/>
            <Field label="lowerLimit" type="text" name="lower" component={formInput}/>
            <Field label="Email Acc" type="text" name="email" component={formInput}/>
            <button>Set</button>
            </form>
            </div>
        );
    }
}

export default reduxForm({
    form:'updateEmail'
})(connect(null,{limitUpdate,fetchFieldList})(EmailSettings));