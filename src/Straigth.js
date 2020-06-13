
exports.straigth = function (array){
  let winner = {"value":0};
  array.forEach((hand, player) => {
    let count = 1;

    // Encontrando carda iguais 
    hand.sort(function(a,b) {
        return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
    });
    let before = parseInt(hand[0].value);

    hand.forEach(card => {
      // console.log("card: "+JSON.stringify(card));
      // console.log("value: "+parseInt(card.value));
      if (before + 1 == parseInt(card.value)) {
        before = parseInt(card.value);
        count++;
      }     
    });
    // console.log('count: '+count); 
    
    if (count == 5){      
      console.log('Straight - player '+(player+1));
      winner.value = 500;
      winner.player = player+1;          
    }
    
  });
  return winner;
}
