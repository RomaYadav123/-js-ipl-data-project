const csv = require("csvtojson");
const matchesPlayedPerYear = require("./1-matches-per-year");
const matchesWonPerTeamPerYear = require("./2-matches-won-per-team-per-year");
const extraRunsConcededPerTeamPerYear = require("./3-extra-runs-conceded-per-team-in-2016");
const top10BowlersWithLeastConcededExtraRuns = require("./4-top10BowlersWithLeastConcededExtarRuns")
const numberOfTimesEachTeamWonTheTossAndMatch = require("./5-countOfEachTeamWonTheTossAndMatch")
const countOfPlayerWhoWonHighestTimesPlayerOfTheMatch = require("./6-playerWhoWonTheHighestTimesPlayerOfTheMatchAward")
const strikeRateOfABatsmanPerSeason = require("./7-strikeRateOfABatsmanPerSeason")
const dismissedPlayerRecordedAtTheMax = require("./8-playerGotDismissedForTheMaxTime")
const bowlerWithBestEconomyInSuperOver = require("./9-bowlerWithBestEconomyInSuperOvers")
// opening reuqired csv files
const matchesPromise = csv().fromFile("./src/data/matches.csv");
const deliveriesPromise = csv().fromFile("./src/data/deliveries.csv");

Promise.all([matchesPromise, deliveriesPromise]).then(
  ([matchesData, deliveriesData]) => {
    console.log({
      file9: bowlerWithBestEconomyInSuperOver(deliveriesData),
    });
  }
);
