const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const user = require('./routes/tools')

app.use(bodyParser.json({ extends: true }))

// Routes
app.use('/tools', user)

module.exports = app