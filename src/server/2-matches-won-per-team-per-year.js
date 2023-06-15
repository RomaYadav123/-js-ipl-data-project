function matchesWonPerTeamPerYear(matchesData){
  if(!Array.isArray(matchesData)){
    return {};
  }
  const seasonsAllTogether = {};
  matchesData.forEach((obj)=>{
    seasonsAllTogether[obj.season] = null;
  });
//console.log(seasonsAllTogether);
for(let key in seasonsAllTogether){
  const particularSeasonsData = matchesData.filter((obj)=>obj.season === key);
  //console.log(particularSeasonsData);
  const winnerData = {};
  particularSeasonsData.forEach((obj)=>{
    if(winnerData[obj.winner] === undefined){
      winnerData[obj.winner] = 1;
    } else{
      winnerData[obj.winner]++;
    }
  });
  seasonsAllTogether[key] = winnerData;
}
return seasonsAllTogether;
}

module.exports = matchesWonPerTeamPerYear;