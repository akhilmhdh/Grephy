import React,{Component} from 'react';
import { reduxForm,Field } from 'redux-form';
import formInput from './../components/formInput';
import {connect} from 'react-redux';
import { newGraph} from './../actions/addGraph';

class NewGraph extends Component{
    constructor(props){
        super(props);
        this.state={
            checked:false
        }
    }
    renderFields(){
        return(
            <div>
                 <Field label="Channel Name" type="text" name="name" component={formInput}/>
                 <Field label="Y-Axis" type="text" name="yAxis" component={formInput}/>
            </div>
        );
    };
    handleChange(){
        this.setState({checked:!this.state.checked});
    }
    render(){
        return(
        <div>
            <form onSubmit={this.props.handleSubmit(values => {
                this.props.newChannel(values,()=>{
                    this.props.history.push('/channel')})
                })}>
           {this.renderFields()}
           <label>
           <input type="checkbox" onChange={this.handleChange} defaultChecked={this.state.checked} className='browser-default'></input>
           <span>X-Axis</span>
           </label>
           {this.state.checked?<Field label="X-Axis" type="text" name="xAxis" component={formInput}/>:null}
            <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
}
const validate=(values)=>{
const errors={};
if(!values.name){
    errors.name="Provide a name for the field";
}
if(!values.yAxis){
    errors.yAxis="Provide a yAxis"
}
return errors;
}

export default reduxForm({
        validate,
        form:'graphForm'
    })(connect(null,{newGraph})(NewGraph))