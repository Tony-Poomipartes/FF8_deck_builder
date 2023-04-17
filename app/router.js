const express = require('express');
const router = express.Router();

//?------------import---------------------------------------
const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const deckController = require('./controllers/deckController');

//?------------mainController-------------------------------
router.get('/', mainController.homePage);
router.get('/card/:id', mainController.cardPage);

//?------------searchController-------------------------------
router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.searchByElement);
router.get('/search/level', searchController.searchByLevel);
router.get('/search/values', searchController.searchByValue);

//?------------deckController-------------------------------
router.get('/deck', deckController.deck);
router.get('/deck/add/:id', deckController.addcard);
router.get('/deck/delete/:id', deckController.delcard);

module.exports = router;