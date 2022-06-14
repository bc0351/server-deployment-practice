'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('SUCCESS');
})

app.get('/test', (req, res) => {
  res.status(200).send('All your base are belong to us.');
})

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {app, start};
