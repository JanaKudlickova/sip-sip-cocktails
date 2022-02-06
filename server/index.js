const express = require("express");
const serverPort = process.env.PORT || 8000;
const app = express();
const port = 8000;
const cors = require("cors");

const {setupRoutes} = require ('./routes')

app.use(express.json());
app.use(cors());
setupRoutes(app);

app.listen(serverPort, () => {
    console.log(`Server is running on ${port}`);
  });