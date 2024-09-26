// INDEX.JS
// Declare port and mongouri
// app = express, use bodyParser
// mongoose.connect.then.catch
// app.use("/api", route)

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import route from "./routes/movieRoute.js";

const PORT = process.env.PORT || 3001;
const MONGOURL = process.env.MONGOURL || "mongodb://localhost:27017/crudMovies";

// app is express and use bodyParser.json
const app = express();
app.use(bodyParser.json());

mongoose
  .connect(MONGOURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listetning on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api", route);
