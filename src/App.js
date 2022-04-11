import React from 'react'
import './App.css';
import Layout from './components/Layout'
import Aboutpage from './pages/Aboutpage';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Routes>
                <Route path='/' element={<Layout />}>
                      <Route index element={<Homepage />} />
                      <Route path='about' element={<Aboutpage />} />
                      <Route path='login' element={<Login />} />
                      <Route path='register' element={<Register />} />
                </Route>
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
