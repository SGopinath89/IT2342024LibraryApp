import React, { useState } from 'react';
import '../css/support.css';
import axios from 'axios';


const Support = () => {

  const [suppor , setSuppot] = useState();
  axios.defaults.withCredentials = true;
  const handleSubmit = () => {

   axios.get('http://localhost:8080/support', {suppor})
   








  }
   return (

    <div className='Support'>


      
        

      <div className='support-content'>
      <br></br>
      <h2>Support</h2>
      <h3>Enter your Problem or You can request a book</h3>

      <textarea name="Enter problem" id="Enter" width='100px' height='100px' className='textarea'  onChange={(e)=> setSuppot(e.target.value)}
        ></textarea><br></br>

      <button type='submit' name='submit' onClick={handleSubmit}>Submit</button> 




      </div>



    </div>
   )


}

export default Support