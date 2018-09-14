import './server/config/config.js';

import express from "express";
//ssh rendering template and static route
import renderer from "./server/utils/renderer";
import googleAuth from './server/utils/authRoutes/google';
import fbAuth from './server/utils/authRoutes/fb';
import githubAuth from './server/utils/authRoutes/github';

//google authentication system
import './server/services/passport_google';
import './server/services/passport_facebook';
import './server/services/githubAuth';
import {auth_url} from './server/services/githubAuth';

const app = express();

app.use(express.static("public"));
googleAuth(app);
fbAuth(app);
githubAuth(app,auth_url);

app.get("*", (req, res) => {
  res.send(renderer());
});

app.listen(process.env.PORT, () => {
  console.log(`localhost at port:${process.env.PORT}`);
});