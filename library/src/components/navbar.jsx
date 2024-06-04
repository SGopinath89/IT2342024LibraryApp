import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../../public/images/logo.jpg'

const Navbar = ({role}) => {

   return (

    <nav className='navbar'>
      
        <div className='navbar-left'>
        <img className='logo'  src={logo} alt="Logo" />
        <Link to='./' className='navbar-brandName'>Library Management System</Link>
        
        </div>
        <div className='navbar-right'>
        <Link to="./about" className='navbar-link'>About</Link>
        <Link to="./support" className='navbar-link'>Support</Link>
        <Link to="./books" className='navbar-link'>Books</Link>
        { role === 'admin' && <>
               <Link to="./addbook" className='navbar-link'>Add-Book</Link>
               <Link to="./addstudent" className='navbar-link'>Add-Student</Link>
               <Link to="./dashboard" className='navbar-link'>Dashboard</Link>
               </>
        }
        { role === ""  ? 
        <Link to="./login" className='navbar-link'>Login</Link>
        : <Link to="./logout" className='navbar-link'>Logout</Link>
        }
        
        </div>
    </nav>
   )


}

export default Navbar