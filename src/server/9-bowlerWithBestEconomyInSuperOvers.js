function bowlerWithBestEconomyInSuperOver(deliveriesData) {
    if (!Array.isArray(deliveriesData)) {
      return {};
    }
    const bestBowlerInSuperOver = {};
   
    deliveriesData.forEach((obj) => {
        if (bestBowlerInSuperOver[obj.bowler] === undefined) {
            bestBowlerInSuperOver[obj.bowler] = Number(obj.is_super_over);
          } else {
            bestBowlerInSuperOver[obj.bowler] += Number(obj.is_super_over);
          }
    });
    const finalBowlerData = {};
    for(let key in bestBowlerInSuperOver){
        if(bestBowlerInSuperOver[key] !== 0){
            finalBowlerData[key] = bestBowlerInSuperOver[key];
        }
    };
    return finalBowlerData;
};

module.exports = bowlerWithBestEconomyInSuperOver;
  
 