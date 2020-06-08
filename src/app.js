const express = require('express');
const routes = express();
const bodyParser = require('body-parser')
const port = 8080;

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.get('/',  (req, resp) => resp.send("Hello world"));

routes.post('/play', (req, resp) => {
  const array = req.body;
  array.forEach((hand, player) => {
    // console.log(element);
    console.log(player+1);
    let score = {};
    
    // Encontrando carda iguais 
    hand.forEach(card => {
      console.log(card);
      if (score[card.value]) score[card.value] += 1;
      else score[card.value] = 1;
    });
    
    console.log(score);
  });
  resp.json();
});

routes.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));