import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import './App.css'
import LabelCategory from './components/LabelCategory.jsx'
import Section from './components/Section.jsx'
import CheckBox from './components/CheckBox.jsx'
import InputFourChoice from './components/InputFourChoice.jsx'
import FourChoice from './components/FourChoice.jsx'
import BottomOfThePage from './components/BottomOfThePage.jsx'



function App() {

  return (
    <>
      <BrowserRouter>
          <div>
            <Routes>
              <Route path='/'  element={<Header/>} />
            
            </Routes>
          </div>
      
      </BrowserRouter>

         <LabelCategory/>
         <Section/>
         <CheckBox/>
         <InputFourChoice/> 
         <FourChoice/> 
         <BottomOfThePage/>
    </>
  )
}

export default App
