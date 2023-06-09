// Configuración del server
const express = require('express')
const db =require('./config/db')
const routes = require('./routes/index')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const corsOptions = {
  origin: "http://localhost:3000/",
  credentials: true,
 };

const app=express()
app.use(cookieParser())

app.use(cors(corsOptions));
app.use(express.json())
app.use('/api', routes)

db.sync({force:false}).then(()=>
{app.listen(8080,()=>{console.log('listening on port 8080')})})