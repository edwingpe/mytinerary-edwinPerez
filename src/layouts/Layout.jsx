import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Header />
        <main className='grow'>
            {
              children
            }
        </main>
      <Footer />
    </div>
  )
}

export default Layout