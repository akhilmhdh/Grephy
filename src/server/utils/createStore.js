import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../../client/reducers';
import axios from 'axios';

export default (req)=>{
    const axiosInstance=axios.create({
        baseURL:'http://localhost:3000',
        headers:{cookie:req.get('cookie') || ''}
    });
    const store=createStore(reducers,{},applyMiddleware(thunk.withExtraArgument(axiosInstance)));
    return store;
};