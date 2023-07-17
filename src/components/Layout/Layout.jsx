import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import classes from './Layout.module.css'

const Layout = () => {
  return (
    <div className={classes.wrapper}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout