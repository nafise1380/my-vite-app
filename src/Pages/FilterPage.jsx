
import LabelCategory from '../components/Filter/LabelCategory.jsx'
import Section from '../components/Filter/Section.jsx'
import CheckBox from '../components/Filter/CheckBox.jsx'
import InputFourChoice from '../components/Filter/InputFourChoice.jsx'
import FourChoice from '../components/Filter/FourChoice.jsx'
import BottomOfThePage from '../components/Filter/BottomOfThePage.jsx'
import Header from '../components/Filter/Header.jsx'

export default function FilterPage(){
    return(
        <>
          <Header subgect='فیلتر'/>
         <LabelCategory/>
         <Section/>
         <CheckBox/>
         <InputFourChoice/> 
         <FourChoice/> 
         <BottomOfThePage/>
        </>
    )
}