const express = require('express');
const queries = require('./database/queries');
const routeAPI = require('./routes/api');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'hbs')

app.use('/', routeAPI)

app.listen(port, (req,res)=>{
  console.log('KEYBLADE!')
})
