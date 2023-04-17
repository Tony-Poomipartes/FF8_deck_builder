const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },

  //? --------méthode de recuperation de la carte--------

  getOneCard: async (id) => {
    const query = `SELECT * FROM "card" where  "id" =$1;`
    const values = [id];
    const result =await database.query(query , values)
    if(result.rows.length === 1) {
      return result.rows[0];
    } else {
      return null;
    }
  },

  //? ---------méthode de recuperation par element-----------

  async getCardByEl(element) {
    if (element === 'null'){

      const query = `select * from card where element is null;`;
      const result = await database.query(query);
      return result.rows;

    }else {

    const query = `select * from card where element =$1 ;`
    const values = [element];
    const result = await database.query(query, values);
    return result.rows;
    }
  },
  
  //? ---------méthode de recuperation par level-----------

  async getCardByLevel(level) {
  
    const query = `select * from card where level =$1 ;`
    const values = [level];
    const result = await database.query(query, values);
    return result.rows;
    
  },
  
  //? ---------méthode de recuperation par value -----------

  async getCardByValue(direction , value) {
    console.log("param", direction , value);
    const query = `select * from card where 
    $1 = $2 ` ;
    const values = [ direction , value];
    const result = await database.query(query, values);
    console.log("datamap",result.rows);
    return result.rows;
    
  },
};


module.exports = dataMapper;
