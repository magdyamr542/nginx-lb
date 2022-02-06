const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'pug')

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const headers = req.headers;
  const ips = req.ips;
  res.render('index', { title: 'Nginx Load balancing',  headers : JSON.stringify(headers) , ips : JSON.stringify(ips) })
});

app.listen(port , () => {
  console.log('Server started at http://localhost:' + port);
});


