import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';


const Home = () => {
   return (

    <div className='home-main'>

      <div className='home-content'>

        <h1 className='title'>University of ABC Book Store </h1>
        <p className='descripttion'>
          Hello there!
          Welcome to University Library
          Browse Book you required and enjoy your Freedom with us

        </p>
        <div className='button-main'>

        <Link to='./login' className='button-login'>Login</Link><br></br><br></br>
       <Link to='./register' className='button-signup'>Sign-up</Link>

        </div>
       

      </div>
      <div className='hero-image'></div>


    </div>
   )


}

export default Home

