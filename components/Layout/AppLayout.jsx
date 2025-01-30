import React from 'react'
import { Headers } from '../UI/Header'
import { Outlet } from 'react-router-dom'
import footer from "../UI/Footer"
import Footers from '../UI/Footer'
const AppLayout = () => {
  return (
    <>
    <Headers/>
    <Outlet/>
    <Footers/>
    </>
  )
}

export default AppLayout