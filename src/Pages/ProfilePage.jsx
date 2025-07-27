import Headers from "../components/Profile/Headers.jsx";
import Navbar from "../components/Profile/Navbar.jsx";
import ProfileSection from "../components/Profile/ProfileSection.jsx";
import SectionOfConsultation from "../components/Profile/SectionOfTelephoneConsultation.jsx"
import About from "../components/Profile/About.jsx"
export default function ProfilePage(){
  let list={
    list1:"کیفری" , list2:"سایر" , list3:"خوانده" ,list4:"مالیات" ,list5:"۳مورد دیگر"
  }
    return(
        <>
          <Headers subject="پروفایل"/>
          <Navbar t1='مشاوره تلفنی' t2='مشاوره ملکی' t3=' نیما سلیمانی' slash='/' imageSrc='/icon.svg'/>
          <ProfileSection list={list}/>
          <SectionOfConsultation subject="تعرفه مشاوره" imageSrc="/phone.svg" text="  مشاوره تلفنی فوری" price="۲۰ دقیقه ۱۰۰ هزار تومان" button=" تماس فوری"/> 
          <SectionOfConsultation list1="برای تنظیم قرارداد" list2="تنظیم شکایت" imageSrc="icon-wrapper.svg" text="مشاوره متنی فوری" price="۲۰ دقیقه ۹۰ هزار تومان" button=" چت فوری"/>
          <About/>
        </>
    )
}