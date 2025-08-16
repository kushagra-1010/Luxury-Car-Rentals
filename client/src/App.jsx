import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const location = useLocation()
  const isOwnerPath = location.pathname.startsWith('/owner')

  return (
    <>
      {/* Show Navbar only if not in /owner routes */}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      {/* Define your routes here */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBookings />} />
      </Routes>
    </>
  )
}

export default App
