import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './../../client/routes';
import {renderRoutes} from 'react-router-config'
import serialize from 'serialize-javascript';

export default(req,store) => {
    const content=renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                {renderRoutes(routes)}    
                </div>
            </StaticRouter>
        </Provider>
        );
    return(
    `<html>
    <head>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css"/>
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/codemirror.min.css"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="/css/materialize.css"/>
    <style>
    .leaflet-container {
      height: 400px;
      width: 80%;
      margin: 0 auto;
    }
  </style>
    </head>
    <body>
        <div id='root'>${content}</div>
        <script>
        window.INITIAL_STATE=${serialize(store.getState())};
        </script>
        <script type='text/javascript' src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
        <script src="/js/materialize.min.js" type="text/javascript"></script>
        <script src="/bundle.js"></script>
    </body>
    </html>`
    );
};