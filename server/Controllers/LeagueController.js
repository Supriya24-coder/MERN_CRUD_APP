const addLeague = require("../models/leagueSchema");

class LeagueController {
  static createLeague = async(req,res)=>{
    try {
      const {title, desc} = req.body;
      if(!title||!desc){
        res.status(500).json({message:"invalid input"});
      }

      let league = new addLeague({title, desc});
      league = await league.save();
      res.status(200).json({success:true, league});
      
    } catch (error) {
      console.log(error);
    }
  }

  static readAllLeague = async(req,res)=>{
    try {
      const getLeagues = await addLeague.find();
      res.status(200).json({Response:true, getLeagues});
    } catch (error) {
      console.log(error);
    }
  }

  static updateLeague = async(req,res)=>{
    try {
      const id = req.params.id;
      const {title, desc} = req.body;

      const league = await addLeague.findByIdAndUpdate(id, {title, desc});
      
      if(!league){
        return res.status(500).json({message:"something went wrong!"})
       }
       res.status(200).json({message:"Data updated succesfully"});

    } catch (error) {
      console.log(error);
    }
  }

  static deleteLeague = async(req,res)=>{
    try {
      const id = req.params.id;
      const removeLeague = await addLeague.findByIdAndDelete(id);
      res.status(200).json({message:"League has been deleted", removeLeague});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LeagueController;