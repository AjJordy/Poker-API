
exports.fourOfKind = function (array){
  let winner = {"value":0};
  array.forEach((hand, player) => {
    let qtd = {};
    // Encontrando carda iguais 
    hand.forEach(card => {      
      if (qtd[card.value]) qtd[card.value] += 1;
      else qtd[card.value] = 1;
      
      if(qtd[card.value] == 4) {
        console.log('Four Of Kind - Player '+(player+1));
        winner.value = 800;
        winner.player = player+1;
      }
    });    
  });
  return winner;
}
