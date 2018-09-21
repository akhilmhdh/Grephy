import React,{Component} from 'react';
import { reduxForm,Field } from 'redux-form';
import formInput from './../components/formInput';
import formText from './../components/formText';
import {newChannel} from './../actions/newChannel'
import {connect} from 'react-redux';

class NewChannelPage extends Component{
    renderFields(){
        return(
            <div>
                 <Field label="Channel Name" type="text" name="name" component={formInput}/>
                 <Field label="Description" type="text" name="description" component={formText}/>
            </div>
        );
    };
    render(){
        return(
        <div>
            NewChannelPage
            <form onSubmit={this.props.handleSubmit(values => {
                this.props.newChannel(values,()=>{
                    this.props.history.push('/channel')})
                })}>
           {this.renderFields()}
            <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
}
const validate=(values)=>{
const errors={};
if(!values.name){
    errors.name="Provide a name for the channel";
}
if(!values.description){
    errors.description="Provide a description for the channel"
}
return errors;
}

export default ({
    component:reduxForm({
        validate,
        form:'newChannelForm'
    })(connect(null,{newChannel})(NewChannelPage))
});