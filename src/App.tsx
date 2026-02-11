import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/navbar';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navbar/>}>
              <Route index element={<Home/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
