const dataMapper = require('../dataMapper.js');

const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },
  
  //? -------méthode de recuperation par element--------
  searchByElement:async  (req, res) => {
    const elem = req.query.element;
    try {
      const cards= await dataMapper.getCardByEl(elem);
        res.render('cardList', {
          cards,
          title: 'Liste des cartes'
        });
      } catch (error) {
        console.error(error); 
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
    },

  //? ----------méthode de recuperation par level--------
    searchByLevel:async  (req, res) => {
      const level = Number(req.query.level);
      try {
        const cards= await dataMapper.getCardByLevel(level);
          res.render('cardList', {
            cards,
            title: 'Liste des cartes'
          });
        } catch (error) {
          console.error(error); 
          res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
      },
  
  //? ---------méthode de recuperation par Valeur--------
      searchByValue:async  (req, res) => {
        const value = Number(req.query.value);
        const direction = String(req.query.direction);
        try {
          const cards= await dataMapper.getCardByValue(direction , value);
          console.log("card value :", cards);
            res.render('cardList', {
              cards,
              title: 'Liste des cartes'
            }); 
          } catch (error) {
            console.error(error); 
            res.status(500).send(`An error occured with the database :\n${error.message}`);
          }
        }
};

module.exports = searchController;