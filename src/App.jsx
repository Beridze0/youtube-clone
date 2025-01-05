import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App