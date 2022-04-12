const express = require('express');
const dotenv = require('dotenv').config; //here i'm calling the .env  file

const port = process.env.PORT || 5000;
const app = express(); //Invoking the express function dependency 

app.use('/api/goals',require('./backend/routes/goalsRoute'));
  //res.status(200).json({msg:'Get goals'});//Not valid for now
app.listen(port, ()=> console.log(`Server started on port ${port}`));
