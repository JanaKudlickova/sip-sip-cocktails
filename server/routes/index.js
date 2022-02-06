const drinksRouter = require('./drinksRouter');

const setupRoutes = (app) => {
 app.use('/drinks', drinksRouter)
}

module.exports = {
setupRoutes,
}