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
        option:false};
        this.myRef=React.createRef();
        this.handleChange=this.handleChange.bind(this);
    }
    renderGraph(){
        switch (this.state.element) {
            case "line":
            return <LineGraph data={this.props.plot} fields={this.props.fields} 
            upper={this.props.data.upperLimit} lower={this.props.data.lowerLimit} temp={this.props.data.xAxis} yAxis={this.props.yAxis}/>;
            case "bar":
            return <BarGraph data={this.props.plot} fields={this.props.fields}
            upper={this.props.data.upperLimit} lower={this.props.data.lowerLimit} 
            yAxis={this.props.yAxis} temp={this.props.data.xAxis}/>;
            case "area":
            return <AreaGraph data={this.props.plot} fields={this.props.fields}
            upper={this.props.data.upperLimit}  yAxis={this.props.yAxis} lower={this.props.data.lowerLimit} temp={this.props.data.xAxis}/>
        }
    }
    handleChange(event){
        this.setState({element:event.target.value});
    }
    render(){
        return(
            <div className="card z-depth-3">
            <select value={this.state.element} onChange={this.handleChange} ref={this.myRef} className='browser-default'>
                <option value="line">LineChart</option>
                <option value="bar">BarChart</option>
                <option value="area">AreaChart</option>
            </select>
            <div className='card-title'>{this.props.data.name}</div>
            {this.state.showing?this.renderGraph():<FieldDetails data={this.props.data} token={this.props.token}/>}
            {this.state.option?<EmailService upper={this.props.data.upperLimit} lower={this.props.data.lowerLimit}
            fieldName={this.props.data.name} token={this.props.token}/>:null}
            <button onClick={()=>{this.setState({showing:!this.state.showing})}} 
            className="btn-floating waves-effect waves-light red right"><i class="material-icons">info</i></button>
            <button onClick={()=>{this.setState({option:!this.state.option})}}
            className="btn-floating waves-effect waves-light blue right"><i class="material-icons">label_outline</i></button>
            </div>
        );
    }
}

export default Graph;