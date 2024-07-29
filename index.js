const express = require ('express');
const Routes = require ('./routes/route')
const dbconnect = require('./cofig/connection');
const cors = require('cors')

require('dotenv').config();
  
const app = express();
dbconnect();
   
app.use(express.json());
app.use(cors())
app.use('/api/v1',Routes);

const PORT = process.env.PORT || 8000;

app.listen (PORT,() => {
    console.log(`App iss running ${PORT}`);
})   
  