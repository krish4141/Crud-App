import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
const Home = () => {
    const[user, setUser] = useState([]);

    let { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
       axios.get('http://localhost:3000/users')
       .then((res) => {setUser(res.data)})
     
       .catch(err => console.log(err))
    },[]);

    console.log(user);


    const handleDelete = (id) => {
      const message = window.confirm("would you like to delete user");
      if(message) {
        axios.delete(`http://localhost:3000/users/${id}`)
        .then((res) => {
          console.log("user deleted successfully");
          location.reload();
        }).catch((error) => 
        console.log(error)
        )
      }
    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light  p-4 w-100'>
        {/* <li>List of Users</li> */}
        <h1>List Of Users</h1>
          <div className='w-100 rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className="btn btn-outline-success rounded">Create New User</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Phone-No</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item,id) => (
                        <tr key={id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td >{item.phone}</td>
                          <td >{item.address}</td>
                          <td>
                          <Link to={`/read/${item.id}`} className='btn btn-sm btn-outline-info ms-3'> Read</Link>
                            <Link to={`/update/${item.id}`} className='btn btn-sm btn-outline-dark ms-3'> Edit</Link>
                            <button onClick= {() => handleDelete(item.id)} className='btn btn-sm btn-outline-danger ms-3'>Delete</button>
                          </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
    </div>
  )
}

export default Home;
