import React, { useEffect } from 'react'
import Router from './routes/Router'
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    }, [])
  })
  
  return (
    <div className='overflow-x-hidden'>
      <Router/>
    </div>
  )
}

export default App
