import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-[100vh]'>
        <header>
          <Header />
        </header>
        <main className='flex flex-col grow'>
          <Outlet />
        </main>
        <footer>
          <Footer />  
        </footer>
        
    </div>
  )
}

export default Layout