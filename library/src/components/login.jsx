import React, { useState } from 'react';
import '../css/login.css';
const Login = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [role, setRole] = useState('')


   const handlesubmit = () => {


   }

   return (

      <div className='login-page'>

      <div className="login-container">

         <h2>Login</h2><br/>
        <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder='Enter username'/>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder='Enter Password'/>
        </div>
        <div className="form-group">
        <label htmlFor="role">Role:</label>
       <select name="role" id="role">
       <option value="Student">Student</option>
       <option value="Admin">Admin</option>

       </select>
        </div>
        <button className='login-button'>Login</button>
      </div>



   </div>
   )


}

export default Login
