import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
    }
    renderHeaderLogo(){
        const headerLogo=this.props.auth?(
            <div>
                <Link to="/channel">Grephy</Link>
            </div>
        ):(
            <div>
                <Link to="/">Grephy</Link> 
            </div>
        );
        return headerLogo;
    }
    renderHeaderButtons(){
        const authButton=this.props.auth?(
            <a href="/auth/logout">logout</a>
        ):(
        <div>
        <a href="/auth/google">loginG</a>
        <a href="/auth/facebook">loginF</a>
        <a href="/auth/github">loginGit</a>
        </div>);
        return authButton;
    }
    render(){
        return(
            <div>
            {this.renderHeaderLogo()}
            {this.renderHeaderButtons()}
            </div>
        )
    }
};

const mapStateToProps=({auth})=>{
    return{auth};
}

export default connect(mapStateToProps)(Header);
