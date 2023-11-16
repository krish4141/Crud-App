import { useState } from 'react'
import {  Routes, Route} from "react-router-dom"; 
import './App.css'
import Home from './Home';
import Update from './Update';
import Read from './Read';
import Create from './Create';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 

  return (
    // <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/create' element={<Create/>}></Route>
      <Route exact path='/update/:id' element={<Update/>}></Route>
      <Route exact path='/read/:id' element={<Read/>}></Route>
    </Routes>
    // </BrowserRouter>
  )
}

export default App
