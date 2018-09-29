import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchFieldList } from './../actions/fetchFieldList';
import Graph from './../components/visualization'

class fieldSection extends Component{
    componentDidMount(){
        this.props.fetchFieldList(this.props.match.params.id);
    }

    renderFields(el){
        const arr=new Array();
        for(let i=0;i<el.count;i++){
            const temp={name:el.xAxis.value[i]};
            el.dataFields.forEach(element => {
            temp[element.name]=element.value[i];
        });
            arr.push(temp);
        };
        console.log(arr);
        return(
            <Graph plot={arr} fields={el.dataFields} 
            token={this.props.match.params.id} data={el}/>
        )
    }
    
    render(){
        if(!this.props.fields){
            return(<div>Loading...</div>)
        }
        return(
            <div>
                <h1>fieldSection</h1>
                <ul>
                {this.props.fields.map((el)=>this.renderFields(el))}
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