const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
     roll: {type: String},
     username: {type: String, required:true, unique:true},
     password: {type:String, required:true},
     grade: {type: String}

})

const studentmodel = mongoose.model('Student',studentSchema)

module.exports = studentmodel 