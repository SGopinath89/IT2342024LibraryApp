const express = require('express')
const dotenv = require('dotenv')
import ('./mongodb.js')
const cors = require('cors')
const cookie = require('cookie-parser')
const router = require('./routes/auth.js')
const router2 = require('./routes/student.js')
const bookrouter = require('./routes/book.js')


const bookmodel = require('./models/book.js')
const adminmodel = require('./models/admin.js')
const studentmodel = require('./models/Student.js')

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
app.use('/book',bookrouter)

app.get('/dashboard', async (req,res)=>{

  try{
    

   const student = await studentmodel.countDocuments()
   const admin = await adminmodel.countDocuments()
   const book = await bookmodel.countDocuments()
   
    return res.json({ok: true,student,admin,book})

  }catch(err){

  return res.json(err)

  }



})





const PORT=8080;//

app.listen(PORT,()=>{
    console.log("server is running on port-",PORT);
})

