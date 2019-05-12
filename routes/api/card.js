const express = require('express');
const request = require('request');

const router = express.Router();

// @route   GET api/card
// @desc    Get info on card/s.
// @access  Public
// @notes   potentially add filters for rarity, cardClass, type, etc...
router.get('/', (req, res) => {
  try {
    // no api key is needed
    const options = {
      uri:
        'https://api.hearthstonejson.com/v1/30103/enUS/cards.collectible.json',
      method: 'GET',
      headers: { 'user-agent': 'node.js' }
    };

    request(options, (error, response, body) => {
      //TODO: create logger file and write to it
      if (error) console.error(error);

      //TODO: include 'backup' JSON file locally for demo purposes
      if (response.statusCode !== 200) {
        return res.status(404).json({
          msg: 'Error retrieving card list from the Hearthstone API.'
        });
      }

      const cardsJSON = JSON.parse(body)
        .filter(
          card => card.rarity.toLowerCase() === 'free' && card.id !== 'HERO_02b' // this id does not have an image, not a perfect solution
        ) //TODO: take out and filter on UI side?
        .map(card => ({
          id: card.id,
          name: card.name,
          thumbnailURI:
            //'http://media.services.zam.com/v1/media/byName/hs/cards/enus/' +
            //'https://art.hearthstonejson.com/v1/render/latest/enUS/256x/' +
            'http://wow.zamimg.com/images/hearthstone/cards/enus/original/' +
            card.id +
            '.png'
        }));

      res.json(cardsJSON);
    });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
