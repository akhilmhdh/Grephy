import React,{Component} from 'react';
import { Field,reduxForm } from 'redux-form';
import { fetchFieldList } from './../actions/fetchFieldList';
import {removeField} from './../actions/deleteField'
import { newDataField } from './../actions/addNewDataField';
import {connect} from 'react-redux'
import formInput from './../components/formInput';
class FieldDetails extends Component{
    renderDel(token,name,fieldname){
        return(
        <li>{fieldname}<button onClick={()=>{this.props.removeField(token,name,fieldname,()=>{
            this.props.fetchFieldList(token);
        })}}>///</button></li>
        );    
}
    render(){
        return (
            <div>
                <h3>{this.props.data.name}</h3>
                <ul>
                    <li>Y-Axis:{this.props.data.yAxis}</li>
                    <li>X-Axis:{this.props.data.xAxis.name}</li>
                    {this.props.data.dataFields.map(({name})=>this.renderDel(this.props.token,this.props.data.name,name))}
                    <li>
                        <form onSubmit={this.props.handleSubmit(value=>{
                            this.props.newDataField(value,this.props.token,this.props.data.name,()=>{this.props.fetchFieldList(this.props.token)})
                        })}>
                        <Field type="text" name="newField" component={formInput}/>
                        <button type="submit">Add</button>
                        </form>
                    </li>
                    </ul>
            </div>)
    }
};

const validate=(values)=>{
    const errors={};
    if(!values.newField){
        errors.newField="Provide a name for the channel";
    }
    return errors;
    }
export default reduxForm({
    validate,
    form:'newChannelForm'
})(connect(null,{removeField,fetchFieldList,newDataField})(FieldDetails))

