const express = require('express');
const path = require('path');
const ip = require("ip");

const app = express();
app.set('view engine', 'pug')

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.render('index', { title: 'Nginx Load balancing',    server_ip : ip.address() })
});

app.listen(port , () => {
  console.log('Server started at http://localhost:' + port);
});


