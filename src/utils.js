exports.convert = function (body){
  let array = [];

  body.forEach((element, index) => {
    array[index] = element.map((num) => {
      if (num.value == "j" || num.value == "J") return {value: 11, nipe: num.nipe};
      else if (num.value == "q" || num.value == "Q") return {value: 12, nipe: num.nipe};
      else if (num.value == "k" || num.value == "K") return {value: 13, nipe: num.nipe};
      else if (num.value == "a" || num.value == "A") return {value: 14, nipe: num.nipe};
      else return num;
    })
  });
  return array;
};


exports.findWinner = function(score) {
  score.sort(function(a,b) {
    return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
  }).reverse();
  // console.log(score);
  let winner = {};
  winner.winner = score[0].player;
  return winner;
};