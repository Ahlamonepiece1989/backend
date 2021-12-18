const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

require("./db/db");

///////////////////////////////

const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute  = require("./routers/routes/loginRoute")


app.use(signUpRoute);
app.use(loginRoute);



////////////////////

const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port");
});