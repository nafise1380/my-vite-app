import BottomOfThePage from "../components/Account/BottomOfThePage"
import Information from "../components/Account/Information"
import ProfileImage from "../components/Account/ProfileImage"
import Header from "../components/Filter/Header"
import Navbar from "../components/Profile/Navbar"


function AccountPage() {
  return (
    <>
      <Header text='اطلاعات حساب'/>
      <Navbar tab1='پروفایل' tab2='اطلاعات حساب' />
      <ProfileImage/>
      <Information question='نام و نام خانوادگی' text='نیما سلیمانی' imageSrc='/edit.png'/>
      <Information question='موبایل' text='۰۹۳۳۱۲۳۴۵۶۷' imageSrc='/edit.png'/>
      <Information question='درباره ی من' text='من نیما سلیمانی، وکیل پایه یک ...' imageSrc='/edit.png'/>
      <BottomOfThePage/>
    </>
  )
}

export default AccountPage