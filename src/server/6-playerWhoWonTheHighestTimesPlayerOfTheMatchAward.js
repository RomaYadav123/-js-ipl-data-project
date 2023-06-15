function countOfPlayerWhoWonHighestTimesPlayerOfTheMatch(matchesData) {
  if (!Array.isArray(matchesData)) {
    return {};
  }
  const finalPlayer = {};
  const countOfSeasonAndPlayerOfMatch = {};
  matchesData.forEach((obj) => {
    countOfSeasonAndPlayerOfMatch[obj.season] = obj.player_of_match;
  });
  //console.log(countOfSeasonAndPlayerOfMatch);
  countOfSeasonAndPlayerOfMatch.forEach((obj) => {
    const countOfPlayerOfTheMatch = countOfSeasonAndPlayerOfMatch.filter((data)=> data.player_of_match);
  });
  return countOfPlayerOfTheMatch;
}

module.exports = countOfPlayerWhoWonHighestTimesPlayerOfTheMatch;
