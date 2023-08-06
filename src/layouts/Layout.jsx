import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
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