import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchFieldList } from './../actions/fetchFieldList'; 
import Graph from './../components/visualization';            
import GIS from './../components/leaflet';
import { subscribeFieldData,updateField,tempCall,updateMaps} from './../actions/socket';

class fieldSection extends Component{
    constructor(props){
        super(props);
        this.state={
            fields:this.props.fields
        };
    }
    componentDidMount(){
        const temp=this.props.match.params.id;
        this.props.fetchFieldList(temp);
        this.props.subscribeFieldData(temp,(err)=>{console.log(err)});
        this.props.updateField();
        this.props.updateMaps();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.fields!==this.props.fields){
            this.setState({fields:nextProps.fields});
        }
    }
    //function to create reChart data array objects
    renderFields(el){
        return(<Graph plot={el.data.values} fields={el.data.name} token={this.props.match.params.id} data={el} />)
        }
    renderMaps(el){
        return(<GIS data={el}/>)
    }
    
    render(){
        if(!this.state.fields){
            return(<div>Loading...</div>)
        }
        return(
            <div>
                <h1>fieldSection</h1>
                <ul>
                    <li>{this.state.fields["graphs"].map(el=>this.renderFields(el))}</li>
                    <li>{this.state.fields["maps"].map(el=>this.renderMaps(el))}</li>
                </ul>
            </div>
            );
    }
};
const mapStateToProps=({fields})=>{
    return{fields};
};

export default {
    component:connect(mapStateToProps,{fetchFieldList,subscribeFieldData,updateField,tempCall,updateMaps})(fieldSection),
};