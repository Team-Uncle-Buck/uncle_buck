const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const fetch = require('node-fetch');
const path = require("path");

require('dotenv').config();
const port = process.env.PORT || 5000;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "AIzaSyANrIw_lVdjg6DECyOyxrOl_5rXpD7T9Xc";

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static( 'client/build' ));
}

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=FinanceIndependence&type=video&key=${GOOGLE_API_KEY}`;

app.get('/', (req, res) => {
  res.send("hello");
});


app.get('/videos', (req,res) => {
  console.log("in the video get request")
  axios.get(url)
    .then( (response) => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    });
});

app.get('/test', (req, res) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, () => console.log('Listening on port', port));


