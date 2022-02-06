const express = require("express");
const connection = require('./db');
const serverPort = process.env.PORT || 8000;
const app = express();
const port = 8000;
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


app.listen(serverPort, () => {
    console.log(`Server is running on ${port}`);
  });