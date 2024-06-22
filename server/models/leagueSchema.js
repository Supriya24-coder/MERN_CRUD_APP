const mongoose = require("mongoose");

const leagueSchema = mongoose.Schema({

  title:{
    type: String,
    required: true
  },
  desc:{
    type: String,
    required:true
  },
  members:[{
    type: String
  }],
  owner:{
    type: String
  }
});

const addLeague = new mongoose.model("League", leagueSchema);
module.exports = addLeague;

