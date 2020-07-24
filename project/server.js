const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 5000;

require('dotenv').config();

const app =express();

app.use(morgan('tiny'));
app.use(cors());

app.get('/videos', (req,res) => {
  res.json([]);
});


app.listen(port, () => console.log('Listening on port', port));


