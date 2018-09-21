import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchChannelList} from './../actions/fetchChannelList'

class channelSection extends Component{
    componentDidMount(){
        this.props.fetchChannelList()
    }
    renderChannelList(e){
        return (
        <li key={e.name}>
        <div>
            <h1>{e.name}</h1>
            <p>{e.description}</p>
        </div>
        </li>);
    }
    render(){
        if(!this.props.channels){
            return(<div>Loading</div>);
        }
        return(
            <div>
                <h1>channelSection</h1>
                <div>
                <ul>
                {this.props.channels.map((e)=>this.renderChannelList(e))}
                </ul>
                </div>
                <Link to='/channel/new'>Create A Channel</Link>
            </div>
            );
    }
};

const mapStateToProps=({channels})=>{
    return{channels};
};

export default ({
    component:connect(mapStateToProps,{fetchChannelList})(channelSection),
    loadData:({dispatch}) => dispatch(fetchChannelList())
});