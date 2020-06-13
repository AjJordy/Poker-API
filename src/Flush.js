
exports.flush = function (array){
  let winner = {"value":0};
  array.forEach((hand, player) => {
    let qtd = 0;
  
    let nipe = hand[0].nipe;
    hand.forEach(card => {      
      if (card.nipe == nipe) qtd++;
    });
    
    if (qtd == 5) {
      console.log('Flush - player '+(player+1));
      winner.value = 600;
      winner.player = player+1;
    }
  });
  return winner;
}
