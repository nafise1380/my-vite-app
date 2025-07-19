import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import ProfilePage from './Pages/ProfilePage.jsx'
import FilterPage from './Pages/FilterPage.jsx'
import MessagesPage from './Pages/MessagesPage.jsx'
import Transactions from './Pages/Transactions.jsx'




function App() {

  return (
    <>
      <BrowserRouter>
          <div>
            <Routes>
              <Route path='filter'  element={<FilterPage/>} />
              <Route path='profile'  element={<ProfilePage/>} />
              <Route path='message'  element={<MessagesPage/>} />
              <Route path='transaction'  element={<Transactions/>} />
            </Routes>
          </div>
      </BrowserRouter>
        
    </>
  )
}

export default App
