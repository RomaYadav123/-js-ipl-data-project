const csv = require("csvtojson");
const matchesPlayedPerYear = require("./src/server/1-matches-per-year");
const matchesWonPerTeamPerYear = require("./src/server/2-matches-won-per-team-per-year");
const extraRunsConcededPerTeamPerYear = require("./src/server/3-extra-runs-conceded-per-team-in-2016");
const top10BowlersWithLeastConcededExtraRuns = require("./src/server/4-top10BowlersWithLeastConcededExtarRuns")
const numberOfTimesEachTeamWonTheTossAndMatch = require("./src/server/5-countOfEachTeamWonTheTossAndMatch")
const countOfPlayerWhoWonHighestTimesPlayerOfTheMatch = require("./src/server/6-playerWhoWonTheHighestTimesPlayerOfTheMatchAward")
const strikeRateOfABatsmanPerSeason = require("./src/server/7-strikeRateOfABatsmanPerSeason")
const dismissedPlayerRecordedAtTheMax = require("./src/server/8-playerGotDismissedForTheMaxTime")
const bowlerWithBestEconomyInSuperOver = require("./src/server/9-bowlerWithBestEconomyInSuperOvers")
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
