import 'babel-polyfill';
import './server/config/config.js';

import express from "express";
import createStore from './server/utils/createStore';
import { matchRoutes } from 'react-router-config';
import routes from './client/routes';
//token-cookie based authentication
import passport from 'passport';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
//db mongoose configurations
import mongoose from './server/db/mongoose';
import './server/db/models/user';
import './server/db/models/channel';
import './server/db/models/field';
//ssh rendering template and static route
import renderer from "./server/utils/renderer";

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

const app = express();

app.use(cookieSession({
  maxAge: 15 * 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_ENCRYPT_KEY1, process.env.COOKIE_ENCRYPT_KEY2]
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static("public"));
googleAuth(app);
fbAuth(app);
githubAuth(app);
authUtils(app);

apiAuth(app);

app.get("*", (req, res) => {
  const store=createStore()
  const promises=matchRoutes(routes,req.path).map(({route})=>{
    return route.loadData ? route.loadData(store):null;
  })
  Promise.all(promises).then(()=>{
    res.send(renderer(req,store));
  });
});

app.listen(process.env.PORT, () => {
  console.log(`localhost at port:${process.env.PORT}`);
});