const express = require("express");
const leagueRoute = express.Router();
const LeagueController = require("../Controllers/LeagueController");

leagueRoute.post("/add", LeagueController.createLeague);
leagueRoute.get("/", LeagueController.readAllLeague);
leagueRoute.put("/:id", LeagueController.updateLeague);
leagueRoute.delete("/:id", LeagueController.deleteLeague);

module.exports = leagueRoute;