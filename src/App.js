import React from 'react'
import Header from './Component/Header/Header'
import { Route, Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages/HomePages'
import DoctorDetail from './Pages/Doctors/DoctorDetail/DoctorDetail'

const App = () => {
  return (
    <div>
            <Header/>
      <Routes>
           <Route path='/' element={<HomePages/>} />
           <Route path='/doctor-details/:id' element={<DoctorDetail/>} />

      </Routes>
    </div>
  )
}

export default App
