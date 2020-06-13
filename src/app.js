const express = require('express');
const routes = express();
const bodyParser = require('body-parser')
const port = 8080;
 
const { royalFlush } = require('./RoyalFlush');
const { fourOfKind } = require('./FourOfKind');
const { iqualCard } = require('./IqualCard');
const { fullHouse } = require('./FullHouse');
const { flush } = require('./Flush');
const { straigth } = require('./Straigth');
const { convert, findWinner } = require('./utils');

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.post('/play', (req, resp) => {
  const array = convert(req.body);

  let score =[];  
  score.push(royalFlush(array));
  score.push(fourOfKind(array));
  score.push(fullHouse(array));
  score.push(iqualCard(array));
  score.push(flush(array));
  score.push(straigth(array));

  const winner = findWinner(score);
  resp.json(winner); 
});

routes.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));