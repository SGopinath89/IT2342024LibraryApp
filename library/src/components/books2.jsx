import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard2 from './bookcard2';
import '../css/book2.css'

const Books2 = () => {
   const [books, SetBooks] = useState([])
   useEffect(()=>{
    axios.get('http://localhost:8080/book/books2')
    .then(res =>{
      SetBooks(res.data)
      console.log(res.data)

    }).catch(err => console.log(err))
    
     


   }, [],[])
   return (
   
    <div className='booklist'>


     {
      books.map(book => {

          return <BookCard2 key = {book.id} book = {book}></BookCard2>
         

      })
     }
     
    </div>
    
   )


}

export default Books2