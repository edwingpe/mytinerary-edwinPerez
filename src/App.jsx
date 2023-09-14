import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { signin_token } from './store/actions/userActions'


function App() {
  const dispatch = useDispatch()

  useEffect( ()=> {
    const token = localStorage.getItem('token')
    if ( token ) {
      dispatch(signin_token())
    }
  }, [] )

  return (
    <RouterProvider  router={router}/>
  )
}

export default App
