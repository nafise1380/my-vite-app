import Headers from "../components/Profile/Headers.jsx";
import Navbar from "../components/Profile/Navbar.jsx";
import ProfileSection from "../components/Profile/ProfileSection.jsx";
import SectionOfConsultation from "../components/Profile/SectionOfTelephoneConsultation.jsx"

export default function ProfilePage(){
    return(
        <>
          <Headers/>
          <Navbar/>
          <ProfileSection/>
          <SectionOfConsultation subject="تعرفه مشاوره" imageSrc="/phone.svg" text="  مشاوره تلفنی فوری" price="۲۰ دقیقه ۱۰۰ هزار تومان" button=" تماس فوری"/> 
          <SectionOfConsultation list1="برای تنظیم قرارداد" list2="تنظیم شکایت" imageSrc="icon-wrapper.svg" text="مشاوره متنی فوری" price="۲۰ دقیقه ۹۰ هزار تومان" button=" چت فوری"/>
        </>
    )
}