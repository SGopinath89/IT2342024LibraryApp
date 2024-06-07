import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


const Delete = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        axios.delete('http://localhost:8080/book/book/'+id)
        .then(res => {
           if(res.data.deleted){
              navigate('/books')
           }
        }).catch(err => console.log(err))
        
     }, [])


}

export default Delete