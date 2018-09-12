require('./server/config/config.js');

import express from "express";
import renderer from "./server/utils/renderer";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(renderer());
});

app.listen(process.env.PORT, () => {
  console.log(`localhost at port:${process.env.PORT}`);
});