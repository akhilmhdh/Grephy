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
        <li>{fieldname}<button className="circle red lighten-1" onClick={()=>{this.props.removeField(token,name,fieldname,()=>{
            this.props.fetchFieldList(token);
        })}}><i className="material-icons">delete</i></button></li>
        );    
}
    render(){
        return (
            <div className="card-content">
                <span className="card-title">{this.props.data.name}</span>
                <ul>
                    <li>Y-Axis: {this.props.data.yAxis}</li>
                    <li>X-Axis: {this.props.data.xAxis}</li>
                    {this.props.data.data.name.map(el=>this.renderDel(this.props.token,this.props.data.name,el))}
                    <li>
                        <form onSubmit={this.props.handleSubmit(value=>{
                            this.props.newDataField(value,this.props.token,this.props.data.name,()=>{this.props.fetchFieldList(this.props.token)})
                        })}>
                        <div className="row">
                        <Field type="text" name="newField" component={formInput}/>
                        <button type="submit" className='btn blue pulse'>Add</button>
                        </div>
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

