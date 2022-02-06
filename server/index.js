const express = require("express");
const connection = require('./db');
const serverPort = process.env.PORT || 8000;
const app = express();
const port = 8000;
const Joi = require('joi');
const cors = require("cors");

connection.connect((err) => {
    if (err) {
      console.error('error connecting to db', err);
    } else {
      console.log('connected to db');
    }
  });

app.use(express.json());
app.use(cors());

//get all drinks
app.get('/drinks', (req, res) => {
    connection.promise().query('SELECT * FROM drinks')
      .then(([results]) => {
        res.json(results);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error retrieving products from db.');
      });
   });

//Add a new drink
app.post('/drinks', (req, res) => {
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
      connection.promise()
        .query('INSERT INTO drinks (name, category, type, glass, instructions, url, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, category, type, glass, instructions, url, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7])
        .then(([result]) => {
          const createdDrink = { id: result.insertId, name, category, type, glass, instructions, url, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7 };
          res.json(createdDrink);
        }).catch((err) => { console.error(err); res.sendStatus(500); });
    }
  });
  
//Delete a drink
app.delete('/drinks/:id', (req, res) => {
    connection.promise()
      .query('DELETE FROM drinks WHERE id = ?', [req.params.id])
      .then(([result]) => {
        if (result.affectedRows) res.sendStatus(204);
        else res.sendStatus(404);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });  

app.listen(serverPort, () => {
    console.log(`Server is running on ${port}`);
  });