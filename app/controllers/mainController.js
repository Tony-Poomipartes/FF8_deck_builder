const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes'
      });
    } catch (error) {
      console.error(error); 
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  
  //? ------méthode de recuperation de la carte-------------

  cardPage:async (request, response) => {
    try {
      const targetId = Number(request.params.id);
      const cardData = await dataMapper.getOneCard(targetId);
      if(cardData) {
        response.render('card', { cardData });
      } else {
        response.status(404).send("Désolé cette carte n'existe pas");
      }
    } catch {
      response.status(500).send(`carte introuvable`);
    }
    
  },

};

module.exports = mainController;
