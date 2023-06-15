function top10BowlersWithLeastConcededExtraRuns(matchesData, deliveriesData) {
  if (!Array.isArray(matchesData) && !Array.isArray(deliveriesData)) {
    return {};
  }
  const finalEconomicalBowlers = {};
  const idsFromMatchesData = [];
  matchesData.forEach((obj) => {
    if (obj.season === "2015") {
      idsFromMatchesData.push(obj.id);
    }
  });
  //console.log(idsFromMatchesData);
  idsFromMatchesData.forEach((id) => {
    const deliveriesMatchIdData = deliveriesData.filter((obj) => obj.match_id === id);
    //console.log(deliveriesMatchIdData);
    deliveriesMatchIdData.forEach((obj) => {
      if (finalEconomicalBowlers[obj.bowler] === undefined) {
        finalEconomicalBowlers[obj.bowler] = Number(obj.extra_runs);
      } else {
        finalEconomicalBowlers[obj.bowler] += Number(obj.extra_runs);
      }
    });
  });
  

  const sortable = Object.entries(finalEconomicalBowlers)
    .sort(([,a],[,b]) => a-b)
    .slice(0, 10)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  //console.log(sortable);
  
  
  return finalEconomicalBowlers;
}

module.exports = top10BowlersWithLeastConcededExtraRuns;
