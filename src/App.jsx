import { useState } from 'react'
import Header from './components/Header.jsx'
import './App.css'
import LabelCategory from './components/LabelCategory.jsx'
import Section from './components/Section.jsx'


function App() {

  return (
    <>
       <Header/>
       <LabelCategory/>
        <Section/>
        
           
        

        <div class="filter-box">



  

  <label>
    <input type="checkbox" />
    فقط آنلاین
  </label>

  <p>نوع وکیل:</p>
  <label><input type="radio" name="lawyer" value="all" checked /> همه</label>
  <label><input type="radio" name="lawyer" value="basic" /> پایه یک</label>
  <label><input type="radio" name="lawyer" value="expert" /> کارشناس</label>

  <p>نوع مشاوره:</p>
  <label><input type="checkbox" /> متنی</label>
  <label><input type="checkbox" /> تلفنی</label>
  <label><input type="checkbox" /> شکایت</label>
  <label><input type="checkbox" /> قرارداد</label>

  <button class="apply-button">اعمال فیلتر</button>
 </div>
        


        
       






    </>
  )
}

export default App
