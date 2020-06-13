
exports.royalFlush = function (array){
  let winner = {"value":0};
  array.forEach((hand, player) => {
    // console.log("player: "+(player+1));
    let count = 1;

    // Encontrando carda iguais 
    hand.sort(function(a,b) {
        return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
    });
    let before = parseInt(hand[0].value);
    let nipe = hand[0].nipe;
    // console.log("before: "+before);

    hand.forEach(card => {
      // console.log("card: "+JSON.stringify(card));
      // console.log("value: "+parseInt(card.value));
      if (before + 1 == parseInt(card.value) && card.nipe == nipe) {
        before = parseInt(card.value);
        count++;
      }     
    });
    // console.log('count: '+count); 
    
    if (count == 5){
      if (hand[0].value == '10') { // Royal flush
        console.log('Royal flush - player '+(player+1));
        winner.value = 1000;
        winner.player = player+1;
      } else { // Straight flush
        console.log('Straight flush - player '+(player+1));
        winner.value = 900;
        winner.player = player+1;
      }      
    }
    
  });
  return winner;
}
