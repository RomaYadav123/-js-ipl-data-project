function numberOfTimesEachTeamWonTheTossAndMatch(matchesData){
    if(!Array.isArray(matchesData)){
        return {};
    }
    const countOfEachTeam = {};
    const ComparingEachTeamWinningTheMatchAndToss = matchesData.filter((obj)=> obj.toss_winner === obj.winner);
    //console.log(ComparingEachTeamWinningTheMatchAndToss);
    ComparingEachTeamWinningTheMatchAndToss.forEach((obj)=>{
        if(countOfEachTeam[obj.winner] === undefined){
            countOfEachTeam[obj.winner] = 1;
        } else {
            countOfEachTeam[obj.winner]++;
        }
    });
    return countOfEachTeam;
};


module.exports = numberOfTimesEachTeamWonTheTossAndMatch;