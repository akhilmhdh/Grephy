import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import ChannelPage from './pages/ChannelPage';
import FieldPage from './pages/FieldPage';
import NewChannelPage from './pages/newChannelPage';
import TemplatePage from './pages/TemplatePage';
import newFieldPage from './pages/NewFieldPage';

export default [{
    ...App,
    routes: [{
            ...HomePage,
            path: '/',
            exact: true
        },
        {
            ...ChannelPage,
            path: '/channel',
            exact: true
        },
        {
            ...NewChannelPage,
            path: '/channel/new',
            exact: true
        },
        {
            ...FieldPage,
            path: '/channel/:id/fields',
            exact: true
        }, 
        {
            ...TemplatePage,
            path:'/channel/:id/template/:name',
            exact: true
        },
        {
            ...newFieldPage,
            path:'/channel/:id/field/new',
            exact:true
        }
    ]
}];