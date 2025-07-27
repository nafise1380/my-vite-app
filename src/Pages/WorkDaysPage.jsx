import MessageHeader from "../components/Messages/MessageHeader"
import Navbar from "../components/Profile/Navbar"
import WeekDay from '../components/WorkDays/weekDays'

function WorkDaysPage() {
  return (
    <>
       <MessageHeader/>
       <Navbar tab1='پروفایل' tab2='ساعت کاری' imageSrc='/public/Home.png'/>  
       <WeekDay day='شنبه' times='۸ تا ۲۰ - ۲۱ تا ۲۲'/> 
       <WeekDay day='یکشنبه' times='۹ تا ۱۲'/> 
       <WeekDay day='دوشنبه' time='مشخص نشده'/> 
       <WeekDay day='سه شنبه' time='مشخص نشده'/> 
       <WeekDay day='چهارشنبه' time='مشخص نشده'/> 
       <WeekDay day='پنج شنبه' time='مشخص نشده'/> 
       <WeekDay day='جمعه' time='مشخص نشده'/> 
    </>
  )
}

export default WorkDaysPage