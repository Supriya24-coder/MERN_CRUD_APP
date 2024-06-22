const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();
require("./DB/connection");
const leagueRoute = require("./routes/leagueRoute");


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

app.use("/",leagueRoute);


app.listen(port, ()=>{
  console.log(`server is running on ${port}`);
});


