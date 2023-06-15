function 
extraRunsConcededPerTeamPerYear(matchesData, deliveriesData) {
  if (!Array.isArray(matchesData) && !Array.isArray(deliveriesData)) {
    return {};
  }
  const concededFinalTeamRuns = {};
  const idsFromMatchesData = [];
  matchesData.forEach((obj) => {
    if (obj.season === "2016") {
      idsFromMatchesData.push(obj.id);
    }
  });
  // console.log(idsFromMatchesData);
  idsFromMatchesData.forEach((id) => {
    const deliveriesMatchIdData = deliveriesData.filter(
      (obj) => obj.match_id === id
    );
    //console.log(deliveriesMatchIdData);
    deliveriesMatchIdData.forEach((obj) => {
      if (concededFinalTeamRuns[obj.bowling_team] === undefined) {
        concededFinalTeamRuns[obj.bowling_team] = Number(obj.extra_runs);
      } else {
        concededFinalTeamRuns[obj.bowling_team] += Number(obj.extra_runs);
      }
    });
  });
  return concededFinalTeamRuns;
}

module.exports = extraRunsConcededPerTeamPerYear;
