const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const db = require("./models");
const User = db.user;
var session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))
  
  
  app.use(express.static(path.join(__dirname, 'files')));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(express.json())

  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  