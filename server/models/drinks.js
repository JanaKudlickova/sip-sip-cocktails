const connection = require("../db");

const getAllDrinks = async () => {
 return await connection.promise().query('SELECT * FROM drinks')
  .then(([results, fields]) => results);
};

const addDrink = async (body) => {
 return await connection.promise().query('INSERT INTO drinks (name, category, type, glass, instructions, url, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
 [body.name, body.category, body.type, body.glass, body.instructions, body.url, body.ingredient1, body.ingredient2, body.ingredient3, body.ingredient4, body.ingredient5, body.ingredient6, body.ingredient7])
  .then(([results]) => results);
};

const deleteDrink = async (id) => {
 return await connection.promise().query('DELETE FROM drinks WHERE id = ?', id)
  .then(([results]) => results);
};


module.exports = {
 getAllDrinks,
 addDrink,
 deleteDrink
};