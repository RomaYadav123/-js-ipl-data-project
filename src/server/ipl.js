const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const matchesPerYearJson = require("./../public/output/1-matchesPerYear.json");
const matchWonPerTeamPerYearJson = require("./../public/output/2-matchWonPerTeamPerYear.json");
const extraRunsConcededPertTeamIn2016Json = require("./../public/output/3-extraRunsConcededPertTeamIn2016.json");
const top10BowlersWithLeastConcededExtarRunsJson = require("./../public/output/4-top10BowlersWithLeastConcededExtarRuns.json");
const countOfEachTeamWonTheTossAndMatchJson = require("./../public/output/5-countOfEachTeamWonTheTossAndMatch.json");
const playerWhoWonTheHighestTimesPlayerOfTheMatchAwardJson = require("./../public/output/6-playerWhoWonTheHighestTimesPlayerOfTheMatchAward.json");
const bowlerWithBestEconomyInSuperOversJson = require("./../public/output/9-bowlerWithBestEconomyInSuperOvers.json");

app.get("/matchesPerYearDataConversionToJson", (req, res) => {
  const JsonData = matchesPerYearJson;
  if (JsonData) {
    res.json(JsonData);
  }
});

app.get("/matchesWonPerTeamPerYearDataConversionToJson", (req, res) => {
  const JsonData = matchWonPerTeamPerYearJson;
  res.json(JsonData);
});

app.get("/extraRunsConcededPertTeamIn2016DataConversionToJson", (req, res) => {
  const JsonData = extraRunsConcededPertTeamIn2016Json;
  res.json(JsonData);
});

app.get(
  "/top10BowlersWithLeastConcededExtarRunsJsonDataConversionToJson",
  (req, res) => {
    const JsonData = top10BowlersWithLeastConcededExtarRunsJson;
    res.json(JsonData);
  }
);

app.get(
  "/countOfEachTeamWonTheTossAndMatchJsonDataConversionToJson",
  (req, res) => {
    const JsonData = countOfEachTeamWonTheTossAndMatchJson;
    res.json(JsonData);
  }
);

app.get(
  "/countOfEachTeamWonTheTossAndMatchJsonDataConversionToJson",
  (req, res) => {
    const JsonData = countOfEachTeamWonTheTossAndMatchJson;
    res.json(JsonData);
  }
);

app.get(
  "/playerWhoWonTheHighestTimesPlayerOfTheMatchAwardJsonDataConversionToJson",
  (req, res) => {
    const JsonData = playerWhoWonTheHighestTimesPlayerOfTheMatchAwardJson;
    res.json(JsonData);
  }
);

app.get(
  "/bowlerWithBestEconomyInSuperOversJsonDataConversionToJson",
  (req, res) => {
    const JsonData = bowlerWithBestEconomyInSuperOversJson;
    res.json(JsonData);
  }
);

app.listen(PORT, () => {
  console.log(`Server has started on http://localhost:${PORT}`);
});
