function strikeRateOfABatsmanPerSeason(matchesData, deliveriesData) {
  if (!Array.isArray(matchesData) && !Array.isArray(deliveriesData)) {
    return {};
  }
  const takingMatchSeason = {};
  matchesData.forEach((obj) => {
    if (takingMatchSeason[obj.season] === undefined) {
      takingMatchSeason[obj.season] = [obj.id];
    } else {
      takingMatchSeason[obj.season].push(obj.id);
    }
  });
  //   console.log(takingMatchSeason);
  for (let key in takingMatchSeason) {
    let completeMatchData = [];
    takingMatchSeason[key].forEach((id) => {
      completeMatchData = deliveriesData.filter((data) => data.match_id === id);
      completeMatchData.forEach((data)=>{
const filteringBatsman = completeMatchData.filter((num)=> num.batsman);
console.log(filteringBatsman);
    });
    });
   
  }
}

module.exports = strikeRateOfABatsmanPerSeason;
