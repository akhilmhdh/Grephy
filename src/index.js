import 'babel-polyfill';
import './server/config/config.js';

import express from "express";
import mongoose from './server/db/mongoose';
import passport from 'passport';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import './server/db/models/user';
import './server/db/models/channels';
//ssh rendering template and static route
import renderer from "./server/utils/renderer";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

const User = mongoose.model('users');
const Channel = mongoose.model('channels');

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

app.post('/channels/new', async (req, res) => {
  const {
    name,
    dual,
    xAxis,
    yAxis
  } = req.body;
  const existingChannel = await Channel.findOne({
    name
  });
  if (existingChannel) {
    return res.send("Channel already exits").redirect('/');
  }
  const newChannel = await new Channel({
    name,
    _user:"5b9d680719c69817cc328739",
    dual,
    xAxis,
    yAxis,
  });
  newChannel.save().then(() => {
    return newChannel.getChannelToken();
  }).then((token) => {
    res.send(token);
  });
});

app.get('/channels/list',async (req,res)=>{
    const channelList=await Channel.find({_user:'5b9d680719c69817cc328739'});
    const filteredList=channelList.map(({name,xAxis,yAxis,_id})=>{
      return({
        name,
        xAxis,
        yAxis,
        _id
      })
    });
    res.send(filteredList);
});

app.get('/channels/:id',async (req,res)=>{
  const channelList=await Channel.findById(req.params.id);
  res.send(channelList);
});


app.get("*", (req, res) => {
  res.send(renderer());
});

app.listen(process.env.PORT, () => {
  console.log(`localhost at port:${process.env.PORT}`);
});