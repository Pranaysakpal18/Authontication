import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-300'>

      <Login/>
      <Profile/>
      
    </div>
  )
}

export default App
