const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/leagueApp`)
.then(()=>console.log(`Database is connected!`))
.catch((err)=>console.log(err));