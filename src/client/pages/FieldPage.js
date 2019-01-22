import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchFieldList } from './../actions/fetchFieldList'; 
import Graph from './../components/visualization';            
import GIS from './../components/leaflet';
import Frame from './../components/frame';
import { subscribeFieldData, updateField, tempCall, updateMaps} from './../actions/socket';

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
        return(<li><Graph plot={el.data.values} fields={el.data.name} token={this.props.match.params.id} data={el} /></li>)
        }
    renderMaps(el){
        return(<li><GIS data={el}/></li>)
    }
    renderTemplates(el){
        return(<li><Frame data={el} id={this.props.match.params.id}/></li>)
    }
    renderScreen(el){
        return(<li>
            <div className="card z-depth-3">
            <div className="card-content">
            <span className="card-title">{el.name}</span>
            <img src={el.image} alt="Not connected" id={el.name}></img>
            </div>
            </div>
            </li>);
    }
    
    render(){
        if(!this.state.fields){
            return(<div>Loading...</div>)
        }
        return(
            <div className='container'>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">FIELDS</span>
                    </div>
                </div>
                <ul>
                    {this.state.fields["graphs"].map(el=>this.renderFields(el))}
                    {this.state.fields["maps"].map(el=>this.renderMaps(el))}
                    {this.state.fields["templates"].map(el=>this.renderTemplates(el))}
                    {this.state.fields["videos"].map(el=>this.renderScreen(el))}
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