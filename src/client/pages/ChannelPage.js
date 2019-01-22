import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchChannelList} from './../actions/fetchChannelList'

class channelSection extends Component{
    constructor(props){
        super(props);
        this.myRef=React.createRef();
    }
    componentDidMount(){
        this.props.fetchChannelList();
        var options={};
        var instances = M.FloatingActionButton.init(this.myRef.current,options);
    }
    renderChannelList({name,description,token}){
        return (
        <li key={name} className="z-depth-2">
        <Link to={`/channel/${token}/fields`}>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{name}</span>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
        </li>);
    }
    render(){
        if(!this.props.channels){
            return(<div>Loading</div>);
        }
        return(
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">CHANNELS</span>
                    </div>
                </div>
                <div>
                    <ul>
                    {this.props.channels.map((e)=>this.renderChannelList(e))}
                    </ul>
                </div>
               
<div className="fixed-action-btn" ref={this.myRef}>
  <a className="btn-floating btn-large red">
    <i className="large material-icons">mode_edit</i>
  </a>
  <ul>
     <li><a className="btn-floating red">
     <Link to={`/channel/new`}><i className="material-icons">insert_chart</i></Link></a></li> */}
  </ul>
</div>
      
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