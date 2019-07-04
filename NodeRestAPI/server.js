require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true });
const db = mongoose.connection;

db.on('error',(err)=> console.erroe(err));
db.once('open',()=>console.log('Connected to database'))

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers',subscribersRouter)

const PORT = 3000;
app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));