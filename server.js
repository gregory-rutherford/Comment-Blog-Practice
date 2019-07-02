const express = require("express");
const routes = require("./API/api");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models");
const cors = require("cors");


// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/api", routes); 

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
