const express = require('express')
const dotenv = require('dotenv')
import ('./mongodb.js')
const cors = require('cors')
const cookie = require('cookie-parser')
const router = require('./routes/auth.js')
const router2 = require('./routes/student.js')


const app = express();
app.use(express.json())
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true

}))
app.use(cookie())
dotenv.config()
app.use('/auth',router)
app.use('/student',router2)

const PORT=8080;//

app.listen(PORT,()=>{
    console.log("server is running on port-",PORT);
})

