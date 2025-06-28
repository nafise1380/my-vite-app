import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import './App.css'
import LabelCategory from './components/LabelCategory.jsx'
import Section from './components/Section.jsx'
import CheckBox from './components/Checkbox.jsx'


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
           
        

   <div >

  

  <p>نوع وکیل:</p>
  <label><input type="radio" name="sender"  /> همه</label>
  <label><input type="radio" name="sender"  /> پایه یک</label>
  <label><input type="radio" name="sender"  /> کارشناس</label>

  <p>نوع مشاوره:</p>
  <label><input type="radio" name="sender" /> متنی</label>
  <label><input type="radio" name="sender" /> تلفنی</label>
  <label><input type="radio" name="sender" /> شکایت</label>
  <label><input  type="radio" name="sender"/> قرارداد</label>

  <button className="btn w-100 ">اعمال فیلتر</button>
 </div>
          


        
       






    </>
  )
}

export default App
