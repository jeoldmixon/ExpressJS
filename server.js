// express js
const express = require("express");
// create server
const app = express();
//UUID  for id of array  // npm
const { v4: uuidv4 } = require("uuid");
// api routes
const apiRoutes = require("./routes/apiRoute/noteTakerRoute");
// html routes
const htmlRoutes = require("./routes/htmlRoute/htmlRoute");
// ports
const PORT = process.env.PORT || 3001;
//Public static folder
app.use(express.static("public"));
//parse incoming JSON
app.use(express.json());
//parse incoming string-array
app.use(express.urlencoded({ extended: true }));
//server to api
app.use("/api", apiRoutes);
//server to html >> from Thursday lesson
app.use("/", htmlRoutes);
// server to allow use of files in public without explicit routes like zookeeper
app.use(express.static("public"));
//local or Heroku port
app.listen(PORT, () => {
    console.log(
        `Server is now listening to port ${PORT}.  Unlike teenagers who listen to nothing.`
    );
});