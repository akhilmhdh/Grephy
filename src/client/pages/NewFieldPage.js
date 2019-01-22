import React,{Component} from 'react';
import NewGraph from './../components/newGraph';

class NewFieldPage extends Component{
    constructor(props){
        super(props);
        this.state={element:"graph"};
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({element:event.target.value});
    }
    renderOptions(){
        switch(this.state.element){
            case "graph":
                return <NewGraph id={this.props.match.params.id}/>;
        }
    }
    render(){
        return(
        <div className='container'>
            <select value={this.state.element} onChange={this.handleChange} ref={this.myRef} className='browser-default'>
                <option value="graph">Add graph</option>
                <option value="map">Add Map</option>
                <option value="template">Add Template</option>
                <option value="template">Add VideoStream</option>
            </select>
            {this.renderOptions()}
        </div>
        );
    }
};

export default ({
    component:NewFieldPage
});