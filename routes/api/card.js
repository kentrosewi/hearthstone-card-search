const express = require('express');
const request = require('request');

const router = express.Router();

const API_ROUTE =
  'https://api.hearthstonejson.com/v1/30103/enUS/cards.collectible.json';
const API_IMG_URL =
  'http://wow.zamimg.com/images/hearthstone/cards/enus/original/';
const API_IMG_URL_EXT = '.png';

// alternative image sources
//'http://media.services.zam.com/v1/media/byName/hs/cards/enus/'
//'https://art.hearthstonejson.com/v1/render/latest/enUS/256x/'

const RARITY_FREE = 'free';

// @route   GET api/card
// @desc    Get info on card/s.
// @access  Public
// @notes   potentially add filters for rarity, cardClass, type, etc...
router.get('/', (req, res) => {
  try {
    // no api key is needed
    const options = {
      uri: API_ROUTE,
      method: 'GET',
      headers: { 'user-agent': 'node.js' }
    };

    request(options, (error, response, body) => {
      //TODO: create logger file and write service errors to it through middleware
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({
          msg: 'Error retrieving card list from the Hearthstone API.'
        });
      }

      const cardsJSON = JSON.parse(body)
        // limiting to free heartsthone cards
        .filter(card => card.rarity.toLowerCase() === RARITY_FREE)
        .map(card => ({
          id: card.id,
          name: card.name,
          thumbnailURI: API_IMG_URL + card.id + API_IMG_URL_EXT
        }));

      res.json(cardsJSON);
    });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
