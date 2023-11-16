import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,  useNavigate, useParams } from 'react-router-dom';

const Update = () => {

  let { id } = useParams();
  const [input, setInput] = useState({
    name: "",
    username: "",
    email : "",
    phone: "",
    address: ""
})

const navigate = useNavigate();

useEffect(() => {
  axios.get(`http://localhost:3000/users/${id}`)
  .then((response) => { 
   // setUser(response.data)
   if(response.data) {
     setInput(response.data); 
   }else {
     console.log("Invalid api");
   }
  })
  .catch(err => console.log(err))
},[id]);

const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, input)
    .then((res) => {
        console.log(res)
        navigate("/")
    }
    )
  
    .catch(err => console.log(err))
};

  return (
    <div className='d-flex w-100  justify-content-center align-items-center bg-light'>
    <div className='w-100 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Update a User Details</h1>
      <form action="" onSubmit={handleUpdate}>
          <div className='mb-3'>
              <label htmlFor="name">Name :</label>
              <input type="text" name='name' className='form-control' placeholder='Enter Your Name'
              value = {input.name} onChange={(e) => setInput({...input, name: e.target.value})}/>
          </div>
          <div className='mb-3'>
              <label htmlFor="username">Username :</label>
              <input type="text" name='username' className='form-control' placeholder='Enter Your Username'
              value = {input.username} onChange={(e) => setInput({...input, username: e.target.value})}/>
          </div>
          <div className='mb-3'>
              <label htmlFor="email">Email :</label>
              <input type="email" name='email' className='form-control' placeholder='Enter Your Email Id'
              value={input.email} onChange={(e) => setInput({...input, email: e.target.value})}/>
          </div>
          <div className='mb-3'>
              <label htmlFor="phone-no">Phone-No :</label>
              <input type="number" name='phone-no' className='form-control' placeholder='Enter Your Phone-No'
              value={input.phone} onChange={(e) => setInput({...input, phone: e.target.value})}/>
          </div>
          <div className='mb-3'>
              <label htmlFor="address">Address :</label>
              <input type="text" name='address' className='form-control' placeholder='Enter Your Address'
              value={input.address} onChange={(e) => setInput({...input, address: e.target.value})}/>
          </div>
          <button className='btn btn-outline-success'>Update</button>
          <Link to='/' className='btn btn-outline-primary ms-3'>Home</Link>
      </form>
    </div>
  </div>
  )
}

export default Update
