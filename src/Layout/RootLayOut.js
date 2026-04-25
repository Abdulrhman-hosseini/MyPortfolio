import React from 'react'
import  Navbar  from '../component/Navbar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    </>
  )
}