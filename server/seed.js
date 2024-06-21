const express = require('express')
const bcrypt = require('bcrypt')
const adminmodel = require('./models/admin.js')
import ('./mongodb.js')

async function adminaccount() {
   try {

        const admincount = await adminmodel.countDocuments()
        if(admincount === 0) {
    
                const hashPassword = await bcrypt.hash('adminpassword',10)
                const newAdmin = new adminmodel({
                    username : 'admin',
                    password : hashPassword 
    
                })
                await newAdmin.save()
                console.log("account created")
    
        } else {


             console.log("account alredy exists");
        }
    
    } 
    catch(err) {


   console.log("error")

    }
}


adminaccount()