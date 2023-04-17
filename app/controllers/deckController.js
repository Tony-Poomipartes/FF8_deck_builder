const dataMapper = require('../dataMapper.js');

const deckController  = {

  //? -------------méthode envoi vers le deck---------------
  deck :async  (req, res) => {
    if(!req.session.bookmarks) {
      req.session.bookmarks = [];
    }
    res.render('cardList', {
      cards:req.session.bookmarks,
      title: 'Liste du deck'
    }); 
   },
  
  //? ---------méthode d'ajout d'une carte dans le deck----------
  
  addcard: async (request, response) => {

    if(!request.session.bookmarks) {
      request.session.bookmarks = [];
    }
    const targetId = Number(request.params.id);
    const foundCard = request.session.bookmarks.find(card => card.id === targetId)
    if(!foundCard) {
      try {
        if (request.session.bookmarks.length <= 4){
        const cardFromDB = await dataMapper.getOneCard(targetId);

        if(cardFromDB) {
          request.session.bookmarks.push(cardFromDB);
        }
      }
      } catch (error) {
        console.log(error);

        response.status(500).send(`Désolé, une erreur s'est produite`);
      }
    }

    response.redirect('/deck');
  },
  
  //? -------méthode de suppression d'une carte dans le deck-------
  
  delcard: (request, response) => {
    const targetId = Number(request.params.id);
    request.session.bookmarks = request.session.bookmarks.filter((card) => card.id !== targetId);
    response.redirect('/deck');
  }

};
module.exports = deckController;