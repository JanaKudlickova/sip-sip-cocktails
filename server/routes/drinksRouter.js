const drinksRouter = require('express').Router()
const drinksController = require('../controllers/drinksControllers');

/* Drinks Routers */


drinksRouter.get('/', drinksController.getAllDrinks);
drinksRouter.post('/', drinksController.addDrink);
drinksRouter.delete('/:id', drinksController.deleteDrink);


module.exports = drinksRouter;