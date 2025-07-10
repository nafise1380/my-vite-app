import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import ProfilePage from './Pages/ProfilePage.jsx'
import FilterPage from './Pages/FilterPage.jsx'



function App() {

  return (
    <>
      <BrowserRouter>
          <div>
            <Routes>
              <Route path='/'  element={<FilterPage/>} />
              <Route path='profile'  element={<ProfilePage/>} />
            </Routes>
          </div>
      </BrowserRouter>
        
    </>
  )
}

export default App
