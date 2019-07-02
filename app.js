const express = require('express');
const { Pool, Client } = require('pg');
const pool = new Pool();
const app = express();

require('dotenv').config();

(async _ => {
  pool.query('SELECT * FROM photo_post', (err, res) => {
    console.log(err, res)
    pool.end()
  })

  app.get('/', (req, res) => {
    console.log('request')
  });
  
  app.listen(3000, _ => console.log('listenin'))
})();