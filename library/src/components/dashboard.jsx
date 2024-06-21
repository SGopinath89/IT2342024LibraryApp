import React, { useEffect, useState } from 'react';
import '../css/dashboard.css';
import axios from 'axios';

const Dashboard = () => {
   const [students, setStudents] = useState(0);
   const [admins, setAdmins] = useState(0);
   const [books, setBooks] = useState(0);


   
   useEffect(()=>{

     axios.get('http://localhost:8080/dashboard')
     .then(res =>{
       if(res.data.ok){

         setStudents(res.data.student)
         setAdmins(res.data.admin)
         setBooks(res.data.book)
         
       }

     }).catch(err => console.log(err))
     

   }, [])


   return (

    <div className='dashboard'>
        

      <div className='dashboard-content'>
      <h2>Total Books</h2><br />
      <h2>{books}</h2>
      
      </div>
      

      <div className='dashboard-content'>
      <h2>Total Students</h2><br />
      <h2>{students}</h2>

      </div>
      <div className='dashboard-content'>
      <h2>Total Admins</h2><br />
      <h2>{admins}</h2>
      
     </div>
     

    </div>
   
   )


}

export default Dashboard