export const getPlayerCard = (player) => {
  // Your code here
  if(player == null || player.name == ""){
    return null
  }
  if(player.name == ""){
    return null
  }

  let strikeRate = (player.runs/player.balls) * 100
  let finalStr = Number(strikeRate.toFixed(2))


  let Economy = player.runsConceded / player.overs
  let finalEc = Number(Economy.toFixed(2))


  let BattingAvg = player.totalRuns/(player.innings - player.notOuts)
  let finalBa = Number(BattingAvg.toFixed(2))  

  if(player.battingAvg > 30 && player.economy < 8){
     player.isAllRounder = true
  }else {
     player.isAllRounder = false
  }

  let name = player.name
  let isAllRounder = player.isAllRounder

  return {
    name,
    strikeRate:finalStr,
    economy:finalEc,
    battingAvg:finalBa,
    isAllRounder
  }
}

console.log(getPlayerCard({}))