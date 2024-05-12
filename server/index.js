const express = require('express')
const dotenv = require('dotenv')
import ('./mongodb.js')
const cors = require('cors')
const cookie = require('cookie-parser')
const router = require('./routes/auth.js')


const app = express();
app.use(express.json())
app.use(cors())
app.use(cookie())
dotenv.config()
app.use('/auth',router)

app.listen(process.env.port,()=>{

    console.log("server is running on port");
})
