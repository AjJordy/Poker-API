
exports.fullHouse = function (array){
  let winner = {"value":0};
  array.forEach((hand, player) => {
    let qtd = {};
    // Encontrando carda iguais 
    hand.forEach(card => {      
      if (qtd[card.value]) qtd[card.value] += 1;
      else qtd[card.value] = 1;
    });
    // console.log('qtd: '+JSON.stringify(qtd));    
    // console.log(Object.values(qtd).sort().toString());
    if (Object.values(qtd).sort().toString() == '2,3'){
      console.log('Full House - player '+(player+1));
      winner.value = 700;
      winner.player = player+1;
    }
  });
  return winner;
}
