const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jihun:1234@boiler.g1z3u.mongodb.net/test?retryWrites=true&w=majority', {
useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB good connect'))
 .catch(err => console.log(err))

app.get('/', (req, res) => {  res.send('Hello World!~~~~hid')})

app.listen(port, () => {  console.log(`Example app listening  ${port}`)})