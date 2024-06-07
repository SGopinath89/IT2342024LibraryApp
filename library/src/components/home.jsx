import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {

return (

    <div className='home-main'>

      <div className='home-content'>

        <h1 className='title'>University of ABC Book Store </h1>
        <p className='descripttion'>
          Hello there!
          Welcome to University Library System
          Browse Book you required and enjoy your Freedom with us

        </p>
        <div className='image'></div>
       

      </div>
      <div className='footer'>
               <p>University of ABC Library Management System  
                © 2024 University of ABC. All rights reserved.</p>
          
      </div>
      


    </div>
    


    
   )


}

export default Home

