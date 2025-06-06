const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app