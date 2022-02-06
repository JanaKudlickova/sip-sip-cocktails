const express = require("express");
const serverPort = process.env.PORT || 8000;
const app = express();
const port = 8000;
const cors = require("cors");

const {setupRoutes} = require ('./routes')

app.use(express.json());
app.use(cors());
setupRoutes(app);

/*
app.listen(serverPort, () => {
    console.log(`Server is running on ${port}`);
  });
  */


// Serve static assets if in production. 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('sip-sip-client/build'));
  app.get('*', (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'sip-sip-client', 'build', 'index.html'))
  });
}

app.listen(serverPort);