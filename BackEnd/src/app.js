const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

const corsOptions = {
  origin: function (origin, callback) {
    // Allow undefined for tools like Postman
    if (!origin || origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
};

// MUST come before routes
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app