import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
        <Header />
        <main className='grow'>
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout