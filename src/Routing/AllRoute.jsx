import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Login from '../Pages/Login'


const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/google-login" element={<Login />}/>
       
    </Routes>
    </>
  )
}

export default AllRoute