import React,{Component} from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';
import {authVerify} from './actions/authVerify';

class App extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <Header/>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    };
};

export default {
    component:App,
   loadData:({dispatch}) => dispatch(authVerify())
};