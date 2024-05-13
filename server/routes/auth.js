const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const adminmodel = require('../models/admin.js')
const router = express.Router()

router.post('/login', async (req,res)=>{

            const {username,password,role} = req.body;
            if(role === 'admin') {

              const admin = await adminmodel.findOne({username})
               if(!admin){
               return res.json({message: "admin not registered"})
               }
              const validpassword = await bcrypt.compare(password, admin.password)
              if(!validpassword){
              return res.json({message: "wrong Password"})
             }
            const token = jwt.sign({username: admin.username, role: 'admin'}, process.env.admin_key)
            res.cookie('token',token, {httpOnly: true, secure: true})
            return res.json({login:true, role:'admin'})
             }            
            else if(role === 'student'){
  

            }  
            else {
             
            }


}) 

module.exports = router