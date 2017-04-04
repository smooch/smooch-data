require('dotenv').config();

const repo = require('./repo');
const express = require('express');
const bodyParser = require('body-parser');

const log = label => message => console.log(label, message);

express()
  .post('/messages', bodyParser.json(), (req, res) => {
    res.end();

    if (req.body.appUser && req.body.messages) {
      repo.upsertAppUser(req.body.appUser)
      .catch(log('upsertAppUser error'))
      .then(() => repo.insertMessages(req.body)
      .catch(log('insertMessages error')));
    }
  })
  .listen(process.env.PORT);
