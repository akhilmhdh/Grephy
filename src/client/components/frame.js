import React,{Component } from "react";

class Frame extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card z-depth-3">
            <div className="card-content">
            <span className="card-title">{this.props.data.name}</span>
            <iframe 
            src={`http://localhost:3000/templates/${this.props.id}/${this.props.data.name}`}>
            </iframe>
            </div></div>
        )
    }
}

export default Frame;