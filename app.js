const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
  console.log('request')
});

app.listen(3000, _ => console.log('listenin'))