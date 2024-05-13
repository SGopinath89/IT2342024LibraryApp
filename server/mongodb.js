const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const connection = async () => {
 try {
    mongoose.connect(process.env.url);
    console.log("db connected");
 } catch (err) {

    console.log("Error" + err);
 }
 


}

connection()