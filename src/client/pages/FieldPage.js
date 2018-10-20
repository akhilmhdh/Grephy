import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchFieldList } from './../actions/fetchFieldList'; 
import Graph from './../components/visualization';            
import GIS from './../components/leaflet';

class fieldSection extends Component{
    componentDidMount(){
        this.props.fetchFieldList(this.props.match.params.id);
    }
    //function to create reChart data array objects
    renderFields(el){
        return(<Graph plot={el.data.values} fields={el.data.name} token={this.props.match.params.id} data={el} />)
        }
    renderMaps(el){
        return(<GIS data={el}/>)
    }
    
    render(){
        if(!this.props.fields){
            return(<div>Loading...</div>)
        }
        return(
            <div>
                <h1>fieldSection</h1>
                <ul>
                    <li>{this.props.fields["graphs"].map(el=>this.renderFields(el))}</li>
                    <li>{this.props.fields["maps"].map(el=>this.renderMaps(el))}</li>
                </ul>
            </div>
            );
    }
};
const mapStateToProps=({fields})=>{
    return{fields};
};

export default {
    component:connect(mapStateToProps,{fetchFieldList})(fieldSection),
};