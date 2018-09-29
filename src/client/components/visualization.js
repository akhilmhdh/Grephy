import React,{Component} from 'react';
import {LineGraph,AreaGraph,BarGraph} from './../components/graph';
import FieldDetails from './../components/fieldDetails';
import EmailService from './../components/limits';

class Graph extends Component{
    constructor(props){
        super(props);
        this.state={
        showing:true,
        element:"line",
        option:false}
        this.handleChange=this.handleChange.bind(this);
    }
    renderGraph(){
        switch (this.state.element) {
            case "line":
            return <LineGraph data={this.props.plot} fields={this.props.fields}/>;
            case "bar":
            return <BarGraph data={this.props.plot} fields={this.props.fields}/>;
            case "area":
            return <AreaGraph data={this.props.plot} fields={this.props.fields}/>
        }
    }
    handleChange(event){
        this.setState({element:event.target.value});
    }
    render(){
        return(
            <li>
            <button onClick={()=>{this.setState({showing:!this.state.showing})}}>///</button>
            <button onClick={()=>{this.setState({option:!this.state.option})}}>(*)</button>
            <select value={this.state.element} onChange={this.handleChange}>
                <option value="line">LineChart</option>
                <option value="bar">BarChart</option>
                <option value="area">AreaChart</option>
            </select>
            {this.state.showing?this.renderGraph():<FieldDetails data={this.props.data} token={this.props.token}/>}
            {this.state.option?<EmailService upper={this.props.data.upperLimit} lower={this.props.data.lowerLimit}/>:null}
        </li>
        );
    }
}

export default Graph;