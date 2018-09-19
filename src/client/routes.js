import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import ChannelPage from './pages/ChannelPage';
import FieldPage from './pages/FieldPage';

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
            ...FieldPage,
            path: '/channel/field',
            exact: true
        }
    ]
}];