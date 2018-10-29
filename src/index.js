import 'babel-polyfill';
import './server/config/config.js';

//server configurations
import express from "express";
import socketIO from 'socket.io';
import http from 'http';

//react-SSH configuration
import createStore from './server/utils/createStore';
import { matchRoutes } from 'react-router-config';
import routes from './client/routes';
//token-cookie based authentication
import passport from 'passport';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
//custom middleware for private routes
import {authentication} from './server/middleware/auth';
//db mongoose configurations
import mongoose from './server/db/mongoose';
import './server/db/models/user';
import './server/db/models/channel';
import './server/db/models/field';
import './server/db/models/maps';
//ssh rendering template and static route
import renderer from "./server/utils/renderer";
import socketConfig from './server/utils/socketConfig'

const app = express();
const server=http.createServer(app);
const io=socketIO(server);

socketConfig(io)

app.use(cookieSession({
  maxAge: 15 * 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_ENCRYPT_KEY1, process.env.COOKIE_ENCRYPT_KEY2]
}));

app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { useNewUrlParser: true }));

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

//google,fb,github authentication system
import './server/services/passport_google';
import './server/services/passport_facebook';
import './server/services/passport_github';

//authentication routes for various oauth
import googleAuth from './server/utils/authRoutes/google';
import fbAuth from './server/utils/authRoutes/fb';
import githubAuth from './server/utils/authRoutes/github';
import authUtils from './server/utils/authRoutes/utils';

//api routes
import apiAuth from './server/api/index';

googleAuth(app);
fbAuth(app);
githubAuth(app);
authUtils(app);

apiAuth(app);

app.get("*",authentication,(req, res) => {
  const store=createStore(req);
  const promises=matchRoutes(routes,req.path).map(({route})=>{
    return route.loadData ? route.loadData(store):null;
  })
  Promise.all(promises).then(()=>{
    res.send(renderer(req,store));
  });
});

server.listen(process.env.PORT, () => {
  console.log(`localhost at port:${process.env.PORT}`);
});