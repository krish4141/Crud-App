import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {

  const [user, setUser] = useState([]);
  let { id } = useParams();

  useEffect(() => {
     axios.get(`http://localhost:3000/users/${id}`)
     .then((response) => { 
      // setUser(response.data)
      if(response.data) {
        setUser(response.data); 
      }else {
        console.log("Invalid api");
      }
     })
     .catch(err => console.log(err))
  },[id]);
  

  return (
    <div className='d-flex  justify-content-center align-items-center bg-light  w-100'>
      
        <div className='w-100 border bg-white shadow px-5 pt-3 pb-5 rounded' >
        <h3>Details Of the User</h3>
         <div className='mb-2 d-flex'>
          <b>Name: </b>
           <p className='ms-2'> {user.name}</p>
         </div>
         <div className='mb-2 d-flex'>
          <b>Username:</b>
           <p className='ms-2'> {user.username}</p>
         </div>
         <div className='mb-2 d-flex'>
          <b>Email-Id:</b>
           <p className='ms-2'> {user.email}</p>
         </div>
         <div className='mb-2 d-flex'>
          <b>Phone-No:</b>
           <p className='ms-2'> {user.phone}</p>
         </div>
         <div className='mb-2 d-flex'>
          <b>Address: </b>
           <p className='ms-2'>{user.address}</p>
         </div>
         <Link to={`/update/${user.id}`} className='btn btn-sm btn-outline-dark'>Edit the Details</Link>
         <Link to='/' className='btn btn-sm btn-outline-primary ms-3'>Back to Home</Link>
         </div>
      
    </div>
  )
}

export default Read
