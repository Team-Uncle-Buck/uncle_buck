const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 5000;
const axios = require('axios');
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "AIzaSyDJTlvNCx6wd0jd2geQbtHYcbaYhk2Nj10";

require('dotenv').config();

const app =express();

app.use(morgan('tiny'));
app.use(cors());

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=FinanceIndependence&type=video&key=${GOOGLE_API_KEY}`;

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


app.listen(port, () => console.log('Listening on port', port));


