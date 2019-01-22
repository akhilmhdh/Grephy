import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { renderRoutes } from 'react-router-config';
import {BrowserRouter}from 'react-router-dom';
import routes from './routes';
import reducers from './reducers';
import axios from 'axios';
import socketMiddleware from './middleware/socketMiddleware';

const axiosInstance=axios.create({
    baseURL:'http://localhost:3000'
});

const preloadedStore=window.INITIAL_STATE;

delete window.INITIAL_STATE;

const store=createStore(reducers,preloadedStore,applyMiddleware(thunk.withExtraArgument(axiosInstance),socketMiddleware()));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(routes)}</div>
        </BrowserRouter>
    </Provider> 
    , document.querySelector('#root'));