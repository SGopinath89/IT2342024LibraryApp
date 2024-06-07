import React from 'react';
import '../css/book.css'
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
    const {name , author ,imageUrl} = book
   
   return (
     
    <div className='bookcard'>

         <img src={imageUrl} alt={name} className='bookimage'></img>
         <div className="bookdet">
             <h2>{name}</h2>
             <p>{author}</p>


         </div>
         <div className="bookactions">

          <button><Link to={`/book/${book._id}`}>Edit</Link></button>
          <button><Link to={`/delete/${book._id}`}>Delete</Link></button>
          

         </div>
 
    </div>
   )


}

export default BookCard