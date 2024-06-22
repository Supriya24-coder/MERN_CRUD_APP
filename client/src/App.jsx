import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Components/Form';
import UpdateForm from "./Components/UpdateForm"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path ="/add" element={<Form/>}/>
      <Route path='/:id' element={<UpdateForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;