import React,{Component} from 'react';
import EmailSettings from './emailProvider';

const Limit=(props)=>{
    return(
    <div className="card">
        <div className="card-content">
            <span className='card-title'>Upper Limit</span>
            <p>{props.upper}</p>
            <span className='card-title'>Lower Limit</span>
            <p>{props.lower}</p>
        </div>
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
                {this.state.setting?<Limit upper={this.props.upper} lower={this.props.lower}/>:
                <EmailSettings token={this.props.token} name={this.props.fieldName}
                update={()=>{this.setState({setting:true})}}/>}
            <button className="btn green right" onClick={()=>{this.setState({setting:!this.state.setting})}}><i className="material-icons">dehaze</i></button>
            </div>
        )
    }
};

export default EmailService;
