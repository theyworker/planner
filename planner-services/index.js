const express = require('express');
const bodyParser= require('body-parser');
const { getSampleResponse } = require('./db');
const app = express();

app.get('/calendar/day', async function (req, res) {
    let response = await getSampleResponse()

    console.log('$$$$$$',response);
    res.send(response)
  })

app.listen(3300, function() {
    console.log('listening on 3300')
  })
