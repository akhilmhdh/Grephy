import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
    }
    renderHeaderLogo(){
        const headerLogo=this.props.auth?(
                <Link to="/channel" className="brand-logo left">G</Link>
        ):(
                <Link to="/" className="brand-logo left">G</Link> 
        );
        return headerLogo;
    }
    renderHeaderButtons(){
        const authButton=this.props.auth?(
            <ul className="right"><li><a href="/auth/logout"><i className="fa fa-sign-out fa-lg"></i></a></li></ul>
        ):(
        <ul className="right">
        <li><a href="/auth/google"><i className="fa fa-google fa-lg"></i></a></li>
        <li><a href="/auth/facebook"><i className="fa fa-facebook fa-lg"></i></a></li>
        <li><a href="/auth/github"><i className="fa fa-github fa-lg"></i></a></li>
        </ul>);
        return authButton;
    }
    render(){
        return(
            <nav>
            <div className="nav-wrapper">
            {this.renderHeaderLogo()}
            {this.renderHeaderButtons()}
            </div>
            </nav>
        )
    }
};

const mapStateToProps=({auth})=>{
    return{auth};
}

export default connect(mapStateToProps)(Header);
