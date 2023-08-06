import React, {useState} from 'react'
import Link from '../Link/Link'
import Login from '../Login/Login'

const Navbar = () => {
  const links = [
    {title: 'home', to: '/home'},
    {title: 'cities', to: '/cities'},
  ]

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <>

      {/* Hamburguer menu*/}
      <div onClick={handleClick} className='md:hidden z-10 px-5'>
        {!nav ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8">
                  <path fillRule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
        }
      </div>

      {/* Desktop menu */}
      <nav className='hidden md:flex items-center gap-5 px-5'>
        {
          links.map((link) => (<Link key={link.title} title={link.title} to={link.to}/>))
        }
        <Login />
      </nav>


      {/* Mobile menu */}
      <div className={!nav ? 'hidden' :'fixed top-0 left-0 w-full h-screen bg-yellow-500 flex flex-col justify-center items-center'} >
          {
            links.map((link) => (<Link key={link.title} title={link.title} to={link.to}/>))
          } 
      </div>
    </>

  )
}

export default Navbar