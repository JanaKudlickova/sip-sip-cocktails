const Drinks = require('../models/drinks');
const Joi = require("joi");

const getAllDrinks = async (req, res) => {
  // Query DB
 const data = await Drinks.getAllDrinks();
 // Check if there was data
 if (data.length) res.status(200).json(data);
 else res.status(404).send('No drinks found');
}

const addDrink = async (req, res) => {
    const { name, category, type, glass, instructions, url, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7 } = req.body;

    const { error: validationErrors } = Joi.object({
        name: Joi.string().max(20).required(),
        category: Joi.string().max(50).required(),
        type: Joi.string().max(20),
        glass: Joi.string().max(20),
        instructions: Joi.string().max(400).required(),
        url: Joi.string().max(400),
        ingredient1: Joi.string().max(30),
        ingredient2: Joi.string().max(30),
        ingredient3: Joi.string().max(30),
        ingredient4: Joi.string().max(30),
    }).validate({ name, category, type, glass, instructions, url, ingredient1, ingredient2, ingredient3, ingredient4 }, { abortEarly: false });

    if (validationErrors) {
        res.status(422).json({ errors: validationErrors.details });
    } else {
        // Query DB
        const data = await Drinks.addDrink(req.body);
        // If it was successful
        if (data.affectedRows) {
            res.status(201).json({
                id: data.insertId,
                name: req.body.name,
                category: req.body.category,
                type: req.body.type,
                glass: req.body.glass,
                instructions: req.body.instructions,
                url: req.body.url,
                ingredient1: req.body.ingredient1,
                ingredient2: req.body.ingredient2,
                ingredient3: req.body.ingredient3,
                ingredient4: req.body.ingredient4,
                ingredient5: req.body.ingredient5,
                ingredient6: req.body.ingredient6,
                ingredient7: req.body.ingredient7,
            })
        } else {
            res.status(500).send('Error creating a drink.');
        }
    }
}

const deleteDrink = async (req, res) => {
    const id = req.params.id;
   
    const { error: validationErrors } = Joi.object({
     id: Joi.string().required()
    }).validate({ id }, { abortEarly: false });
   
   
    if (validationErrors) {
     res.status(422).json({ error: validationErrors.details })
    } else {
   
    // Query
    const data = await Drinks.deleteDrink(req.params.id);
    // If it was successful
    if (data.affectedRows) res.status(204).json(data);
    else res.status(500).send('Error deleting a drink.');
   }
   }

   module.exports = {
    getAllDrinks,
    addDrink,
    deleteDrink
   };