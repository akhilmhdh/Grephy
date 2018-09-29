import React,{Component} from 'react';

const Limit=(props)=>{
    return(<div>
        Upper Limit:{props.upper}
        Lower Limit:{props.lower}
    </div>)
}

class EmailService extends Component{
    constructor(props){
        super(props);
        this.state={setting:true}
    }
    render(){
        return(
            <div>
                {this.state.setting?<Limit upper={this.props.upper} lower={this.props.lower}/>:null}
            <button onClick={()=>{this.setState({setting:!this.state.setting})}}>(*)</button>
            </div>
        )
    }
};

export default EmailService;
