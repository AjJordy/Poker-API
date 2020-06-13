
exports.iqualCard = function (array){
  let winner = {"value":0};
  array.forEach((hand, player) => {
    let qtd = {};
    // Encontrando carda iguais 
    hand.forEach(card => {      
      if (qtd[card.value]) qtd[card.value] += 1;
      else qtd[card.value] = 1;

      if (qtd[card.value] == 3)  qtd[card.value] *= 2;
      
      const score = Object.values(qtd).reduce((a, b) => {
        if(b > 1) a + b;
      });

      if (winner.value < score) {
        winner.player = player+1;
        winner.value = score;
      }
    });   
    // console.log('qtd: '+JSON.stringify(qtd));
   
  });
  // console.log(winner);
  return winner;
}
