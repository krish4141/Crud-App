import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [input, setInput] = useState({
        name: "",
        username: "",
        email : "",
        phone: "",
        address: ""
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users', input)
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
        <h1>Create New user</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="name">Name :</label>
                <input type="text" name='name' className='form-control' placeholder='Enter Your Name'
                onChange={(e) => setInput({...input, name: e.target.value})}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="username">Username :</label>
                <input type="text" name='username' className='form-control' placeholder='Enter Your Username'
                 onChange={(e) => setInput({...input, username: e.target.value})}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="email">Email :</label>
                <input type="email" name='email' className='form-control' placeholder='Enter Your Email Id'
                 onChange={(e) => setInput({...input, email: e.target.value})}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="phone-no">Phone-No :</label>
                <input type="number" name='phone-no' className='form-control' placeholder='Enter Your Phone-No'
                 onChange={(e) => setInput({...input, phone: e.target.value})}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="address">Address :</label>
                <input type="text" name='address' className='form-control' placeholder='Enter Your Address'
                 onChange={(e) => setInput({...input, address: e.target.value})}/>
            </div>
            <button className='btn btn-outline-success'>Submit</button>
            <Link to='/' className='btn btn-outline-primary ms-3'>Home</Link>
        </form>
      </div>
    </div>
  )
}

export default Create
