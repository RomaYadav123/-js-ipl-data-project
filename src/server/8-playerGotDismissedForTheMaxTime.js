function dismissedPlayerRecordedAtTheMax(deliveriesData){
    if(!Array.isArray(deliveriesData)){
        return {};
    }
        deliveriesData.forEach((player_dismissed)=>{
            const dismissedPlayerData = deliveriesData.filter((obj)=>obj.player_dismissed);
            console.log(dismissedPlayerData);
        });
    
};

module.exports = dismissedPlayerRecordedAtTheMax;