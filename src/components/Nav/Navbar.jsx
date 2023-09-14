import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '/src/index.css'
import { logout } from '../../store/actions/userActions'


const Navbar = () => {

  const user = useSelector( store => store.users.user)
  const dispatch = useDispatch()
  const links = [
    { title: 'home', to: '/' },
    { title: 'cities', to: '/cities' },
    { title: 'signin', to: '/signin' },
    { title: 'signup', to: '/signup' }
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
        <Link to='/' className='title-font text-3xl md:text-4xl hover:text-gray-700 hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:cursor-pointer'> home </Link>
        <Link to='/cities' className='title-font text-3xl md:text-4xl hover:text-gray-700 hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:cursor-pointer'> cities </Link>
        {
          user
            ?
            (<>
            <img className='w-[3.2rem] h-[3.2] rounded-full' src={`${user.image}`} alt="profile_photo" />
            <Link onClick={ () => dispatch( logout() )} to='/' className='title-font text-3xl md:text-4xl hover:text-gray-700 hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:cursor-pointer'> logout </Link>
            </>)
            :(<>
                <img className='w-[3.2rem] h-[3.2] rounded-full' src='/alien_avatar_default.png' alt="profile_photo" />
                <Link to='/signin' className='title-font text-3xl md:text-4xl hover:text-gray-700 hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:cursor-pointer'> signin </Link>
                <Link to='/signup' className='title-font text-3xl md:text-4xl hover:text-gray-700 hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:cursor-pointer'> signup </Link>  
              </>)
        }
        
        {/* {
          links.map((link) => (<Link className='title-font text-3xl md:text-4xl hover:text-gray-700 hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:cursor-pointer' key={link.title} to={link.to}>{link.title}</Link>))
        } */}
      </nav>


      {/* Mobile menu */}
      <div className={!nav ? 'hidden' :'fixed top-0 left-0 w-full h-screen bg-yellow-500 flex flex-col justify-center items-center'} >
          {
            links.map((link) => (<Link className='title-font text-3xl md:text-4xl' key={link.title} to={link.to}>{link.title}</Link>))
          } 
      </div>
    </>

  )
}

export default Navbar